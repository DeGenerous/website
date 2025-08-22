<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";

  import ConexusAPI from "./enterprise/ConexusAPI.svelte";
  import GenAI from "./enterprise/GenAI.svelte";
  import CSR from "./enterprise/CSR.svelte";

  let tagline = $state<HTMLHeadingElement>();
  const startTyping = () =>
    setTimeout(() => typeWrite(tagline!, "Enterprise"), 1500);

  // IDs must match <section id="..."> in each child component
  const ids = ["conexus-api", "gen-ai", "csr"];
  let active = $state<Nullable<string>>(null);

  $effect(() => {
    // Keep URL hash in sync
    if (active) history.replaceState(null, "", `#${active}`);
  });

  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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

    // if page loads with a hash, honor it
    const hash = location.hash.slice(1);
    if (hash && ids.includes(hash as any)) active = hash;
  });
</script>

<section class="flex">
  <h1 bind:this={tagline}>Enterprise</h1>
  <p class="auto-width">
    Elevate your company with our enterprise solutions. Whether you’re a product
    team, a marketing department, CSR leader, or ed-tech innovator, our turnkey
    offerings deliver measurable engagement, cost savings, and real-world
    impact.
  </p>
</section>

<nav class="enterprise-sections flex round-8 blur">
  <button
    class="void-btn"
    class:active={active === "conexus-api"}
    onclick={() => scrollToSection("conexus-api")}
  >
    CoNexus API
  </button>

  <button
    class="void-btn"
    class:active={active === "gen-ai"}
    onclick={() => scrollToSection("gen-ai")}
  >
    GenAI Film Studio
  </button>

  <button
    class="void-btn"
    class:active={active === "csr"}
    onclick={() => scrollToSection("csr")}
  >
    CSR with Real Impact
  </button>
  <span
    class="pc-only round-8 transition"
    style:left="{ids.indexOf(active!) * 15}rem"
    style:display={active ? "block" : "none"}
  ></span>
</nav>

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
      border-radius: 0.5rem;
      font-family: $font-sans;
      @include font(h5);

      &:hover,
      &:active {
        @include light-blue(1, text);
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 15rem;
      height: 100%;
      @include light-blue(0.25);
    }

    @include respond-up(tablet) {
      flex-direction: row;
      position: sticky;
      top: 4rem;
      z-index: 100;
      border: none;
      @include box-shadow;

      button {
        min-width: 15rem;
        height: 100%;

        &.active {
          @include blue(1, text);
        }
      }
    }
  }

  :global(main) {
    gap: 5rem !important;
  }

  :global(body.dark) {
    .enterprise-sections {
      @include dark-blue;

      button {
        &:hover,
        &:active {
          @include cyan(1, text);
        }
      }
    }
  }
</style>
