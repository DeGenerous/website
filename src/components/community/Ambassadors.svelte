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
      resetTitle,
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section id="ambassadors" class="flex appear-left-observer" bind:this={section}>
  <h2 bind:this={tagline}>Ambassador &amp; Affiliate programs</h2>

  <div class="container">
    <img class="round-8" src="/community/ambassadors.gif" alt="Ambassadors & Affiliates" />
    <article class="flex">
      <p>
        If you have <b>1,000+ followers</b> on any platform and want to help us grow CoNexus, you can
        apply to become an official Ambassador or Affiliate.
      </p>

      <p>
        <b>Ambassadors</b> represent our brand long-term, collaborate on campaigns, get early access
        to <b>new features</b>, and enjoy
        <b>exclusive compensation</b>, <b>perks</b>, and <b>visibility</b>
        across our ecosystem. <b>Affiliates</b> receive personal
        <b>referral codes</b>
        and earn guaranteed <b>rewards</b> when new users join CoNexus using their link.
      </p>

      <a
        class="button-anchor mar-auto"
        href="https://form.typeform.com/to/FpVTWoC6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </a>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  @include respond-up(full-hd) {
    section {
      min-height: 50vh;
    }
  }

  .container {
    img {
      @include gray-border;
    }

    article {
      align-items: flex-start;
      text-align: left;

      a {
        font-family: $font-sans;
      }
    }

    @include respond-up(small-desktop) {
      img {
        width: 30rem;
      }
    }

    @include respond-up(full-hd) {
      flex-direction: row;

      article {
        a {
          margin-inline: 0;
        }
      }
    }
  }

  :global(#ambassadors.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
