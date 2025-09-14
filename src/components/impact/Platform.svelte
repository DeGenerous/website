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
      () => typeWrite(tagline!, "A Platform That Powers Ecosystems"),
      () => {},
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section class="charity-platform flex" bind:this={section}>
  <h2 class="auto-width" bind:this={tagline}>A Platform That Powers Ecosystems</h2>
  <div class="container transition">
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
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    .container {
      opacity: 0;
      transform: translateX(-100%);
      transition-duration: 0.6s;

      ul,
      p {
        width: 100%;
      }

      ul {
        align-items: flex-start;
      }

      @include respond-up(small-desktop) {
        align-items: flex-start;
        text-align: left;
      }
    }
  }

  :global(.charity-platform.visible .container) {
    transform: none;
    opacity: 1;
  }
</style>
