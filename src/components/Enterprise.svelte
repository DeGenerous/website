<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  import ConexusAPI from "./enterprise/ConexusAPI.svelte";
  import GenAI from "./enterprise/GenAI.svelte";
  import CSR from "./enterprise/CSR.svelte";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Enterprise"));

  function scrollToSection(sectionID: string) {
    const section = document.getElementById(sectionID);
    if (!section) return;
    const top = section.getBoundingClientRect().y;
    window.scrollTo({ top, behavior: "smooth" });
  }
</script>

<section class="flex full-height">
  <h1 bind:this={tagline}>Enterprise</h1>
  <p>
    Elevate your company with our enterprise solutions. Whether you’re a product
    team, a marketing department, CSR leader, or ed-tech innovator, our turnkey
    offerings deliver measurable engagement, cost savings, and real‑world
    impact.
  </p>
  <nav class="enterprise-sections flex round">
    <button class="void-btn" onclick={() => scrollToSection("conexus-api")}>
      CoNexus API
    </button>
    <button class="void-btn" onclick={() => scrollToSection("gen-ai")}>
      GenAI Film Studio
    </button>
    <button class="void-btn" onclick={() => scrollToSection("csr")}>
      CSR with Real Impact
    </button>
  </nav>
</section>

<ConexusAPI />

<GenAI />

<CSR />

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .enterprise-sections {
    gap: 0;
    @include gray-border;
    @include light-blue(0.1);

    button {
      height: 3rem;
      padding: 0.5rem 1rem;
      font-family: $font-sans;
      @include font(h5);

      &:hover,
      &:active,
      &:focus {
        @include light-blue(1, text);
      }
    }

    @include respond-up(tablet) {
      flex-direction: row;
      max-width: 40rem;

      button {
        min-width: 10rem;
        height: 100%;
      }
    }
  }

  :global(body.dark) {
    .enterprise-sections {
      @include dark-blue;

      button {
        &:hover,
        &:active,
        &:focus {
          @include cyan(1, text);
        }
      }
    }
  }
</style>
