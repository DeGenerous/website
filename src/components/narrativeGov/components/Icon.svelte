<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let top = 0;
  export let right = 0;
  const handleClick = () => {
    dispatch("iconClicked");
  };
</script>

<div class="icon" on:click={handleClick} style="top: {top}%; right:{right}%" />

<style>
  .icon {
    pointer-events: auto;
    position: absolute;
    width: 10%;
    height: 10%;
    background-size: contain;
    padding: 0;
    margin: 0;
    background-image: url("../images/narrativeGov/Icon.png");
    background-repeat: no-repeat;
    /* background-position: center center; */
    /* border: 1px solid white; */
  }

  .icon:hover {
    background-image: url("../images/narrativeGov/Icon-Hover.png");
  }
</style>
