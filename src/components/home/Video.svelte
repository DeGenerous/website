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

<style>
  div {
    width: 100vw;
  }

  video {
    width: 100%;
    height: auto;
  }
</style>
