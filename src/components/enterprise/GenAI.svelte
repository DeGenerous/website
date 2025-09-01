<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    resetTitle();
    observeElement(
      section!,
      "visible",
      () => typeWrite(tagline!, "GenAI Film Studio"),
      resetTitle
    );
  });
</script>

<section
  id="gen-ai"
  class="flex pad-inline appear-left-observer full-height"
  bind:this={section}
>
  <h2 bind:this={tagline}>GenAI Film Studio</h2>
  <div class="container">
    <img class="round-8" src="/enterprise/gen-ai.gif" alt="GenAI Film Studio" />
    <article class="flex">
      <p>
        Harness the power of AI alongside veteran directors and editors to
        produce everything from 15sec ads to feature‑length films. Our hybrid
        workflow uses generative tools for rapid storyboarding and asset
        creation, then layers in human craftsmanship for cinematic polish.
      </p>
      <p>
        Clients achieve up to
        <b>90% cost and time savings</b>, without sacrificing emotional impact
        or production value.
      </p>
      <p>
        Our studio has delivered hundreds of high-quality ads, films, and shows,
        amassing tens of millions of views.
      </p>
      <p>
        <a href="mailto:biz@degenerousdao.com" target="_blank">
          Schedule a creative call
        </a>
        to bring your project to life.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    img {
      width: 100%;
      @include gray-border;
    }

    article {
      align-items: flex-start;
      text-align: left;
    }

    @include respond-up(small-desktop) {
      img {
        width: 30rem;
      }
    }

    @include respond-up(full-hd) {
      flex-direction: row;
    }
  }

  :global(#gen-ai.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
