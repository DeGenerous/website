<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";

  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";

  let taglineSection = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();
  let typer: ReturnType<typeof typeWrite> | null = null;

  const startTyping = () =>
    setTimeout(async () => {
      if (!tagline) return;

      // Abort any lingering instance (safety) and start fresh
      typer?.abort();
      tagline.classList.remove("sr-only");
      typer = typeWrite(tagline, "The GenAI Ecosystem for Storytelling", 100);
    }, 1500);

  onMount(startTyping);

  onMount(() =>
    observeElement(
      taglineSection!,
      "viewable",
      () => {},
      goToTheNextSection,
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // middle band
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )
  );

  onDestroy(() => {
    typer?.abort();
    typer = null;
  });

  function scrollDown() {
    const trailer = document.getElementById("trailer") as HTMLVideoElement | null;
    trailer!.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const goToTheNextSection = () => {
    const sectionInView = Array.from(taglineSection!.classList).includes("viewable");
    if (sectionInView) return;
    scrollDown();
  };
</script>

<section class="tagline flex mar-auto fade-in" bind:this={taglineSection}>
  <!-- Keep real text in markup for SEO/no-JS, the script will overwrite it -->
  <h1 class="sr-only" bind:this={tagline}>
    The GenAI Ecosystem <br class="pc-only" /> for Storytelling
  </h1>

  <h5>
    License, produce, consume, and monetize stories at scale with Text-To-Story & on-chain ownership
  </h5>

  <button class="pad-inline" onclick={scrollDown}> Explore the Future of Entertainment </button>

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

      @include respond-up(small-desktop) {
        max-width: 42rem;
      }
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
