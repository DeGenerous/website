<script lang="ts">
  import { onMount } from "svelte";

  import { trailerURL } from "@constants/media";
  import observeElement from "@utils/observer";

  let videoSection = $state<HTMLElement>();

  onMount(() => observeElement(videoSection!, "visible"));
</script>

<section class="conexus-video flex full-height" bind:this={videoSection}>
  <video
    class="pc-only transition"
    controls
    autoplay
    loop
    muted
    aria-label="CoNexus trailer video"
  >
    <source src={`${trailerURL}/CoNexusTrailer.webm`} type="video/webm" />
    <source src={`${trailerURL}/CoNexusTrailer.mp4`} type="video/mp4" />
    <!-- Add real captions via <track src="..." srclang="en" label="English"> when available -->
  </video>

  <video
    class="mobile-only transition"
    controls
    autoplay
    loop
    muted
    aria-label="CoNexus trailer video"
  >
    <source src="/CoNexusTrailer-mobile.webm" type="video/webm" />
    <source src="/CoNexusTrailer.mp4" type="video/mp4" />
    <!-- Add real captions via <track src="..." srclang="en" label="English"> when available -->
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
    }
  }

  :global(.conexus-video.visible video) {
    opacity: 1;
    transform: scale(1);
  }
</style>
