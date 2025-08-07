<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";
  import callToAction from "@constants/CTA";

  let tagline = $state<HTMLHeadingElement>();

  let finishedAnimation = $state<boolean>(false);

  onMount(() => {
    observeElement(tagline!, null, () => {
      typeWrite(tagline!, "What brings you here today?");
      // setTimeout(() => (finishedAnimation = true), 2000);
    });
  });

  let activeSection = $state<Nullable<CTA>>(null);
</script>

<section class="flex">
  {#if !activeSection}
    <h3 bind:this={tagline}>What brings you here today?</h3>
    <h5 class="fade-in">I want to...</h5>
    <!-- {#if finishedAnimation} -->
    <ul class="flex-row flex-wrap">
      {#each callToAction as item}
        <button
          class="void-btn flex pad round"
          onclick={() => (activeSection = item)}
        >
          <img src="/cta/{item.name}.svg" alt="{item.name} icon" />
          <h4 style:color={item.color()}>{item.name}</h4>
        </button>
      {/each}
    </ul>
    <!-- {/if} -->
  {:else}
    <div class="active-section fade-in">
      <h3 class="blink-caret">{activeSection.title}</h3>
      <p>{activeSection.description}</p>
      <button class="void-btn pad round" onclick={() => (activeSection = null)}>
        <img src="/cta/Back.svg" alt="Back icon" />
        <h4>Back</h4>
      </button>
    </div>
  {/if}
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

    .active-section {
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
