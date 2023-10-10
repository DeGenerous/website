<script>
  import { NarrativeGovStore } from "../../stores/narrativeGovStore";

  let isClicked = false;
</script>

<div
  class="voteButton"
  class:active={$NarrativeGovStore.votedOption != null &&
    !isClicked &&
    $NarrativeGovStore.nftSelected.length > 0}
  class:clicked={isClicked === true}
  on:click={() => {
    isClicked = true;
  }}
/>

<style>
  .voteButton {
    pointer-events: auto;
    width: 19.7%;
    height: 17%;
    position: absolute;
    top: 77.5%;
    left: 75.5%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../images/narrativeGov/VoteInactive.png");
    /* border: 1px solid white; */
  }
  .active {
    background-image: url("../images/narrativeGov/VoteActive.png");
  }
  .active:hover {
    background-image: url("../images/narrativeGov/VoteHover.png");
  }
  .clicked {
    background-image: url("../images/narrativeGov/VoteClicked.png");
  }
</style>
