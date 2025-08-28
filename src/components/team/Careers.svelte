<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import openModal from "@stores/modal.svelte";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Careers"));

  const showPosition = () =>
    openModal(
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    );
</script>

<section class="flex">
  <h1 bind:this={tagline}>Careers</h1>

  <p class="auto-width">
    If you're passionate about building category-defining technology and joining
    a visionary team early, this is your moment.
  </p>

  <h3>Open positions</h3>

  <ul class="flex-row flex-wrap pad-inline">
    <li class="flex fall-in" style="--i:{0}">
      <h4>AI Engineer x2</h4>
      <button class="read-more" onclick={showPosition}>Read more</button>
      <button> Attach CV </button>
    </li>

    <li class="flex fall-in" style="--i:{1}">
      <h4>Business Developer</h4>
      <button class="read-more" onclick={showPosition}>Read more</button>
      <button> Attach CV </button>
    </li>

    <li class="flex fall-in" style="--i:{2}">
      <h4>Marketing Specialist</h4>
      <button class="read-more" onclick={showPosition}>Read more</button>
      <button> Attach CV </button>
    </li>
  </ul>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  ul {
    width: 100%;

    li {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;

      @include gray-border;
      @include light-blue(0.1);

      @include respond-up(tablet) {
        width: 20rem;
      }

      button {
        width: 100%;

        &.read-more {
          background-color: $white !important;
          @include dark-blue(1, text);

          &:hover,
          &:active,
          &:focus {
            color: $light-blue !important;
          }
        }
      }
    }
  }

  :global(body.dark) {
    ul li {
      @include dark-blue;

      button.read-more {
        background-color: $navy !important;
        @include cyan(1, text);

        &:hover,
        &:active,
        &:focus {
          color: $cyan !important;
        }
      }
    }
  }
</style>
