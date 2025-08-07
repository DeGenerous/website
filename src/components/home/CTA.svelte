<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";
  import callToAction from "@constants/CTA";

  let tagline: HTMLHeadingElement;

  let finishedAnimation = $state<boolean>(false);

  onMount(() => {
    observeElement(tagline, null, () => {
      tagline.innerHTML = ""; // Clear any existing content
      typeWrite(tagline, "What brings you here today?", 50);
      // setTimeout(() => (finishedAnimation = true), 2000);
    });
  });

  let activeSection = $state<string>("");
</script>

<section class="flex">
  <h3 class="blink-caret" bind:this={tagline}>What brings you here today?</h3>
  <h5 class="fade-in">I want to...</h5>
  <!-- {#if finishedAnimation} -->
  <ul class="flex-row flex-wrap">
    {#each callToAction as { name, color }}
      <button class="void-btn flex pad round">
        <img src="/cta/{name}.svg" alt="{name} icon" />
        <h4 style:color={color()}>{name}</h4>
      </button>
    {/each}
  </ul>
  <!-- {/if} -->
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    min-height: 100vh;

    h3 {
      @include light-blue(1, text);
    }

    ul {
      button {
        width: 10rem;
        @include light-blue(0.1);

        img {
          width: 3rem;
        }

        h4 {
          text-transform: uppercase;
          font-family: $font-sans;
        }

        &:hover,
        &:active,
        &:focus {
          background-color: transparent;
          @include scale-up;
          @include box-shadow;
        }
      }
    }
  }

  :global(body.dark) {
    section {
      h3 {
        @include cyan(1, text);
      }

      ul {
        button {
          @include box-glow(inset);
          @include dark-blue;

          &:hover,
          &:active,
          &:focus {
            box-shadow: none;
            @include navy;
          }
        }
      }
    }
  }
</style>
