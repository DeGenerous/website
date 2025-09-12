<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Agent"));
</script>

<section class="flex">
  <span class="flex-row">
    <img
      width="400"
      height="400"
      src="/investors/pac.webp"
      alt="Agent"
      loading="lazy"
      decoding="async"
    />
    <h1 bind:this={tagline}>Agent</h1>
  </span>
  <article class="container appear-bottom">
    <h3>Social Memetic Agent</h3>
    <h3>(Coming Soon)</h3>
    <p>
      A community-led experimental token and system built on top of DGRS to power The Meme, the first AI Story Agent on X. It fuels viral, on-demand multimedia narratives that start on social media and continue on CoNexus. This project bridges pop culture, crypto, entertainment, and social virality. This project combined our creative & agentic frameworks with its social engagement system.
    </p>
    <p>
     The agent uses txt2story, img2story, and video engines to transform everyday static content into dynamic, shareable, and hilarious storylines.
    </p>
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

      p {
        width: 100%;
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
