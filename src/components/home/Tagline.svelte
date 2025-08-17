<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import typeWrite from "@utils/typewriter";
  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";

  let tagline = $state<HTMLHeadingElement>();
  let typer: ReturnType<typeof typeWrite> | null = null;

  onMount(async () => {
    await tick(); // ensure <h1> is in the DOM
    if (!tagline) return;

    // Abort any lingering instance (safety) and start fresh
    typer?.abort();
    tagline.classList.remove("sr-only");
    typer = typeWrite(tagline, "The GenAI Ecosystem for Storytelling", 100);
  });

  onDestroy(() => {
    typer?.abort();
    typer = null;
  });

  function scrollDown() {
    window.scrollTo({ top: window.innerHeight + 5 * 16, behavior: "smooth" });
  }
</script>

<section class="tagline flex mar-auto fade-in">
  <!-- Keep real text in markup for SEO/no-JS, the script will overwrite it -->
  <h1 class="sr-only" bind:this={tagline}>
    The GenAI Ecosystem for Storytelling
  </h1>

  <h5>
    License, produce, consume, and monetize stories at scale with Text-To-Story
    & on-chain ownership
  </h5>

  <button class="pad-inline" onclick={scrollDown}>
    Explore the Future of Entertainment
  </button>

  <VoidArrowSVG onclick={scrollDown} />
</section>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  .tagline {
    height: 100vh;
    @include auto-width;

    h1 {
      line-height: 1.25;
      /* Responsive without blowing up on mobile */
      font-size: clamp(2rem, 4vw + 1rem, 4rem);
      @include light-blue(1, text);
    }

    h5 {
      max-width: 40rem;
    }

    button {
      margin-block: 0.5rem;
    }
  }

  :global(body.dark) {
    .tagline h1 {
      @include cyan(1, text);
    }
  }
</style>
