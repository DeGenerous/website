<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let clicked = false;
</script>

<div
  class="selectButton"
  class:clicked
  on:click={() => {
    clicked = true;
    dispatch("nftSelected");
  }}
/>

<style>
  .selectButton {
    position: absolute;
    top: 75.5%;
    left: 48.7%;
    width: 40%;
    height: 30%;

    background-image: url("/images/narrativeGov/Select.png");
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
  .selectButton:hover {
    background-image: url("/images/narrativeGov/Select-Hover.png");
  }
  .clicked {
    background-image: url("/images/narrativeGov/Selected.png");
    pointer-events: none;
  }
</style>
