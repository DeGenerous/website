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
      () => typeWrite(tagline!, "Ambassador & Affiliate programs"),
      resetTitle
    );
  });
</script>

<section
  id="ambassadors"
  class="flex full-height appear-left-observer"
  bind:this={section}
>
  <h2 bind:this={tagline}>Ambassador &amp; Affiliate programs</h2>

  <article class="container">
    <p>
      If you have 1,000+ followers on any platform and want to help us grow
      CoNexus, you can apply to become an official Ambassador or Affiliate.
    </p>

    <p>
      Ambassadors represent our brand long-term, collaborate on campaigns, get
      early access to new features, and enjoy exclusive compensation, perks, and
      visibility across our ecosystem. Affiliates receive personal referral
      codes and earn guaranteed rewards when new users join CoNexus using their
      link.
    </p>

    <a
      class="button-anchor mar-auto"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply Now
    </a>
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  article {
    align-items: flex-start;
    text-align: left;

    a {
      font-family: $font-sans;
    }
  }

  :global(#ambassadors.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
