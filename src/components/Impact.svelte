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

<section class="flex fade-in full-height">
  <h1 bind:this={tagline}>Digital Tools. Real-World Change.</h1>
  <p class="auto-width">
    We don’t just build products - we build impact engines. The DGRS ecosystem
    has helped raise
    <b>millions of dollars for global causes</b>, supported
    <b>thousands of creators</b>, and powered
    <b>storytelling enjoyed by millions across the world</b>. Whether through
    NFTs that fund clean water access or APIs that power interactive learning
    for kids, every line of code we ship is designed to do good.
  </p>

  {#if finishedAnimation}
    <ul class="impact-data flex pad-inline">
      {#each data as { name, description, color, image }, i (name)}
        <li>
          <button
            class="void-btn flex gap-8 pad round fall-in blur"
            style="--i:{i}"
          >
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

<div class="impact-tagline container">
  <h4>Join the Movement</h4>
  <p>
    The world doesn’t need more passive platforms. It needs engines of change.
  </p>
  <h4>Build. Fund. Teach. Create. Disrupt. Give.</h4>
  <p>Whatever your skillset or story - you can make an impact here.</p>
</div>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .impact-tagline h4 {
    padding: 0.5rem;
    border-radius: 1rem;
    @include gray-border;
    @include light-blue(0.1);
  }

  section {
    padding-top: 6rem;

    @include respond-up(small-desktop) {
      padding-top: 0;
    }

    .impact-data {
      align-items: stretch;

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
          font-family: $font-sans;
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

      @include respond-up(tablet) {
        flex-flow: row wrap;

        button {
          max-width: 17.5vw;

          p {
            @include font(caption);
          }
        }
      }

      @include respond-up(small-desktop) {
        button {
          max-width: 14vw;
        }
      }

      @include respond-up(large-desktop) {
        button {
          max-width: 13rem;
        }
      }

      @include respond-up(full-hd) {
        button {
          max-width: 18rem;
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

    .impact-tagline h4 {
      @include cyan(0.1);
    }
  }

  :global(main) {
    padding-block: 0 1rem !important;
  }
</style>
