<script>
  export let active = false;
  if (active) {
    console.log("Vote button is active");
  } else {
    console.log("Vote button is NOT active");
  }
</script>

<div class="voteButton" class:active />

<style>
  .voteButton {
    width: 19.7%;
    height: 17%;
    position: absolute;
    top: 72.4%;
    left: 75%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../images/narrativeGov/VoteInactive.png");
    /* border: 1px solid white; */
  }
  .active {
    background-image: url("../images/narrativeGov/Vote-Active.png");
  }
  .active:hover {
    background-image: url("../images/narrativeGov/Vote-Hover.png");
  }
</style>
