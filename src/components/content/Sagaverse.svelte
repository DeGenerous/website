<script lang="ts">
  const openSagaverse = () => {
    window.open("https://sagaverse.degenerousdao.com/", "_blank");
  };

  let showText: boolean = false;
</script>

<h1>Another Layer of Immersion</h1>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-to-interactive-role -->
<section class="flex-box blur">
  <img class="blurred-image" src="/sagaverse.webp" alt="Sagaverse" />
  <div class="flex-box">
    <h3>
      Immerse yourself in Sagaverse Gaming by participating in custom games and
      events that seamlessly integrate with the Dischordian Saga's lore and
      enhance the NFTs’ narrative.
      {#if showText}
        These experiences, created by ourselves and our Web3 partners, provide
        extra rewards, encourage community interaction and expand engagement
        across diverse games, metaverses, and blockchain platforms.
      {:else}
        <span
          class="more-text"
          on:click={() => (showText = true)}
          role="button"
          tabindex="0"
        >
          See more...
        </span>
      {/if}
    </h3>
    <button class="scaled-down" on:click={openSagaverse}>GAME</button>
  </div>
</section>

<style>
  section {
    flex-direction: row;
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(51, 226, 230, 0.05);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  div {
    gap: 2vw;
  }

  img {
    width: 21.6vw;
    border-radius: 1vw;
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  @media only screen and (max-width: 600px) {
    section {
      flex-direction: column;
      padding: 1em;
      gap: 1em;
    }

    div {
      flex-direction: column;
      gap: 1em;
    }

    img {
      width: 90vw;
      border-radius: 1em;
    }
  }
</style>
