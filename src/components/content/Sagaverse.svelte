<script>
  const openSagaverse = () => {
    window.open("https://sagaverse.degenerousdao.com/", "_blank");
  };
</script>

<h2>Another Layer of Immersion</h2>

<section class="flex-box blur">
  <img src="/sagaverse.webp" alt="Lions International" />
  <div class="flex-box">
    <h3>
      Immerse yourself in Sagaverse Gaming by participating in custom games and
      events that seamlessly integrate with the Dischordian Saga's lore and
      enhance the NFTs’ narrative. These experiences, created by ourselves and
      our Web3 partners, provide extra rewards, encourage community interaction
      and expand engagement across diverse games, metaverses, and blockchain
      platforms.
    </h3>
    <button on:click={openSagaverse}>SAGAVERSE GAMING</button>
  </div>
</section>

<style>
  section {
    flex-direction: row;
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(22, 30, 95, 0.25);
    box-shadow: 0 0 0.5vw #010020;
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
