<script lang="ts">
  import { onMount } from "svelte";

  import { trailerURL } from "@constants/media";
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => {
    observeElement(tagline!, null, () => {
      typeWrite(tagline!, "Shape The World You Dream Of");
    });
  });
</script>

<h3 bind:this={tagline}>Shape The World You Dream Of</h3>

<p>
  Step into a playground of endless possibility, where your wildest visions come
  to life on a foundation built for boundless creativity.
</p>

<div class="fade-in round">
  <video controls>
    <!-- <source src={`${trailerURL}/CoNexusTrailer.webm`} type="video/webm" /> -->
    <source src="CoNexus.mp4" type="video/mp4" />
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
    width: 95vw;
  }

  video {
    width: 100%;
    border-radius: inherit;
    height: auto;
  }

  @include respond-up("small-desktop") {
    div {
      width: 90vw;
    }

    p {
      width: 90vw;
    }
  }

  @include respond-up("large-desktop") {
    div {
      width: 70vw;
    }

    p {
      width: 70vw;
    }
  }

  @include respond-up("quad-hd") {
    div {
      margin-inline: auto;
      border-radius: 1rem;
      @include auto-width;
    }

    p {
      width: 50vw;
    }
  }
</style>
