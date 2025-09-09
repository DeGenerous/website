<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import data from "@constants/impact";

  import Charity from "@components/impact/Charity.svelte";
  import Platform from "@components/impact/Platform.svelte";

  let tagline = $state<HTMLHeadingElement>();

  // This will be used to trigger the cards to drop after the tagline animation
  let finishedAnimation = $state(false);

  const startTyping = () =>
    setTimeout(() => {
      typeWrite(tagline!, "Digital Tools. Real-World Change.");
      finishedAnimation = true; // triggers the impact data to appear
    }, 1500);

  onMount(startTyping);
</script>

<section class="flex fade-in">
  <h1 bind:this={tagline}>Digital Tools. Real-World Change.</h1>
  <p class="auto-width">
    We don’t just build products - we build impact engines. The DGRS ecosystem has helped raise
    <b>millions of dollars for global causes</b>, supported
    <b>thousands of creators</b>, and powered
    <b>storytelling enjoyed by millions across the world</b>. Whether through NFTs that fund clean
    water access or APIs that power interactive learning for kids, every line of code we ship is
    designed to do good.
  </p>

  {#if finishedAnimation}
    <ul class="impact-data flex">
      {#each data as { name, description, color, image }, i (name)}
        <li>
          <button class="void-btn flex gap-8 pad round fall-in blur" style="--i:{i}">
            <img src={image} alt={name + " " + description} />
            <h4 style:color={color()}>{name}</h4>
            <p>{description}</p>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<Charity />

<Platform />

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    @include respond-up(small-desktop) {
      min-height: 100vh;
    }

    .impact-data {
      align-items: stretch;

      li {
        width: 100%;

        button {
          width: 100%;
          height: 100%;
          justify-content: space-between;
          @include gray-border;
          @include light-blue(0.1);

          img {
            width: 3rem;
          }

          p {
            height: 100%;
          }

          &:hover,
          &:active,
          &:focus {
            background-color: transparent;
            @include box-shadow;

            * {
              @include scale;
            }
          }
        }
      }

      @include respond-up(tablet) {
        flex-flow: row wrap;

        li {
          width: calc(50% - 0.75rem);

          p {
            @include font(caption);
          }
        }
      }

      @include respond-up(small-desktop) {
        li {
          width: calc(33.33% - 1rem);
        }
      }

      @include respond-up(large-desktop) {
        li {
          width: calc(20% - 1.2rem);
        }
      }
    }
  }

  :global(body.dark) {
    .impact-data button {
      @include dark-blue;

      &:hover,
      &:active,
      &:focus {
        box-shadow: none;
        @include navy;
      }
    }
  }

  :global(main) {
    @include respond-up(small-desktop) {
      padding-block: 0 1rem !important;
    }
  }
</style>
