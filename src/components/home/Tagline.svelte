<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";

  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => {
    if (tagline)
      typeWrite(tagline!, "The GenAI Ecosystem for Storytelling", 100);
  });

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
</script>

<div class="tagline flex mar-auto">
  <h1 bind:this={tagline}>The GenAI Ecosystem for Storytelling</h1>
  <h5>
    License, produce, consume, and monetize stories at scale with Text-To-Story
    & on‑chain ownership
  </h5>
  <button class="pad-inline" onclick={scrollDown}>
    Explore the Future of Entertainment
  </button>
  <VoidArrowSVG onclick={scrollDown} />
</div>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  .tagline {
    height: 100vh;
    @include auto-width;

    h1 {
      line-height: 1.25;
      font-size: 3rem;
      @include light-blue(1, text);

      @include respond-up(small-desktop) {
        font-size: 4rem;
      }
    }

    h5 {
      max-width: 40rem;
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
