<script>
  import { trailerURL } from "@constants/media";
</script>

<div class="fade-in">
  <video controls autoplay loop muted>
    <source src={`${trailerURL}/CoNexusTrailer.webm`} type="video/webm" />
    <source src={`${trailerURL}/CoNexusTrailer.mp4`} type="video/mp4" />
    <track kind="captions" />
  </video>
</div>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  div {
    width: 100vw;
  }

  video {
    width: 100%;
    border-radius: inherit;
    height: auto;
  }

  @include respond-up("quad-hd") {
    div {
      margin-inline: auto;
      border-radius: 1rem;
      @include auto-width;
    }
  }
</style>
