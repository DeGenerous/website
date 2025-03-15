<script>
</script>

<section class="flex-box">
  <h2>
    We believe community-owned franchises, interactivity, and AI-powered
    user-generated content will shape the future of storytelling.
  </h2>
</section>

<style>
  section {
    padding: 1vw;
    height: 100vh;
  }

  h2 {
    width: 60%;
    opacity: 0;
    animation:
      fadeIn 1.8s 1s forwards,
      zoomIn 1.2s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  @media only screen and (max-width: 600px) {
    section {
      height: 50vh;
    }

    h2 {
      width: 90%;
    }
  }
</style>
