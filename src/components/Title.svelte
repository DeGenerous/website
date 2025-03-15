<script>
</script>

<section>
  <h1>
    We believe community-owned franchises, interactivity, and AI-powered
    user-generated content will shape the future of storytelling.
  </h1>
</section>

<style>
  section {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    height: 100vh;
  }

  h1 {
    width: 70%;
    opacity: 0;
    animation:
      fadeIn 2.4s 1s forwards,
      zoomIn 1.2s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      width: 90%;
    }
  }
</style>
