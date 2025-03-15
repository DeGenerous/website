<script>
</script>

<h2>
  We’re backed by industry pioneers, from Web3 leaders to award-winning
  filmmakers.
</h2>

<section class="blur">
  <div>
    <a style="--position: 0" href="https://www.lionsclubs.org/">
      <img src="/collabs/lions.png" alt="Lions International" />
    </a>
    <a style="--position: 1" href="https://www.story.foundation/">
      <img src="/collabs/story-protocol.png" alt="Story Protocol" />
    </a>
    <a style="--position: 2" href="https://www.base.org/">
      <img src="/collabs/base.png" alt="Base" />
    </a>
    <a style="--position: 3" href="https://film3.org/">
      <img src="/collabs/film3.png" alt="Film3" />
    </a>
    <a style="--position: 4" href="https://www.bingeable.net/">
      <img src="/collabs/bingeable.png" alt="Bingeable" />
    </a>
    <a style="--position: 5" href="https://www.lazylionsnft.com/">
      <img src="/collabs/lazy-lions.png" alt="Lazy Lions" />
    </a>
    <a style="--position: 6" href="https://www.glmrapes.com/">
      <img src="/collabs/glma.png" alt="GLMR Apes" />
    </a>
  </div>
</section>

<style>
  section {
    width: 100vw;
    height: 12vw;
    padding-block: 1vw;
    overflow: hidden;
    background-color: rgba(51, 226, 230, 0.1);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  div {
    position: relative;
    display: flex;
    height: 100%;
    min-width: calc(20vw * 7);
  }

  a {
    position: absolute;
    right: 100%;
    height: 100%;
    width: 20vw;
    transition: all 0.3s ease-in-out;
    animation: slide 14s linear infinite;
    animation-delay: calc((14s / 7) * var(--position) - 14s);
  }

  img {
    height: 100%;
  }

  div:hover a {
    animation-play-state: paused;
    filter: grayscale(1) blur(0.1vw);
    opacity: 0.75;
  }
  div a:hover {
    filter: none;
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    section {
      height: 12vh;
      padding-block: 1vh;
    }

    div {
      min-width: calc(20vh * 7);
    }

    a {
      width: 20vh;
    }
  }
</style>
