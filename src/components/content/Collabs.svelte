<script>
</script>

<h2>
  We’re working with industry pioneers, from Web3 leaders to award-winning
  filmmakers.
</h2>

<section class="blur">
  <div class="paused-animation">
    <!-- <a style="--position: 0" href="https://www.bingeable.net/" target="_blank">
      <img src="/collabs/bingeable.png" alt="Bingeable" />
    </a> -->
    <a style="--position: 0" href="https://www.lionsclubs.org/" target="_blank">
      <img src="/collabs/lions.png" alt="Lions International" />
    </a>
    <a
      style="--position: 1"
      href="https://www.story.foundation/"
      target="_blank"
    >
      <img src="/collabs/story-protocol.png" alt="Story Protocol" />
    </a>
    <a style="--position: 2" href="https://www.base.org/" target="_blank">
      <img src="/collabs/base.png" alt="Base" />
    </a>
    <a style="--position: 3" href="https://twigg.xyz/" target="_blank">
      <img src="/collabs/twigg.png" alt="Twigg" />
    </a>
    <a style="--position: 4" href="https://www.anyone.io/" target="_blank">
      <img src="/collabs/anyone.png" alt="Anyone" />
    </a>
    <!-- <a style="--position: 6" href="https://www.moonsheep.xyz/" target="_blank">
      <img src="/collabs/moonsheep.png" alt="Moonsheep" />
    </a> -->
    <!-- <a
      style="--position: 7"
      href="https://www.lazylionsnft.com/"
      target="_blank"
    >
      <img src="/collabs/lazy-lions.png" alt="Lazy Lions" />
    </a> -->
    <a style="--position: 5" href="https://www.glmrapes.com/" target="_blank">
      <img src="/collabs/glma.png" alt="GLMR Apes" />
    </a>
    <a style="--position: 6" href="https://highclasscrypto.io/" target="_blank">
      <img src="/collabs/hcc.png" alt="High Class Crypto" />
    </a>
    <!-- <a style="--position: 9" href="https://t2.world/" target="_blank">
      <img src="/collabs/t2.png" alt="t2" />
    </a> -->
    <!-- <a style="--position: 10" href="https://film3.org/" target="_blank">
      <img src="/collabs/film3.png" alt="Film3" />
    </a> -->
  </div>
</section>

<h2>
  We want to democratize the media & entertainment industries and power
  tomorrow's digital economy with built-in monetization, gamification, and
  programmable IP.
</h2>

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
  }

  a {
    position: absolute;
    right: 100%;
    height: 10vw;
    width: 20vw;
    transition: all 0.3s ease-in-out;
    animation: slide 12s linear infinite;
    animation-delay: calc((12s / 7) * var(--position) - 12s);
    animation-play-state: inherit;
  }

  img {
    height: 100%;
    width: 20vw;
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
      min-width: calc(20vh * 4);
    }

    a {
      width: 20vh;
      padding: 0;
    }
    img {
      height: 10vh;
      width: 20vh;
    }
  }
</style>
