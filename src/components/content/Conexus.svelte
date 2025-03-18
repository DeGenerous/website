<script>
  const openConexus = () => {
    window.open("https://conexus.degenerousdao.com/", "_blank");
  };
</script>

<h1>Unlock Your Potential and Dive Into Your Dreams</h1>

<section class="flex-box blur">
  <h3>
    Unleash your creativity with CoNexus, the AI-powered storytelling platform
    where you can create, play, and own immersive interactive experiences. From
    award-winning directors to community-built franchises, storytelling has
    never been this limitless.
  </h3>
  <h3>
    DeGenerous DAO is breaking creative monopolies and redefining how content is
    made, shared, and owned. With AI-powered storytelling and blockchain-backed
    ownership, we’re turning imagination into reality—giving power back to
    creators and communities.
  </h3>
  <button on:click={openConexus}>PLAY NOW</button>
</section>

<style>
  section {
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(51, 226, 230, 0.05);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }
  @media only screen and (max-width: 600px) {
    section {
      padding: 1em;
      gap: 1em;
    }
  }
</style>
