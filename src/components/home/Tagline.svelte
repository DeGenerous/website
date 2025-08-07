<script lang="ts">
  import { onMount } from "svelte";

  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";
  import typeWrite from "@utils/typewriter";

  let tagline: HTMLHeadingElement;

  onMount(() => {
    if (tagline) {
      tagline.innerHTML = ""; // Clear any existing content
      typeWrite(tagline, "The GenAI Ecosystem for Storytelling");
    }
  });

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
</script>

<div class="tagline flex mar-auto">
  <h1 class="blink-caret" bind:this={tagline}>
    The GenAI Ecosystem for Storytelling
  </h1>
  <p>
    License, produce, consume, and monetize stories at scale with Text-To-Story
    & on‑chain ownership
  </p>
  <button class="pad-inline" onclick={scrollDown}>
    Explore the Future of Entertainment
  </button>
  <VoidArrowSVG onclick={scrollDown} />
</div>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  .tagline {
    height: 100vh;
    max-width: 95%;

    h1 {
      line-height: 1.25;
      font-size: 3rem;
      @include light-blue(1, text);

      @include respond-up(small-desktop) {
        font-size: 4rem;
      }
    }

    p {
      max-width: 40rem;
      @include font(h5);
    }

    button {
      margin-block: 0.5rem;
      box-shadow: none !important;
      border: none !important;
      @include blue(1, bg, bright);

      &:hover:not(&:disabled),
      &:active:not(&:disabled),
      &:focus:not(&:disabled) {
        @include light-blue;
        @include white-txt(1);
      }
    }
  }

  :global(body.dark) {
    .tagline {
      h1 {
        @include cyan(1, text);
      }

      button {
        @include cyan(0.85);
        @include dark-blue(1, text);

        &:hover:not(&:disabled),
        &:active:not(&:disabled),
        &:focus:not(&:disabled) {
          @include cyan;
          @include dark-blue(1, text);
        }
      }
    }
  }
</style>
