<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    observeElement(
      section!,
      null,
      () => typeWrite(tagline!, "Dream to Screen: Unlock Your Storytelling Potential"),
      () => {}, // no reset
      undefined,
      true // animate once and keep visible
    );
  });

  onMount(resetTitle);

  const images = Array.from({ length: 16 }, (_, i) => `/conexus/${i + 1}.webp`);
</script>

<section class="flex" bind:this={section}>
  <h3 class="auto-width" bind:this={tagline}>
    Dream to Screen: Unlock Your Storytelling Potential
  </h3>
  <div class="container fade-in">
    <p class="pc-narrow">
      CoNexus, DGRS Labs’ flagship app, transforms how content is made, shared, and owned. Our
      text-to-story engine is the most efficient way for anyone to create or star in high‑quality,
      visually immersive stories spanning novels, films, and story games.
    </p>

    <div class="stories" aria-label="Featured CoNexus stories">
      <!-- duplicate once -->
      <ul class="reel" style="--count:{images.length}">
        {#each [...images, ...images] as src, i}
          <li>
            <img class="transition" {src} alt={`Story ${(i % images.length) + 1}`} />
          </li>
        {/each}
      </ul>
    </div>

    <p class="pc-narrow">
      Leveraging Generative AI and blockchain-backed ownership, we’re turning imagination into
      reality - giving creators and communities the tools to power tomorrow’s digital economy.
      Whether you want to play, create, or innovate, now is the moment to step into the next era of
      entertainment.
    </p>

    <a class="button-anchor" href="https://conexus.degenerousdao.com/" target="_blank">
      Launch CoNexus
    </a>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  /* Tunables */
  $card-w: 10rem;
  $card-h: 10rem;
  $space: 1rem; // spacing between cards (use margin, not gap)
  $edge-fade: 5%;
  $dur-per-card: 2s; // speed: total duration = count * dur-per-card

  .container {
    padding-inline: 0;
    max-width: 100vw;
    border-radius: 0;
    border-left: none;
    border-right: none;

    p {
      @include auto-width;
    }
  }

  /* Mask container */
  .stories {
    width: 100%;
    overflow: hidden;
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
      }
    }
  }

  /* Hover: pause + highlight */
  .stories:hover .reel {
    animation-play-state: paused;
  }
  .stories:hover img {
    opacity: 0.5;
  }
  .reel > li:hover img {
    opacity: 1;
  }
</style>
