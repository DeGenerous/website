<script>
  const openConexus = () => {
    window.open("https://conexus.degenerousdao.com/", "_blank");
  };
</script>

<h1 id="conexus">Unlock Your Potential and Dive Into Your Dreams</h1>

<section class="flex-box blur">
  <h3>
    Unleash your creativity with CoNexus, the AI-powered storytelling platform
    where you can create, play, and own immersive interactive experiences.
    Imagine using simple instructions to star in any story you want.
  </h3>

  <section class="stories">
    <div class="paused-animation">
      <img style="--position: 0" src="/conexus/1.webp" alt="Story" />
      <img style="--position: 1" src="/conexus/2.webp" alt="Story" />
      <img style="--position: 2" src="/conexus/3.webp" alt="Story" />
      <img style="--position: 3" src="/conexus/4.webp" alt="Story" />
      <img style="--position: 4" src="/conexus/5.webp" alt="Story" />
      <img style="--position: 5" src="/conexus/6.webp" alt="Story" />
      <img style="--position: 6" src="/conexus/7.webp" alt="Story" />
      <img style="--position: 7" src="/conexus/8.webp" alt="Story" />
      <img style="--position: 8" src="/conexus/9.webp" alt="Story" />
      <img style="--position: 9" src="/conexus/10.webp" alt="Story" />
      <img style="--position: 10" src="/conexus/11.webp" alt="Story" />
      <img style="--position: 11" src="/conexus/12.webp" alt="Story" />
      <img style="--position: 12" src="/conexus/13.webp" alt="Story" />
      <img style="--position: 13" src="/conexus/14.webp" alt="Story" />
      <img style="--position: 14" src="/conexus/15.webp" alt="Story" />
      <img style="--position: 15" src="/conexus/16.webp" alt="Story" />
    </div>
  </section>

  <h3>
    DeGenerous DAO is breaking creative monopolies and redefining how content is
    made, shared, and owned. Leveraging Generative AI and blockchain-backed
    ownership, we’re turning imagination into reality—giving power back to
    creators and communities.
  </h3>
  <button class="scaled-down" on:click={openConexus}>PLAY NOW</button>
</section>

<style>
  section {
    width: 100vw;
    max-width: 100vw;
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(51, 226, 230, 0.05);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  .stories {
    width: 100vw;
    height: 15vw;
    padding-block: 1vw;
    padding-inline: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0 0 0.5vw rgba(51, 226, 230, 0.25);
  }

  div {
    position: relative;
    display: flex;
    height: 100%;
    width: calc(13vw * 8.5);
  }

  div:hover img {
    animation-play-state: paused;
    filter: grayscale(1) blur(0.1vw);
    opacity: 0.75;
  }
  div img:hover {
    filter: none;
    transform: scale(1.1);
    opacity: 1;
  }

  img {
    position: absolute;
    right: 100%;
    height: 100%;
    width: 13vw;
    height: 13vw;
    border-radius: 1vw;
    transition: all 0.3s ease-in-out;
    animation: slide-reverse 16s linear infinite;
    animation-delay: calc((16s / 16) * var(--position) - 16s);
    animation-play-state: inherit;
  }

  @media only screen and (max-width: 600px) {
    section {
      padding: 1em;
      gap: 1em;
    }

    .stories {
      height: 21vh;
      padding-block: 1.5vh;
    }

    div {
      width: calc(18vh * 8.5);
    }

    img {
      width: 18vh;
      height: 18vh;
      border-radius: 1vh;
    }
  }
</style>
