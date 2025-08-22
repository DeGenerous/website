<script lang="ts">
  import { onMount } from "svelte";

  import { trailerURL } from "@constants/media";
  import observeElement from "@utils/observer";

  let videoSection = $state<HTMLElement>();

  onMount(() => observeElement(videoSection!, "visible"));
</script>

<section class="conexus-video flex blur full-height" bind:this={videoSection}>
  <video class="transition" controls autoplay loop muted>
    <source src={`${trailerURL}/CoNexusTrailer.webm`} type="video/webm" />
    <source src={`${trailerURL}/CoNexusTrailer.mp4`} type="video/mp4" />
    <track kind="captions" />
  </video>
</section>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  .conexus-video {
    width: 100vw;

    video {
      width: 100%;
      border-radius: inherit;
      height: auto;
      transition-duration: 0.6s;
      opacity: 0;
      transform: scale(0.9) skew(5deg, -5deg);

      @include respond-up("quad-hd") {
        margin-inline: auto;
        border-radius: 1rem;
        @include auto-width;
      }
    }
  }

  :global(.conexus-video.visible video) {
    opacity: 1;
    transform: scale(1);
  }
</style>
