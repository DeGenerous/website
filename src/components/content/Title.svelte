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
  <h2>
    We believe community-owned franchises, interactivity, and AI-powered
    user-generated content will shape the future of storytelling.
  </h2>

  <span class="flex-box">
    <img src="/logo.png" alt="Logo" />
  </span>

  <div class="flex-box" on:click={scrollDown} role="button" tabindex="0">
    <h3>Show more</h3>
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
    padding: 1vw;
    height: 100vh;
    position: relative;
  }

  h2 {
    color: white;
    width: 75%;
    opacity: 0;
    animation:
      fadeIn 1.8s 1.6s forwards,
      zoomIn 1.2s 1.6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  span {
    position: absolute;
    width: 100vw;
    height: 70vh;
    top: 15vh;
    z-index: -10;
  }

  img {
    height: 100%;
    width: 70vh;
    animation: logo 2.2s ease-in forwards;
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

  h3 {
    color: inherit;
    cursor: inherit;
  }

  @media only screen and (max-width: 600px) {
    section {
      height: 80vh;
    }

    h2 {
      width: 100%;
    }

    span {
      position: absolute;
      width: 90vw;
      height: 90vw;
      top: auto;
    }

    img {
      height: 100%;
      width: 90vw;
      animation: logo 2s ease-in-out forwards;
    }

    div {
      bottom: 0;
    }
  }
</style>
