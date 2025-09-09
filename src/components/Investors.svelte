<script lang="ts">
  import { onMount } from "svelte";

  import Potentials from "@components/investors/Potentials.svelte";
  import PAC from "@components/investors/PAC.svelte";
  import Token from "@components/investors/Token.svelte";
  import Roadmap from "@components/investors/Roadmap.svelte";

  let activeSection = $state<string>("potentials");

  const sections = ["Potentials", "PAC", "Token", "Roadmap"];

  const lookForSectionInURL = () => {
    const urlHash = decodeURI(window.location.hash.slice(1));

    if (urlHash && sections.some((section) => section.toLowerCase() == urlHash))
      activeSection = urlHash;
  };

  onMount(lookForSectionInURL);
</script>

<svelte:window onhashchange={lookForSectionInURL} />

<nav class="sections-tabs flex round-8">
  {#each sections as section}
    <button
      class="void-btn round-8"
      class:active={activeSection === section.toLowerCase()}
      onclick={() => {
        activeSection = section.toLowerCase();
        history.replaceState(null, "", `#${activeSection}`); // optional, keeps URL hash in sync
      }}
    >
      {section}
    </button>
  {/each}
  <span
    class="active-tab-mobile mobile-only round-8 transition"
    style:top="{sections.findIndex((section) => section.toLowerCase() === activeSection) * 3}rem"
  ></span>
  <span
    class="active-tab-pc pc-only round-8 transition"
    style:left="{sections.findIndex((section) => section.toLowerCase() === activeSection) * 10}rem"
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
      <a href="https://degenerousdao.com/join" target="_blank" rel="noopener noreferrer">
        Discord
      </a>
    </span>
    <span>
      Message us at
      <a href="mailto:contact@dgrs.ink" target="_blank" rel="noopener noreferrer">
        contact@dgrs.ink
      </a>
    </span>
  </div>
  <article>
    <b>Disclaimer:</b> This material is for informational purposes only and does not constitute an offer
    to sell, or the solicitation of an offer to buy, any securities, tokens, or other financial instruments.
    Digital assets are speculative and involve a high degree of risk, including potential loss of principal.
    Nothing herein should be construed as legal, financial, or tax advice. Always conduct your own due
    diligence and consult professional advisors before making investment decisions.
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .learn-more {
    margin-top: 1rem;

    span {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: white;
      @include gray-border;
    }

    article {
      opacity: 0.5;
      @include font(caption);
    }
  }

  :global(body.dark) {
    .learn-more {
      span {
        background-color: transparent;
      }
    }
  }
</style>
