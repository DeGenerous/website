<script>
  export let active;
  let clicked = false;
</script>

<div
  class="selectButtom"
  class:clicked
  on:click={() => {
    clicked = !clicked;
  }}
/>

<style>
  .selectButtom {
    position: absolute;
    top: 36.5%;
    left: 85.7%;
    width: 10%;
    height: 3%;

    background-image: url("/images/narrativeGov/Select.png");
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
  .selectButtom:hover {
    background-image: url("/images/narrativeGov/Select-Hover.png");
  }
  .clicked {
    background-image: url("/images/narrativeGov/Selected.png");
  }
</style>
