<script lang="ts">
  import { onMount } from "svelte";

  import About from "@components/team/About.svelte";
  import Leadership from "@components/team/Leadership.svelte";
  import Core from "@components/team/Core.svelte";
  import Careers from "@components/team/Careers.svelte";

  const sections: SectionTab[] = [
    { label: "About Us", id: "about-us" },
    { label: "Leadership", id: "leadership" },
    { label: "Core Team", id: "core-team" },
    { label: "Careers", id: "careers" },
  ];

  let activeSection = $state<string>(sections[0].id);

  const lookForSectionInURL = () => {
    const urlHash = decodeURI(window.location.hash.slice(1));
    if (urlHash && sections.some((s) => s.id === urlHash)) activeSection = urlHash;
  };

  onMount(lookForSectionInURL);
</script>

<svelte:window onhashchange={lookForSectionInURL} />

<nav class="sections-tabs flex round-8">
  {#each sections as { label, id }, i}
    <button
      class="void-btn round-8"
      class:active={activeSection === id}
      onclick={() => {
        activeSection = id;
        history.replaceState(null, "", `#${activeSection}`);
      }}
    >
      {label}
    </button>
  {/each}
  <span
    class="active-tab-mobile mobile-only round-8 transition"
    style:top="{sections.findIndex((s) => s.id === activeSection) * 3}rem"
  ></span>
  <span
    class="active-tab-pc pc-only round-8 transition"
    style:left="{sections.findIndex((s) => s.id === activeSection) * 10}rem"
  ></span>
</nav>

{#if activeSection === "about-us"}
  <About />
{:else if activeSection === "leadership"}
  <Leadership />
{:else if activeSection === "core-team"}
  <Core />
{:else if activeSection === "careers"}
  <Careers />
{/if}

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
