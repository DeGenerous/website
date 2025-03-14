<script>
</script>

<header>
  <section class="blur">
    <a href="/" aria-label="dgrs-logo">
      <img class="logo" src="/logo.png" alt="Logo" />
    </a>
    <a href="/">Roadmap</a>
    <a href="/">Wiki</a>
    <a href="/">Merch</a>
  </section>

  <section class="blur">
    <button>
      <img src="/conexus.png" alt="CoNexus" />
    </button>
  </section>
</header>

<style>
  header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    padding: 0.5vw;
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

  .logo {
    cursor: inherit;
    border-radius: inherit;
    height: 3.5vw;
    width: 3.5vw;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
  }

  .logo:hover,
  .logo:active {
    opacity: 1;
    transform: scale(1.05);
  }

  button {
    background-color: rgba(51, 226, 230, 0.5);
  }

  button:hover,
  button:active {
    background-color: rgba(51, 226, 230, 0.9);
  }

  button img {
    filter: none;
  }
</style>
