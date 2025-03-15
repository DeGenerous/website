<script>
</script>

<header>
  <section class="blur">
    <a class="icon-anchor" href="/" aria-label="DeGenerous">
      <img class="logo" src="/logo.png" alt="Logo" />
    </a>
    <span class="links">
      <a href="/">Roadmap</a>
      <a href="/">Wiki</a>
      <a href="/">Merch</a>
    </span>
    <a class="icon-anchor conexus-link" href="/" aria-label="CoNexus">
      <img src="conexus.png" alt="CoNexus" />
    </a>
  </section>

  <section class="conexus-button blur">
    <button>
      <img src="/conexus-full.png" alt="CoNexus" />
    </button>
  </section>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    padding: 1vw;
    z-index: 10;
    animation:
      zoomOut 1s forwards,
      fadeIn 3s forwards;
  }

  section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    padding: 1vw;
    background-color: rgba(51, 226, 230, 0.1);
    box-shadow:
      inset 0 0 0.5vw rgba(51, 226, 230, 0.25),
      0 0.25vw 0.5vw #010020;
    border-radius: 1.5vw;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-anchor {
    cursor: inherit;
    border-radius: inherit;
    height: 3.5vw;
    width: 3.5vw;
    transition: all 0.3s ease-in-out;
  }

  .icon-anchor:hover,
  .icon-anchor:active {
    transform: scale(1.05);
  }

  .links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1vw;
  }

  .conexus-link {
    display: none;
  }

  .conexus-button button {
    background-color: rgba(51, 226, 230, 0.5);
  }

  .conexus-button button:hover,
  .conexus-button button:active {
    background-color: rgba(51, 226, 230, 0.9);
  }

  .conexus-button button img {
    filter: none;
  }

  @media only screen and (max-width: 600px) {
    header {
      position: static;
      flex-direction: column;
    }

    section {
      width: 100vw;
      justify-content: space-between;
      gap: 1em;
      padding: 0.5em;
      border-radius: 0;
    }

    .links {
      gap: 1em;
    }

    .icon-anchor {
      height: 4em;
      width: 4em;
      background-color: rgba(0, 0, 0, 0.25);
      box-shadow: 0 0 0.25em #010020;
      border-radius: 50%;
    }

    .icon-anchor img {
      padding: 15%;
    }

    .conexus-link {
      display: block;
      background-color: rgba(51, 226, 230, 0.25);
      box-shadow: 0 0 0.25em rgba(51, 226, 230, 0.5);
    }

    .conexus-link:hover,
    .conexus-link:active {
      background-color: rgba(51, 226, 230, 0.75);
    }

    .conexus-button {
      display: none;
    }
  }
</style>
