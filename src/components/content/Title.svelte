<script>
</script>

<section class="flex-box">
  <h2>
    We believe community-owned franchises, interactivity, and AI-powered
    user-generated content will shape the future of storytelling.
  </h2>

  <span class="flex-box">
    <img src="/logo.png" alt="Logo" />
  </span>
</section>

<style>
  section {
    padding: 1vw;
    height: 100vh;
    position: relative;
  }

  h2 {
    color: white;
    width: 60%;
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

  @media only screen and (max-width: 600px) {
    section {
      height: 80vh;
    }

    h2 {
      width: 95%;
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
  }
</style>
