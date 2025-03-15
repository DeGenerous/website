<script>
</script>

<header class="flex-box">
  <section class="flex-box blur">
    <a class="icon-anchor" href="/" aria-label="DeGenerous">
      <img class="logo" src="/logo.png" alt="Logo" />
    </a>
    <span class="flex-box links">
      <a href="/">Governance Hub</a>
      <h2>|</h2>
      <a href="/">Loredex</a>
      <h2>|</h2>
      <a href="/">Roadmap</a>
    </span>
    <a class="icon-anchor conexus-link" href="/" aria-label="CoNexus">
      <img src="conexus.png" alt="CoNexus" />
    </a>
  </section>

  <section class="conexus-button flex-box blur">
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
    flex-direction: row;
    justify-content: space-between;
    gap: 1vw;
    padding: 1vw;
    z-index: 10;
    /* animation:
      zoomOut 1s forwards,
      fadeIn 3s forwards; */
  }

  section {
    flex-direction: row;
    gap: 1vw;
    padding: 1vw;
    background-color: rgba(51, 226, 230, 0.1);
    box-shadow:
      inset 0 0 0.5vw rgba(51, 226, 230, 0.25),
      0 0.25vw 0.5vw #010020;
    border-radius: 1.5vw;
    animation: translateRight 1s ease-in-out forwards;
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
    flex: none;
  }

  .icon-anchor:hover,
  .icon-anchor:active {
    transform: scale(1.05);
  }

  .links {
    flex-direction: row;
    gap: 1vw;
  }

  .links h2 {
    color: rgba(51, 226, 230, 0.1);
    text-shadow: none;
  }

  .conexus-link {
    display: none;
  }

  .conexus-button {
    opacity: 0;
    animation: fadeIn 2.4s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
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
      animation: translateBottom 1s ease-in-out forwards;
    }

    .links {
      column-gap: 1em;
      row-gap: 0.5em;
      flex-wrap: wrap;
    }

    .links h2 {
      display: none;
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
