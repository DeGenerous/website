<script lang="ts">
  import { trailerURL } from "@constants/media";
</script>

<h3>Shape The World You Dream Of</h3>

<p>
  Step into a playground of endless possibility, where your wildest visions come
  to life on a foundation built for boundless creativity.
</p>

<div class="fade-in round">
  <video controls>
    <source src={`${trailerURL}/CoNexusTrailer.webm`} type="video/webm" />
    <source src={`${trailerURL}/CoNexusTrailer.mp4`} type="video/mp4" />
    <track kind="captions" />
  </video>
</div>

<p>
  Whether you’re weaving epic tales, crafting unforgettable games, or launching
  the next breakthrough app, DGRS hands you the keys to build, iterate, and
  amaze - no limits attached. Join a community of dreamers and doers and watch
  your ideas reshape reality.
</p>

<a class="button-anchor" href="http://degenerousdao.com/join" target="_blank">
  Join the Community
</a>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  div {
    width: 70vw;
  }

  video {
    width: 100%;
    border-radius: inherit;
    height: auto;
  }

  @include respond-up("quad-hd") {
    div {
      border-radius: 1rem;
      @include auto-width;
    }
  }
</style>
