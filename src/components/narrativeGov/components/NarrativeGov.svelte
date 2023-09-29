<script>
  import VoteButton from "./VoteButton.svelte";
</script>

<div class="narrativeGov">
  <VoteButton imgSource={"../images/narrativeGov/Vote-Clicked.png"} />
</div>

<style>
  .narrativeGov {
    width: 100%;
    height: 500px;
    /* height: 100vh; */
    position: relative;
    background-image: url("../images/narrativeGov/Hub.png");
    background-size: contain;
    background-repeat: no-repeat;
    /* background-position: center center; */
    object-fit: cover;
  }
</style>
