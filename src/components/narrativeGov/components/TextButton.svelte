<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let activeField;

  const handleClick = () => {
    dispatch("changeActiveField", "text");
  };
</script>

<div
  class="BookButton"
  class:active={activeField === "text"}
  on:click={handleClick}
/>

<style>
  .BookButton {
    position: absolute;
    width: 17%;
    height: 30%;
    top: 14%;
    left: 77.5%;
    background-size: contain;

    background-image: url("../images/narrativeGov/TextButton-inactive.png");
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }

  .BookButton:hover {
    background-image: url("../images/narrativeGov/Text-Hover.png");
  }
  .BookButton.active {
    background-image: url("../images/narrativeGov/TextButton-active.png");
    /* background-image: url("../images/narrativeGov/Text-Hover.png"); */
  }
</style>
