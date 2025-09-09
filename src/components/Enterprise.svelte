<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";

  import ConexusAPI from "./enterprise/ConexusAPI.svelte";
  import GenAI from "./enterprise/GenAI.svelte";
  import CSR from "./enterprise/CSR.svelte";
  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();
  let showArrow = $state<boolean>(true);
  const startTyping = () => setTimeout(() => typeWrite(tagline!, "Enterprise"), 1500);

  // IDs must match <section id="..."> in each child component
  const ids = ["intro", "conexus-api", "gen-ai", "csr"];
  let active = $state<string>(ids[0]);

  $effect(() => {
    // Keep URL hash in sync
    if (active !== "intro") history.replaceState(null, "", `#${active}`);
    else history.replaceState(null, "", "/enterprise");
  });

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  onMount(() => {
    startTyping();

    // highlight whichever section enters the viewport
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      observeElement(
        el,
        null, // don't need a toggle class on the section
        () => (active = id), // when it intersects -> mark active
        () => {} // nothing on exit (keep last seen as active)
      );
    });

    observeElement(section!, null, () => {showArrow = true}, scrollDown);

    // if page loads with a hash, honor it
    const hash = location.hash.slice(1);
    if (hash && ids.includes(hash as any)) active = hash;
  });
  
  function scrollDown() {
    const conexusAPI = document.getElementById("conexus-api") as HTMLVideoElement | null;
    conexusAPI!.scrollIntoView({ behavior: "smooth", block: "center" });
    showArrow = false;
  }
</script>

<section class="flex full-height" bind:this={section}>
  <h1 bind:this={tagline}>Enterprise</h1>
  <p class="auto-width">
    Elevate your company with our enterprise solutions. Whether you’re a product team, a marketing
    department, CSR leader, or ed-tech innovator, our turnkey offerings deliver measurable
    engagement, cost savings, and real-world impact.
  </p>
  {#if showArrow}
    <VoidArrowSVG onclick={scrollDown} />
  {/if}
</section>

<nav id="intro" class="link-tabs flex round-8">
  <button
    class="void-btn"
    class:active={active === "conexus-api"}
    onclick={() => scrollToSection("conexus-api")}
  >
    <p>CoNexus API</p>
  </button>

  <button
    class="void-btn"
    class:active={active === "gen-ai"}
    onclick={() => scrollToSection("gen-ai")}
  >
    <p>GenAI Film Studio</p>
  </button>

  <button class="void-btn" class:active={active === "csr"} onclick={() => scrollToSection("csr")}>
    <p>CSR with Real Impact</p>
  </button>
</nav>

<ConexusAPI />

<GenAI />

<CSR />

<style lang="scss">
  @use "/src/styles/mixins" as *;

  :global(main) {
    padding-top: 0 !important;
    gap: 5rem !important;
  }
</style>
