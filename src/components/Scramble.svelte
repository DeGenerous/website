<script lang="ts">
  import { scrambleVisible } from "@stores/scramble.svelte";

  // config
  const TEXT = "DGRS LABS";
  const DURATION = 1200; // ms
  const FADE = 300; // ms
  const TICK = 150; // ms
  const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const NBSP = "\u00A0";
  const FLICKER_MIN = 3;
  const FLICKER_MAX = 4;

  // precompute
  const chars = Array.from(TEXT);
  const isSpace = chars.map((c) => c === " ");
  const animIdx = chars.map((_, i) => i).filter((i) => !isSpace[i]); // skip spaces

  // lock times (left → right)
  const lockTimeByIndex: number[] = Array(chars.length).fill(DURATION);
  animIdx.forEach((idx, k) => {
    lockTimeByIndex[idx] = Math.round(((k + 1) / animIdx.length) * DURATION);
  });

  // state
  let display = $state(chars.map((c) => (c === " " ? NBSP : c)) as string[]); // <-- start with final letters
  let finished = $state(false);
  let fading = $state(false);
  let animating = false;
  let locked: boolean[] = isSpace.slice(); // spaces start "locked"
  let intervalId: number | null = null;
  let elapsed = 0;

  const randChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)];
  const randInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Edge-triggered effect on store changes
  let lastSeen: boolean | null = null;
  $effect(() => {
    const curr = $scrambleVisible;
    if (curr === lastSeen) return;
    lastSeen = curr;

    if (curr) start();
    else fade();
  });

  function start() {
    if (animating) return;
    animating = true;
    finished = false;
    fading = false;
    elapsed = 0;

    // show final letters immediately
    display = chars.map((c) => (c === " " ? NBSP : c)) as string[];
    locked = isSpace.slice();
    clear();

    intervalId = window.setInterval(() => {
      if (!$scrambleVisible) {
        clear();
        animating = false;
        return;
      }

      elapsed += TICK;

      // 1) lock pass
      for (const i of animIdx) {
        if (!locked[i] && elapsed >= lockTimeByIndex[i]) {
          locked[i] = true;
        }
      }

      // 2) default to final letters for everything
      for (let i = 0; i < chars.length; i++) {
        display[i] = isSpace[i] ? NBSP : chars[i];
      }

      // 3) flicker a few still-unlocked letters
      const pool = animIdx.filter((i) => !locked[i]);
      const targetCount = Math.min(
        pool.length,
        randInt(FLICKER_MIN, FLICKER_MAX)
      );
      // choose unique indices by splicing from pool
      for (let k = 0; k < targetCount; k++) {
        const j = Math.floor(Math.random() * pool.length);
        const idx = pool.splice(j, 1)[0];
        if (idx !== undefined) display[idx] = randChar();
      }

      // done?
      if (animIdx.every((i) => locked[i])) {
        finished = true;
        animating = false;
        clear();
        // flip the store ONCE; fade() will run via $effect
        scrambleVisible.set(false);
      }
    }, TICK);
  }

  function fade() {
    clear();
    animating = false;

    // only fade if something was shown
    if (!fading && (finished || display.some((ch) => ch !== ""))) {
      finished = true;
      fading = true;
      window.setTimeout(() => {
        fading = false;
      }, FADE);
    } else {
      fading = false;
    }
  }

  function clear() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
</script>

{#if $scrambleVisible || fading}
  <div class="overlay" class:fadeout={finished} aria-hidden="true">
    <div class="word">
      {#each display as ch}<span>{ch}</span>{/each}
    </div>
  </div>
{/if}

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: grid;
    place-items: center;

    transition: all 0.3s ease-in-out;
    opacity: 1;
    visibility: visible;
    background-color: $dark-blue;

    &.fadeout {
      opacity: 0;
      transform: scale(1.5) skew(-15deg, 15deg);
      visibility: hidden;
      pointer-events: none;
    }
  }

  .word {
    display: inline-flex;
    gap: 0;
    line-height: 1;
    font-family: $font-sans;
  }

  span {
    text-transform: uppercase;
    font-size: 10vw;
    display: inline-block;
    width: 0.7em;
    color: $cyan;
  }

  @media (prefers-reduced-motion: reduce) {
    .overlay {
      transition: none;
    }
    span {
      transition: none;
    }
  }
</style>
