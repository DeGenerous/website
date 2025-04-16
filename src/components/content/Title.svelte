<script>
  const scrollDown = () => {
    document.getElementById("conexus").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section class="flex-box">
  <video class="pc-video" autoplay loop muted>
    <source
      src="https://media.degenerousdao.com/assets/trailer/CoNexusTrailer.webm"
      type="video/webm"
    />
    <source
      src="https://media.degenerousdao.com/assets/trailer/CoNexusTrailer.mp4"
      type="video/mp4"
    />
    <track kind="captions" />
  </video>

  <video class="mobile-video" autoplay loop muted>
    <source
      src="https://media.degenerousdao.com/assets/trailer/CoNexusTrailerMobile.webm"
      type="video/webm"
    />
    <source
      src="https://media.degenerousdao.com/assets/trailer/CoNexusTrailerMobile.mp4"
      type="video/mp4"
    />
    <track kind="captions" />
  </video>

  <header class="flex-box">
    <h2>
      We believe community-owned franchises, interactivity, and AI-powered
      user-generated content will shape the future of storytelling.
    </h2>

    <ul class="flex-box">
      <li class="flex-box">
        <a href="https://discord.gg/349FgMSUK8" target="_blank">
          <img src="/icons/discord.png" alt="Discord" />
        </a>

        <a href="https://twitter.com/degenerousdao" target="_blank">
          <img src="/icons/twitter.png" alt="Twitter" />
        </a>

        <a href="https://opensea.io/collection/potentials-eth" target="_blank">
          <img src="/icons/opensea.png" alt="OpenSea" />
        </a>
      </li>

      <li class="flex-box">
        <a
          href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
          class="flex-box"
          target="_blank"
        >
          JOIN US
        </a>
      </li>
    </ul>
  </header>

  <div class="flex-box" on:click={scrollDown} role="button" tabindex="0">
    <h3>See more</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-100 -100 200 200"
      class="option-selector-svg"
      fill="rgb(51, 226, 230)"
      stroke="rgb(51, 226, 230)"
      stroke-width="20"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polygon
        transform="rotate(90)"
        points="
          -40 -90 -40 90 50 0
        "
        opacity="0.75"
      />
    </svg>
  </div>
</section>

<style>
  section {
    gap: 3vw;
  }

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -10;
  }

  .pc-video {
    display: block;
  }

  .mobile-video {
    display: none;
  }

  header {
    gap: 2vw;
    opacity: 0;
    animation:
      fadeIn 1.8s forwards,
      zoomIn 1.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  h2 {
    color: white;
    width: 75%;
  }

  ul {
    gap: 1vw;
  }

  li {
    flex-direction: row;
    gap: 1vw;
  }

  a img {
    height: 3vw;
    width: 3vw;
    border-radius: 50%;
    cursor: inherit;
  }

  a img:hover,
  a img:active {
    transform: scale(1.1);
    filter: brightness(125%);
  }

  div {
    position: absolute;
    bottom: 5%;
    flex-direction: row;
    gap: 1vw;
    color: rgb(51, 226, 230);
    opacity: 0;
    cursor: pointer;
    animation:
      fadeInSemiTransparent 1s 1.6s ease-in-out forwards,
      translateTop 1s 1.6s ease-in-out forwards;
  }

  div:hover,
  div:active {
    opacity: 1 !important;
  }

  h3,
  svg {
    color: inherit;
    cursor: inherit;
    flex: none;
  }

  @media only screen and (max-width: 600px) {
    section {
      gap: 3em;
    }

    video {
      height: auto;
    }

    .pc-video {
      display: none;
    }

    .mobile-video {
      display: block;
    }

    header {
      gap: 1.5em;
    }

    div {
      display: none;
    }

    h2 {
      width: 100%;
    }

    ul {
      bottom: -110%;
      gap: 1.5em;
    }

    a img {
      height: 2em;
      width: 2em;
    }
  }
</style>
