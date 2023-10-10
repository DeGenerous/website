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
    top: 10%;
    left: 77.5%;
    background-size: contain;

    background-image: url("../images/narrativeGov/Text-Inactive.png");
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }

  .BookButton:hover {
    background-image: url("../images/narrativeGov/Text-Hover.png");
  }
  .BookButton.active {
    background-image: url("../images/narrativeGov/Text-Active.png");
    top: 2%;
    left: 73%;
    width: 24.5%;
    height: 44.5%;
    /* border: 1px solid white; */
  }
</style>
