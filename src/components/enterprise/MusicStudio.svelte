<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";
  import { enterpriseURL } from "@constants/media";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    resetTitle();
    observeElement(
      section!,
      "visible",
      () => typeWrite(tagline!, "GenAI Music Studio"),
      resetTitle,
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section id="music-studio" class="flex appear-left-observer" bind:this={section}>
  <h2 bind:this={tagline}>GenAI Music Studio</h2>
  <div class="container">
    <img
      class="round-8"
      src={enterpriseURL + "/music-studio.gif"}
      alt="GenAI Music Studio"
      decoding="async"
    />
    <article class="flex">
      <p>
        Create full albums, singles, and soundtracks powered by AI artists — from composition and
        vocals to final master. Our pipeline blends generative music models with real-world
        recordings and professional mixing to produce release-ready tracks across any genre.
      </p>
      <p>
        One of our artists, Malkia Ukweli, has amassed over 20 000 monthly listeners on
        <a
          href="https://open.spotify.com/artist/5ZgBJTjuyrAvwyybBt1Eww"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>, proving that AI-generated music can build real, organic audiences at scale.
      </p>
      <p>
        <a href="mailto:biz@dgrslabs.ink" target="_blank" rel="noopener noreferrer">
          Schedule a creative call
        </a>
        to bring your sound to life.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    img {
      width: 100%;
      @include gray-border;
    }

    article {
      align-items: flex-start;
      text-align: left;
    }

    @include respond-up(small-desktop) {
      img {
        width: 30rem;
      }
    }

    @include respond-up(full-hd) {
      flex-direction: row;
    }
  }

  :global(#music-studio.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
