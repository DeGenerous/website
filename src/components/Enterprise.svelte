<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  import ConexusAPI from "./enterprise/ConexusAPI.svelte";
  import GenAI from "./enterprise/GenAI.svelte";
  import CSR from "./enterprise/CSR.svelte";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Enterprise"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Enterprise</h1>
  <p>
    Elevate your company with our enterprise solutions. Whether you’re a product
    team, a marketing department, CSR leader, or ed-tech innovator, our turnkey
    offerings deliver measurable engagement, cost savings, and real‑world
    impact.
  </p>
</section>

<ConexusAPI />

<GenAI />

<CSR />

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    height: 100vh;

    h1 {
      @include light-blue(1, text);
    }
  }

  :global(body.dark) {
    section h1 {
      @include cyan(1, text);
    }
  }
</style>
