<script lang="ts">
  import { state } from "@stores/homepage.ts";
  import type { HomeSection } from "@types/homepage.ts";
  import { onMount } from "svelte";

  export let image: string;
  export let my_state: HomeSection;

  let loaded = false;

  onMount(() => (loaded = true));
</script>

<div>
  <button
    on:click={() => state.set(my_state)}
    class="button"
    class:active={loaded && $state === my_state}
    style={`background-image: url(${image})`}
  >
    <slot />
  </button>
</div>

<style lang="scss">
  @use "@styles/imports";

  $potentials-padding: var(--pp);

  :root {
    --pp: 3rem 2rem;

    @media screen and (max-width: 50rem) {
      --pp: 2rem 1rem;
    }
  }

  button {
    position: relative;
    padding: $potentials-padding;
    border-radius: 1rem;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    background-position: center;

    text-shadow:
      0 0 5px black,
      0 0 10px black,
      0 0 20px black;
    font-weight: bold;
    font-size: 1.2rem;

    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      height: 0.3rem;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: imports.$accent-fg-color;
      scale: 0 1;
      transition: scale 0s;
      transform-origin: left;
    }
  }

  .active::after {
    scale: 1 1;
    transition: scale 10s linear;
  }
</style>
