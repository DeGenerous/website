<script lang="ts">
  import { onMount } from "svelte";

  import About from "@components/team/About.svelte";
  import Leadership from "@components/team/Leadership.svelte";
  import Core from "@components/team/Core.svelte";
  import Careers from "@components/team/Careers.svelte";

  let activeSection = $state<string>("about us");

  const sections = ["About Us", "Leadership", "Core Team", "Careers"];

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
    style:top="{sections.findIndex(
      (section) => section.toLowerCase() === activeSection
    ) * 3}rem"
  ></span>
  <span
    class="active-tab-pc pc-only round-8 transition"
    style:left="{sections.findIndex(
      (section) => section.toLowerCase() === activeSection
    ) * 10}rem"
  ></span>
</nav>

{#if activeSection === "about us"}
  <About />
{:else if activeSection === "leadership"}
  <Leadership />
{:else if activeSection === "core team"}
  <Core />
{:else if activeSection === "careers"}
  <Careers />
{/if}

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
