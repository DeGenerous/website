<script lang="ts">
  import { onMount } from "svelte";

  import Potentials from "@components/investors/Potentials.svelte";
  import PAC from "@components/investors/PAC.svelte";
  import Token from "@components/investors/Token.svelte";
  import Roadmap from "@components/investors/Roadmap.svelte";

  let activeSection = $state<string>("potentials");

  const sections = ["Potentials", "PAC", "Token", "Roadmap"];

  onMount(() => {
    const urlHash = window.location.hash.replace("#", "");

    if (urlHash && sections.some((section) => section.toLowerCase() == urlHash))
      activeSection = urlHash;
  });
</script>

<main>
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
</main>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  main {
    padding-block: 5rem 1rem;

    .investor-sections {
      position: relative;
      width: 95vw;
      margin-inline: auto;
      gap: 0;
      @include gray-border;

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
  }
</style>
