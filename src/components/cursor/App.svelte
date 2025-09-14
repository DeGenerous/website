<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";

  import { darkTheme } from "@stores/theme.svelte";
</script>

<div class="cursor-overlay">
  {#key $darkTheme}
    <Canvas>
      <Scene />
    </Canvas>
  {/key}
</div>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .cursor-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none; /* overlay won’t intercept clicks */

    @include respond-up(small-desktop) {
      display: block;
    }
  }

  :global(.cursor-overlay canvas) {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
