<script lang="ts">
  import typeWrite from "@utils/typewriter";
  import { onMount } from "svelte";

  let tagline = $state<HTMLHeadingElement>();
  let subtitle = $state<HTMLHeadingElement>();

  onMount(() => {
    subtitle!.innerText = "";
    typeWrite(tagline!, "$PAC").then(() =>
      typeWrite(subtitle!, "Program and Control")
    );
  });
</script>

<section class="flex">
  <span class="flex-row">
    <img class="fade-in" src="/investors/pac.webp" alt="PAC" />
    <h1 bind:this={tagline}>$PAC</h1>
  </span>
  <h3 bind:this={subtitle}>Program and Control</h3>
  <article class="pad fade-in">
    PAC is a community-led experimental token and system built on top of DGRS to
    power The Meme, the first AI Story Agent on X. It fuels viral, on-demand
    multimedia narratives that start on social media and continue on CoNexus.
    This project bridges pop culture, crypto, entertainment, and social
    virality. PAC combined our creative & agentic frameworks with its social
    engagement system. The agent uses text2story, img2story, and video engines
    to transform everyday static content into dynamic, shareable, and hilarious
    storylines.
  </article>
  <div class="flex-row gap-8 fade-in">
    <a
      class="button-anchor"
      href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
    >
      Buy
    </a>
    <a
      class="button-anchor"
      href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
    >
      Read More
    </a>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    img {
      width: 4rem;
      border: 0.25rem solid $light-blue;
      border-radius: 50%;
    }

    h1 {
      @include light-blue(1, text);
    }

    article {
      text-align: left;
    }
  }

  :global(body.dark) {
    section {
      img {
        border-color: $cyan;
      }

      h1 {
        @include cyan(1, text);
      }
    }
  }
</style>
