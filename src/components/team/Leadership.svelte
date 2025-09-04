<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Leadership"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Leadership</h1>

  <div class="container appear-left">
    <img
      class="round-8"
      height="1280"
      width="853"
      src="/team/pano.jpg"
      alt="Daniel “Pano” Elkins"
    />
    <article class="flex">
      <h4>Daniel “Pano” Elkins — Co-Founder</h4>
      <p>
        Lions Clubs International board appointee, book publisher, and veteran game designer. Led
        Dragon Age Dark Times and Star Wars Rise of the Silent Council, attracting millions of
        players and inspiring thriving mod ecosystems.
      </p>
    </article>
  </div>

  <div class="container appear-right">
    <img class="round-8" height="1280" width="853" src="/team/maxi.jpg" alt="Uroš “Maxi” Trbović" />
    <article class="flex">
      <h4>Uroš “Maxi” Trbović — Co-Founder</h4>
      <p>
        Growth strategist who built a media platform with more than one million users and ran social
        channels topping 900k followers. Combines data-driven experimentation with sharp
        storytelling instincts to scale creator economies from zero to breakout.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    div {
      img {
        aspect-ratio: 2 / 3;
        width: min(100%, 25rem);
      }

      article h4 {
        font-family: $font-sans;
      }
    }

    @include respond-up(small-desktop) {
      h1 {
        width: 100%;
      }

      div {
        flex-direction: row;
        margin-inline: 0;

        img {
          width: 15rem;
          height: 22.5rem;
        }

        article {
          align-items: flex-start;
          text-align: left;
        }
      }
    }

    @include respond-up(large-desktop) {
      flex-flow: row wrap;
      align-items: stretch;

      div {
        width: min(calc(50% - 1rem), 50rem);
      }
    }
  }
</style>
