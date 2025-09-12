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
      () => typeWrite(tagline!, "CoNexus API"),
      resetTitle,
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section id="conexus-api" class="flex appear-left-observer" bind:this={section}>
  <h2 bind:this={tagline}>CoNexus API</h2>
  <div class="container">
    <img
      class="round-8"
      src="/enterprise/conexus-api.gif"
      alt="CoNexus API"
      decoding="async"
    />
    <article class="flex">
      <p>
        Embed a living, breathing GenAI story engine into your website, app, game, brand portal, or
        learning platform - no server upgrades or AI expertise required.
      </p>
      <p>With a single line of code, you can:</p>
      <ul class="default-ul flex">
        <li>
          <b>Launch interactive gamified narratives</b> that adapt to each user’s choices
        </li>
        <li>
          <b>Auto‑generate custom art, narration & music</b> on demand
        </li>
        <li>
          <b>Tokengate chapters</b> or unlock reward sequences for loyalty programs, course modules,
          or in‑game achievements
        </li>
        <li>
          <b>Measure engagement</b> with built‑in analytics
        </li>
      </ul>
      <p>
        Our clients see
        <b>70 min avg session time</b>
        and spikes in community activation. Popular use cases include gamified education, character evaluation,
        and social engagement tools.
      </p>
      <p>
        Prefer zero‑code? We’ll build, market, and host your interactive stories on CoNexus for you.
      </p>
      <p>
        <a href="mailto:biz@dgrslabs.ink" target="_blank" rel="noopener noreferrer">
          Contact us
        </a>
        to get your API key or discuss an in‑platform collaboration.
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

      ul {
        align-items: flex-start;
      }
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

  :global(#conexus-api.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
