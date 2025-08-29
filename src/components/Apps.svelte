<script lang="ts">
  import { onMount } from "svelte";

  import apps from "@constants/apps";
  import typeWrite from "@utils/typewriter";

  import ConexusDemo from "@components/apps/ConexusDemo.svelte";
  import GovernanceHubDemo from "@components/apps/GovernanceHubDemo.svelte";
  import SagaverseDemo from "@components/apps/SagaverseDemo.svelte";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () => setTimeout(() => typeWrite(tagline!, "Apps"), 1500);

  onMount(startTyping);
</script>

<section class="flex full-height">
  <h1 bind:this={tagline}>Apps</h1>
  <p class="auto-width">
    Explore our ecosystem of innovative applications that power the next
    generation of media.
  </p>
  <ul class="flex">
    {#each apps as { name, description, href }}
      <li class="container">
        <h4>{name}</h4>
        {#if name === "CoNexus"}
          <ConexusDemo />
        {:else if name === "Galactic Governance Hub"}
          <GovernanceHubDemo />
        {:else if name === "Sagaverse Gaming"}
          <SagaverseDemo />
        {/if}
        <p>{description}</p>
        <a
          class="button-anchor"
          {href}
          target={name == "Sagaverse Gaming" ? "_self" : "_blank"}
          rel="noopener noreferrer"
        >
          Launch App
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    padding-top: 6rem;
  }
</style>
