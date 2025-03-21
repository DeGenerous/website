<script>
  const openLoredex = () => {
    window.open("https://loredex.degenerousdao.com/", "_blank");
  };
</script>

<h1>The Living History of a Franchise</h1>

<section class="flex-box blur">
  <h3>
    Loredex is a dynamic, interactive mindmap that connects IP assets such as
    characters, locations, and episodes across time. It visualizes alliances,
    rivalries, and key moments, letting you explore how everything is connected
    in a living, evolving universe.
  </h3>

  <img class="blurred-image pc" src="/loredex.webp" alt="Loredex" />
  <img class="blurred-image mobile" src="/loredex-mobile.webp" alt="Loredex" />

  <h3>
    Our app simplified the complex universe of the Dischordian Saga, spanning
    150,000 years of history. Navigate through timelines, relationships, and
    pivotal battles, uncover connections, and watch events unfold across
    different eras.
  </h3>
  <button class="scaled-down" on:click={openLoredex}>EXPLORE THE LORE</button>
</section>

<style>
  section {
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(51, 226, 230, 0.05);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  img {
    width: 75%;
    border-radius: 1vw;
    box-shadow: 0 0 0.5vw rgba(51, 226, 230, 0.25);
  }

  .pc {
    display: block;
  }

  .mobile {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    section {
      padding: 1em;
      gap: 1em;
    }

    img {
      width: 90vw;
      border-radius: 1em;
    }

    .pc {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
</style>
