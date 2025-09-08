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

<section class="flex full-height pc-narrow">
  <h1 bind:this={tagline}>Apps</h1>
  <p class="auto-width">
    Explore our ecosystem of innovative applications that power the next generation of media.
  </p>
  <ul class="flex">
    {#each apps as { name, description, href }}
      <li class="container">
        <h4>{name}</h4>
        {#if name === "CoNexus"}
          <ConexusDemo />
        {:else if name === "Galactic Governance Hub"}
          <GovernanceHubDemo />
        {:else if name === "Loredex"}
          <img src="/apps/loredex.gif" alt="Loredex" loading="lazy" decoding="async" />
        {:else if name === "OmniHub"}
          <img src="/apps/omnihub.gif" alt="OmniHub" loading="lazy" decoding="async" />
        {:else if name === "Sagaverse Gaming"}
          <SagaverseDemo />
        {/if}
        <p class="auto-width">{description}</p>
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
    .container {
      img {
        width: min(100%, 40rem);
        border-radius: 0.5rem;
      }
    }

    @include respond-up(full-hd) {
      ul {
        flex-flow: row wrap;
        align-items: stretch;

        .container {
          width: calc(50% - 1rem);
          justify-content: flex-start;

          &:last-of-type {
            width: 100%;
            max-width: 90rem;
          }
        }
      }
    }
  }
</style>
