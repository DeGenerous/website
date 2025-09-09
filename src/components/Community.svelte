<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";

  import Join from "@components/community/Join.svelte";
  import Bounties from "@components/community/Bounties.svelte";
  import Ambassadors from "@components/community/Ambassadors.svelte";
  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();
  let showArrow = $state<boolean>(true);
  const startTyping = () => setTimeout(() => typeWrite(tagline!, "Community"), 1500);

  // IDs must match <section id="..."> in each child component
  const ids = ["intro", "join", "links", "bounties", "ambassadors"];
  let active = $state<string>(ids[0]);

  $effect(() => {
    // Keep URL hash in sync
    if (active !== "intro") history.replaceState(null, "", `#${active}`);
    else history.replaceState(null, "", "/community");
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

    observeElement(
      section!,
      null,
      () => {
        showArrow = true;
      },
      scrollDown
    );

    // if page loads with a hash, honor it
    const hash = location.hash.slice(1);
    if (hash && ids.includes(hash as any)) active = hash;
  });

  function scrollDown() {
    const join = document.getElementById("join") as HTMLElement | null;
    join!.scrollIntoView({ behavior: "smooth", block: "center" });
    showArrow = false;
  }
</script>

<section class="flex full-height" bind:this={section}>
  <h1 bind:this={tagline}>Community</h1>
  <p class="auto-width">
    Our community became official in February 2023 under the name of DeGenerous DAO. It began with
    an NFT collection that raised $125k for charity. As an on-chain DAO, we organized a global
    service mission and, in partnership with Lions Clubs International Foundation, raised and
    donated much more over the years. The collection eventually evolved into the Potentials, and
    with it, our commitment deepened: building impactful products for a community defined by
    purpose.
  </p>
  <article class="container">
    We communicate through a few trusted channels. All official discussions take place on our
    Discord server, via the @dgrs_labs account on X, or through verified emails ending in
    @dgrslabs.ink. We also post on Instagram and TikTok. If you see announcements or activity
    outside of the listed official spaces, treat it with caution.
  </article>

  {#if showArrow}
    <VoidArrowSVG onclick={scrollDown} />
  {/if}
</section>

<!-- style:opacity={active == "intro" ? "0" : "1"} -->

<nav id="intro" class="link-tabs flex round-8">
  <button class="void-btn" class:active={active === "join"} onclick={() => scrollToSection("join")}>
    <p>Join Channels</p>
  </button>

  <button
    class="void-btn"
    class:active={active === "links"}
    onclick={() => scrollToSection("links")}
  >
    <p>Safe Links</p>
  </button>

  <button
    class="void-btn"
    class:active={active === "bounties"}
    onclick={() => scrollToSection("bounties")}
  >
    <p>Bounties</p>
  </button>
  <button
    class="void-btn"
    class:active={active === "ambassadors"}
    onclick={() => scrollToSection("ambassadors")}
  >
    <p>Ambassador & Affiliate</p>
  </button>
</nav>

<Join />

<Bounties />

<Ambassadors />

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    width: 100%;
    gap: 2rem;

    @media (max-height: 700px) {
      padding-top: 6rem;
    }

    article {
      opacity: 0.5;
      @include font(caption);
    }
  }

  :global(main) {
    padding-top: 0 !important;
    gap: 5rem !important;
  }
</style>
