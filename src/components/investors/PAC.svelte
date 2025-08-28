<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "$PAC"));
</script>

<section class="flex">
  <span class="flex-row">
    <img width="400" height="400" src="/investors/pac.webp" alt="PAC" />
    <h1 bind:this={tagline}>$PAC</h1>
  </span>
  <article class="container appear-bottom">
    <h3>Program and Control</h3>
    <p>
      PAC is a community-led experimental token and system built on top of DGRS
      to power The Meme, the first AI Story Agent on X. It fuels viral,
      on-demand multimedia narratives that start on social media and continue on
      CoNexus. This project bridges pop culture, crypto, entertainment, and
      social virality. PAC combined our creative & agentic frameworks with its
      social engagement system.
    </p>
    <p>
      The agent uses text2story, img2story, and video engines to transform
      everyday static content into dynamic, shareable, and hilarious storylines.
    </p>
    <span class="flex-row gap-8">
      <a class="button-anchor" href="/investors"> Buy </a>
      <a class="button-anchor" href="/investors"> Read More </a>
    </span>
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    img {
      width: 4rem;
      border: 0.25rem solid $light-blue;
      border-radius: 50%;
    }

    article {
      text-align: left;

      h3,
      a {
        font-family: $font-sans;
      }
    }
  }

  :global(body.dark) {
    section {
      img {
        border-color: $cyan;
      }
    }
  }
</style>
