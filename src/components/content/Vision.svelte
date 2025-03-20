<script></script>

<h1>Your Imagination. Your Story. Your Future.</h1>

<div class="flex-box">
  <h3>
    At DeGenerous DAO, we merge technology and imagination to revolutionize
    storytelling. Using generative AI, dynamic NFTs, and community-driven
    innovation, we create immersive experiences with global impact—blending
    narrative worldbuilding, mass adoption, and philanthropy.
  </h3>
  <img src="/vision.webp" alt="Vision" />
</div>

<h2>
  The next era of entertainment belongs to creators. Step into the world of AI
  storytelling and make your mark. Whether you want to play, create, or
  innovate—now is your time.
</h2>

<style>
  div {
    position: relative;
    width: 100vw;
    height: 16vw;
    overflow: hidden;
    box-shadow: 0 0 0.5vw #010020;
  }

  h3 {
    opacity: 0;
    width: 90%;
    line-height: 1.5;
    color: rgb(51, 226, 230);
    text-shadow: 0 0.25vw 0.25vw #010020;
    transition-timing-function: ease-in-out;
  }

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
    transition-timing-function: ease-in-out;
  }

  div:hover img,
  div:active img {
    transform: scale(1.25);
    filter: blur(0.5vw) brightness(50%);
  }

  div:hover h3,
  div:active h3 {
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    div {
      height: 25vh;
    }

    img {
      width: auto;
      height: 100%;
    }
  }
</style>
