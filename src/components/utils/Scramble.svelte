<script lang="ts">
  import { scrambleVisible } from "@stores/scramble.svelte";

  // config
  const TEXT = "DGRS LABS";
  const DURATION = 1200;
  const FADE = 300;
  const HOLD = 300;
  const TICK = 100;
  const CHARSET = "DGRSLABSCONEXU#$%&@";
  const NBSP = "\u00A0";
  const FLICKER_MIN = 3;
  const FLICKER_MAX = 4;

  const chars = Array.from(TEXT);
  const isSpace = chars.map((c) => c === " ");
  const animIdx = chars.map((_, i) => i).filter((i) => !isSpace[i]);

  const lockTimeByIndex: number[] = Array(chars.length).fill(DURATION);
  animIdx.forEach((idx, k) => {
    lockTimeByIndex[idx] = Math.round(((k + 1) / animIdx.length) * DURATION);
  });

  let display = $state(chars.map((c) => (c === " " ? NBSP : c)) as string[]);
  let finished = $state(false); // toggles .fadeout
  let fading = $state(false); // keep DOM mounted during fade
  let animating = false;
  let locked: boolean[] = isSpace.slice();
  let intervalId: number | null = null;
  let holdId: number | null = null;
  let elapsed = 0;

  const randChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)];
  const randInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Edge-trigger on store
  let lastSeen: boolean | null = null;
  $effect(() => {
    const curr = $scrambleVisible;
    if (curr === lastSeen) return;
    lastSeen = curr;

    if (curr) start();
    else fade(); // external hide -> fade out
  });

  function start() {
    if (animating) return;
    animating = true;
    finished = false; // no fade class yet
    fading = false;
    elapsed = 0;

    display = chars.map((c) => (c === " " ? NBSP : c)) as string[];
    locked = isSpace.slice();
    clearTimers();

    intervalId = window.setInterval(() => {
      if (!$scrambleVisible) {
        clearTimers();
        animating = false;
        return;
      }
      elapsed += TICK;

      // lock pass
      for (const i of animIdx) {
        if (!locked[i] && elapsed >= lockTimeByIndex[i]) locked[i] = true;
      }

      // default to final letters
      for (let i = 0; i < chars.length; i++) {
        display[i] = isSpace[i] ? NBSP : chars[i];
      }

      // flicker a few still-unlocked
      const pool = animIdx.filter((i) => !locked[i]);
      const target = Math.min(pool.length, randInt(FLICKER_MIN, FLICKER_MAX));
      for (let k = 0; k < target; k++) {
        const j = Math.floor(Math.random() * pool.length);
        const idx = pool.splice(j, 1)[0];
        if (idx !== undefined) display[idx] = randChar();
      }

      // done -> hold, then fade, then flip store off
      if (animIdx.every((i) => locked[i])) {
        animating = false;
        clearTimers();
        holdId = window.setTimeout(beginFadeOut, HOLD); // <— don’t set store false here
      }
    }, TICK);
  }

  function beginFadeOut() {
    holdId = null;
    if (fading) return;
    finished = true; // add .fadeout class
    fading = true; // keep DOM via {#if $scrambleVisible || fading}
    window.setTimeout(() => {
      fading = false; // unmount now
      scrambleVisible.set(false); // flip store AFTER fade
    }, FADE);
  }

  function fade() {
    // called if someone sets store=false externally
    clearTimers();
    animating = false;
    if (!fading) beginFadeOut();
  }

  function clearTimers() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if (holdId !== null) {
      clearTimeout(holdId);
      holdId = null;
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
    font-weight: bold;
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
