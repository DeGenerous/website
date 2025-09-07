<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";

  let section = $state<HTMLElement>();

  onMount(() => {
    observeElement(
      section!,
      "visible",
      () => {},
      () => {},
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section class="charity-platform" bind:this={section}>
  <div class="container transition">
    <h2>A Platform That Powers Ecosystems</h2>

    <article class="flex">
      <p>
        Our tech has supported everyone from indie creators to
        <b>nine-figure companies</b>. CoNexus and DGRS tooling have:
      </p>
      <ul class="default-ul flex">
        <li>Enabled <b>authors</b> to turn novels into playable games</li>
        <li>
          Helped <b>startups prototype gamified platforms</b> in weeks, not years
        </li>
        <li>
          Provided <b>enterprises with storytelling tools</b> that connects brand, culture, and education
        </li>
        <li>
          Proven that <b>interactive AI media</b> can be a bridge between creativity and commerce
        </li>
      </ul>
      <p>
        We’re not just building products - we’re pioneering new markets. From education to
        entertainment, publishing to philanthropy, our open storytelling engine is reshaping entire
        industries.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    margin-block: 4rem;

    .container {
      opacity: 0;
      transform: translateX(-100%);
      transition-duration: 0.6s;

      ul {
        align-items: flex-start;
      }
    }
  }

  :global(.charity-platform.visible .container) {
    transform: none;
    opacity: 1;
  }
</style>
