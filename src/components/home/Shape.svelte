<script lang="ts">
  import { onMount } from "svelte";

  import { trailerURL } from "@constants/media";
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();
  let video = $state<HTMLVideoElement>();

  onMount(() => {
    observeElement(tagline!, null, () => {
      typeWrite(tagline!, "Shape The World You Dream Of");
    });
    observeElement(video!, "visible");
  });
</script>

<hr class="mobile-only mar-block" />

<section class="shape-world flex">
  <h3 bind:this={tagline}>Shape The World You Dream Of</h3>

  <p>
    Step into a playground of endless possibility, where your wildest visions
    come to life on a foundation built for boundless creativity.
  </p>

  <video class="shape-video round transition" controls bind:this={video}>
    <!-- <source src={`${trailerURL}/CoNexusTrailer.webm`} type="video/webm" /> -->
    <source src="CoNexus.mp4" type="video/mp4" />
    <track kind="captions" />
  </video>

  <p>
    Whether you’re weaving epic tales, crafting unforgettable games, or
    launching the next breakthrough app, DGRS hands you the keys to build,
    iterate, and amaze - no limits attached. Join a community of dreamers and
    doers and watch your ideas reshape reality.
  </p>

  <a class="button-anchor" href="http://degenerousdao.com/join" target="_blank">
    Join the Community
  </a>
</section>

<hr class="mobile-only mar-block" />

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .shape-world {
    width: 100vw;

    @include respond-up("small-desktop") {
      min-height: 100vh;
      padding-block: 1rem;
      border-left: none !important;
      border-right: none !important;
      background: linear-gradient(
        to right,
        rgba(56, 117, 250, 0.1),
        rgba(56, 117, 250, 0.025)
      );
      @include gray-border;
    }

    video {
      width: 95vw;
      height: auto;
      opacity: 0.25;
      transition-duration: 0.6s;

      @include respond-up("small-desktop") {
        width: 30rem;
      }

      @include respond-up("large-desktop") {
        width: 40rem;
      }

      @include respond-up("quad-hd") {
        width: 50rem;
      }
    }
  }

  :global(.shape-video.visible) {
    opacity: 1 !important;
  }

  :global(body.dark .shape-world) {
    @include respond-up("small-desktop") {
      // @include cyan(0.05);
      border: none;
      background: transparent;
    }
  }
</style>
