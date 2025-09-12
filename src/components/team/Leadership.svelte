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
      src="/team/pano.jpeg"
      alt="Daniel “Pano” Elkins"
    />
    <article class="flex">
      <h4>Daniel “Pano” Elkins — Co-Founder</h4>
      <p>
       Creative specialist and community builder. Lions Clubs International Board appointee, author, filmmaker, music producer, and veteran game designer. Led Dragon Age: Dark Times and Star Wars: Rise of the Silent Council, reaching millions of players. Advises Web3 ventures (2019–present).
      </p>
    </article>
  </div>

  <div class="container appear-right">
    <img
      class="round-8"
      height="1280"
      width="853"
      src="/team/maxi.jpeg"
      alt="Uroš “Maxi” Trbović"
      loading="lazy"
      decoding="async"
    />
    <article class="flex">
      <h4>Uroš “Maxi” Trbović — Co-Founder</h4>
      <p>
       Growth and marketing specialist. Built a media platform to 1M+ users and grew social channels to 900K+ followers. Blends data‑driven analysis with sharp campaigns to scale creator economies from zero to breakout. Advises Web3 ventures (2019–present).
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
