<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  onMount(() => {
    observeElement(section!, null, () => {
      typeWrite(
        tagline!,
        "Dream to Screen: Unlock Your Storytelling Potential"
      );
    });
  });

  const images = Array.from({ length: 16 }, (_, i) => `/conexus/${i + 1}.webp`);
</script>

<section class="container fade-in" bind:this={section}>
  <h3 bind:this={tagline}>
    Dream to Screen: Unlock Your Storytelling Potential
  </h3>
  <p>
    CoNexus, DGRS Labs’ flagship app, transforms how content is made, shared,
    and owned. Our text-to-story engine is the most efficient way for anyone to
    create or star in high‑quality, visually immersive stories spanning novels,
    films, and story games.
  </p>

  <div class="stories" aria-label="Featured CoNexus stories">
    <!-- duplicate once -->
    <ul class="reel" style="--count:{images.length}">
      {#each [...images, ...images] as src, i}
        <li>
          <img {src} alt={`Story ${(i % images.length) + 1}`} loading="lazy" />
        </li>
      {/each}
    </ul>
  </div>

  <p>
    Leveraging Generative AI and blockchain-backed ownership, we’re turning
    imagination into reality - giving creators and communities the tools to
    power tomorrow’s digital economy. Whether you want to play, create, or
    innovate, now is the moment to step into the next era of entertainment.
  </p>

  <a
    class="button-anchor"
    href="https://conexus.degenerousdao.com/"
    target="_blank"
  >
    Launch CoNexus
  </a>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  /* Tunables */
  $card-w: 10rem;
  $card-h: 10rem;
  $space: 1rem; // spacing between cards (use margin, not gap)
  $edge-fade: 5%;
  $dur-per-card: 1s; // speed: total duration = count * dur-per-card

  section {
    margin-block: 4rem;

    @include respond-up("small-desktop") {
      margin-block: 0 4rem;
    }
  }

  /* Mask container */
  .stories {
    width: 100%;
    overflow: hidden;

    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0,
      #000 #{$edge-fade},
      #000 calc(100% - #{$edge-fade}),
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0,
      #000 #{$edge-fade},
      #000 calc(100% - #{$edge-fade}),
      transparent 100%
    );
  }

  /* The moving track */
  .reel {
    --count: var(--count, 16);
    --dur: calc(var(--count) * #{$dur-per-card});

    /* IMPORTANT:
     - inline-flex so width shrinks to content
     - min-width:max-content so track width == exact content width
     - no padding, no borders, no gap
    */
    display: inline-flex;
    min-width: max-content;
    padding: 0;
    margin: 0;
    list-style: none;

    will-change: transform;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    animation: slide-right var(--dur) linear infinite;

    > li {
      flex: 0 0 auto;
      width: $card-w;
      height: $card-h;
      border-radius: 0.5rem;
      overflow: hidden;

      /* spacing via margin, NOT gap */
      margin-inline-end: $space;

      @include respond-up("large-desktop") {
        width: $card-w * 1.5;
        height: $card-h * 1.5;
        margin-inline-end: 1.25rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition:
          transform 0.25s ease,
          filter 0.25s ease,
          opacity 0.25s ease;
      }
    }
  }

  /* Hover: pause + highlight */
  .stories:hover .reel {
    animation-play-state: paused;
  }
  .stories:hover img {
    filter: grayscale(1) blur(0.05rem);
    opacity: 0.75;
  }
  .reel > li:hover img {
    filter: none;
    opacity: 1;
    transform: scale(1.06);
  }
</style>
