<script lang="ts">
  const openGovernanceHub = () => {
    window.open("https://governance.degenerousdao.com/", "_blank");
  };

  let showText: boolean = false;
</script>

<h1>Shape the Future</h1>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-to-interactive-role -->
<section class="flex-box blur">
  <div class="video">
    <iframe
      src="https://www.youtube.com/embed/isK6VuGAbs4"
      title="YouTube"
      allowfullscreen
    ></iframe>
    <img src="/display.webp" alt="Display" />
  </div>

  <h2>The Dischordian Saga</h2>

  <h3>
    Step into the captivating realm of The Dischordian Saga, a
    community-governed series based on sci-fi lore that breathes life and depth
    into Potentials.
  </h3>

  {#if showText}
    <h3>
      The Potentials holders' on-chain votes on our app influence the overall
      narrative, add unique traits to NFTs that reveal their true character, and
      unlock mission-based story games within CoNexus.
    </h3>

    <h3>
      This franchise is powered by AI filmmaking and watched by millions of
      people.
    </h3>
  {:else}
    <h3
      class="more-text"
      on:click={() => (showText = true)}
      role="button"
      tabindex="0"
    >
      See more...
    </h3>
  {/if}
  <button class="scaled-down" on:click={openGovernanceHub}> VOTE </button>
</section>

<style>
  section {
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(51, 226, 230, 0.05);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  div {
    position: relative;
    width: 60vw;
  }

  div img {
    width: 100%;
    height: 100%;
  }

  iframe {
    position: absolute;
    top: 12.5%;
    left: 5.25%;
    width: 89.5%;
    height: 30vw;
  }

  @media only screen and (max-width: 600px) {
    section {
      padding-block: 1em;
      gap: 1em;
    }

    div {
      width: 95vw;
    }

    iframe {
      height: 47.5vw;
    }
  }
</style>
