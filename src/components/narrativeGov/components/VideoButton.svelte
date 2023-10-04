<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let activeField;
</script>

<div
  class="videoButton"
  class:active={activeField === "video"}
  on:click={() => {
    dispatch("changeActiveField", "video");
  }}
/>

<style>
  .videoButton {
    position: absolute;
    width: 17%;
    height: 30%;
    top: 14%;
    left: 6.5%;
    background-size: contain;

    background-image: url("../images/narrativeGov/VideoButton-inactive.png");
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
  .videoButton:hover {
    background-image: url("../images/narrativeGov/Video-Hover.png");
  }
  .videoButton.active {
    background-image: url("../images/narrativeGov/VideoButton-active.png");
  }
</style>
