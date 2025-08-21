<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Roadmap"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Roadmap</h1>

  <ul>
    <h2>2023 - Establishing the foundation</h2>
    <li>
      <h4>February 2023</h4>
      The birth of DeGenerous DAO - setting a mission of tech‑enabled social impact.
    </li>

    <li>
      <h4>April 2023 - Inception Ark mint</h4>
      Inception Ark NFTs mint out, raising $175k, with $125k redirected to humanitarian
      services, demonstrating Proof-of-Impact.
    </li>

    <li>
      <h4>May 2023 - The Dischordian Saga</h4>
      We debut a community‑governed, AI‑generated media franchise that delivers multi‑hour
      video content with branching plots.
    </li>

    <li>
      <h4>May 2023 - CoNexus Beta</h4>
      CoNexus Beta opens, giving holders first access to the AI story engine which
      began with text only.
    </li>

    <li>
      <h4>August 2023 - Battle for Nexon</h4>
      A live space‑combat game ties gameplay data directly into ongoing narrative
      arcs. This real‑time loop bridges entertainment and adaptive content generation.
    </li>

    <li>
      <h4>September 2023 - Ark Assassin</h4>
      A lore‑driven mobile archery game showcases our agile content pipeline for
      cross‑platform deployment.
    </li>

    <li>
      <h4>December 2023 - Last Stand</h4>
      A multiplayer top‑down shooter with dynamic story modes. The title stress‑tests
      cloud scale and unlocks new engagement metrics.
    </li>
  </ul>

  <ul>
    <h2>2024 - Expanding the ecosystem</h2>

    <li>
      <h4>February 2024 - Potentials</h4>
      Inception Arks evolve into the Potentials - programmable avatars on Ethereum
      and Base. Expanded our reach to larger markets and showcased innovative identity
      use cases.
    </li>
    <li>
      <h4>April 2024 - Galactic Governance Hub</h4>
      Our decentralized voting portal enables weekly, AI‑generated story decisions
      under full transparency for communities. It is an on-chain example of consensus‑driven
      plot evolution.
    </li>
    <li>
      <h4>November 2024 - Galactic Governance Hub v2</h4>
      Role‑based access, delegated voting, and cancellation controls reduce decision
      latency and improve participation. The refinement prepares the system for enterprise-grade
      governance pilots.
    </li>
    <li>
      <h4>December 2024 - Loredex</h4>
      An auto-building knowledge graph for media franchises links every character,
      place, and event as discoverable IP assets within an evolving knowledgebase.
      It turns intricate storytelling into a seamless experience newbies can understand.
    </li>
  </ul>

  <ul>
    <h2>2025 - Unifying the experience</h2>
    <li>
      <h4>April 2025 - CoNexus v1</h4>
      Public release (with added functionalities for narration, music, visuals) letting
      any Web2 user sign up with a referral code and confirming product-market-fit
      beyond Web3 circles.
    </li>
    <li>
      <h4>July 2025 - OmniHub</h4>
      A mini-app integrated into CoNexus to manage assets, rewards, and IP rights
      from a single login.
    </li>
    <li>
      <h4>August - DGRS Labs Rebrand</h4>
      DeGenerous DAO becomes DGRS Labs, incorporated in Singapore with an enterprise
      service stack. The new structure introduces APIs, CSR programs, and studio
      partnerships.
    </li>
  </ul>

  <ul>
    <h2>Upcoming - Scaling into an entertainment powerhouse</h2>
    <li>
      <h4>CoNexus v1.5</h4>
      Removing referral gates will open the platform to all and add self‑publishing,
      remix, and multilingual tools. These and many other upgrades that come with
      v1.5 position CoNexus as the best platform for interactive storytelling.
    </li>
    <li>
      <h4>CoNexus v2</h4>
      All companion apps merge into a single platform featuring programmable IP rights
      and revenue sharing. Support extends from interactive stories to full novels
      and films, as we mass market to the mainstream.
    </li>
    <li>
      <h4>CoNexus v3</h4>
      Real‑time video generation and multiplayer gaming integrations. The release
      aims to redefine content production as the market will then be ready for it
      - losing interest in passive consumption.
    </li>
    <li>
      <h4>Token</h4>
      A forthcoming ERC‑20 utility token will underpin governance, staking, and value
      exchange across the ecosystem. Launch timing will be disclosed in due time.
    </li>
  </ul>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    h1 {
      @include light-blue(1, text);
    }

    ul,
    li {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    ul {
      padding-inline: 1rem;

      li {
        font-family: $font-serif;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 1rem;
        @include gray-border;

        h4 {
          font-family: $font-sans;
        }
      }
    }
  }

  :global(body.dark) {
    section h1 {
      @include cyan(1, text);
    }
  }
</style>
