<script>
  export let top;
  export let left;
  export let imgSource = "../images/narrativeGov/Vote-Clicked.png";
</script>

<div class="voteButton" style="background-image: url({imgSource})" />

<style>
  .voteButton {
    width: 15.5%;
    height: 13%;
    position: absolute;
    top: 58%;
    left: 71%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: contain;
  }
</style>
