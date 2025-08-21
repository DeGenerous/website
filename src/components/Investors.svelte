<script lang="ts">
  import { onMount } from "svelte";

  import Potentials from "@components/investors/Potentials.svelte";
  import PAC from "@components/investors/PAC.svelte";
  import Token from "@components/investors/Token.svelte";
  import Roadmap from "@components/investors/Roadmap.svelte";

  let activeSection = $state<string>("potentials");

  const sections = ["Potentials", "PAC", "Token", "Roadmap"];

  const lookForSectionInURL = () => {
    const urlHash = window.location.hash.slice(1);

    if (urlHash && sections.some((section) => section.toLowerCase() == urlHash))
      activeSection = urlHash;
  };

  onMount(lookForSectionInURL);
</script>

<svelte:window onhashchange={lookForSectionInURL} />

<nav class="investor-sections flex round-8">
  {#each sections as section}
    <button
      class="void-btn round-8"
      class:active={activeSection === section.toLowerCase()}
      onclick={() => (activeSection = section.toLowerCase())}
    >
      {section}
    </button>
  {/each}
  <span
    class="active-investor-mobile mobile-only round-8 transition"
    style:top="{sections.findIndex(
      (section) => section.toLowerCase() === activeSection
    ) * 3}rem"
  ></span>
  <span
    class="active-investor-pc pc-only round-8 transition"
    style:left="{sections.findIndex(
      (section) => section.toLowerCase() === activeSection
    ) * 10}rem"
  ></span>
</nav>

{#if activeSection === "potentials"}
  <Potentials />
{:else if activeSection === "pac"}
  <PAC />
{:else if activeSection === "token"}
  <Token />
{:else if activeSection === "roadmap"}
  <Roadmap />
{/if}

<section class="learn-more container fade-in">
  <h4>Want to learn more?</h4>
  <div class="flex-row flex-wrap">
    <span>
      Join our
      <a href="https://degenerousdao.com/join" target="_blank"> Discord </a>
    </span>
    <span>
      Message us at
      <a href="mailto:contact@dgrs.ink" target="_blank"> contact@dgrs.ink </a>
    </span>
  </div>
  <article>
    <b>Disclaimer:</b> This material is for informational purposes only and does
    not constitute an offer to sell, or the solicitation of an offer to buy, any
    securities, tokens, or other financial instruments. Digital assets are speculative
    and involve a high degree of risk, including potential loss of principal. Nothing
    herein should be construed as legal, financial, or tax advice. Always conduct
    your own due diligence and consult professional advisors before making investment
    decisions.
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .investor-sections {
    margin-top: 6rem;
    position: relative;
    width: 95vw;
    margin-inline: auto;
    gap: 0;
    @include gray-border;
    @include light-blue(0.1);

    button {
      width: 100%;
      height: 3rem;
      padding: 0.5rem 1rem;
      font-family: $font-sans;
      z-index: 1;
      @include font(h5);

      &:hover,
      &:active,
      &:focus {
        @include light-blue(1, text);
      }

      &.active {
        @include blue(1, text);
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      @include light-blue(0.25);

      &.active-investor-mobile {
        width: 100%;
        height: 3rem;
      }

      &.active-investor-pc {
        width: 10rem;
        height: 100%;
      }
    }

    @include respond-up(tablet) {
      flex-direction: row;
      max-width: 40rem;

      button {
        width: 10rem;
        height: 100%;
      }
    }
  }

  .learn-more {
    margin-top: 1rem;

    span {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-family: $font-serif;
      background-color: white;
      @include gray-border;
    }

    article {
      opacity: 0.5;
      @include font(caption);
    }
  }

  :global(body.dark) {
    .investor-sections {
      @include dark-blue;

      button {
        &:hover,
        &:active,
        &:focus {
          @include cyan(1, text);
        }

        &.active {
          @include dark-blue(1, text);
        }
      }

      span {
        @include cyan;
      }
    }

    .learn-more {
      span {
        background-color: transparent;
      }
    }
  }
</style>
