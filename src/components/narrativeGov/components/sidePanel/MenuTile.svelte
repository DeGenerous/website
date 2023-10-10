<script>
  import FilterButton from "./FilterButton.svelte";
  export let accountId = "0x5517Ba19c8c3cfVT222ee23fee32cc032CEaeB0E"
  export let nftSum;
  export let nftSelected;
</script>

<div class="menuTile">
  <FilterButton />
  <p>{accountId.slice(0,6)}...{accountId.slice(-4)}<p/>
  <p style="left: 77%; top: 53%;">{nftSum}</p>
  <p style="left: 77%; top: 37%;">{nftSelected}</p>

  
</div>

<style>
  .menuTile {
    position: absolute;
    top: 5%;
    left: 73%;
    width: 25%;
    height: 15%;
    top: 5%;
    background-image: url("/images/narrativeGov/AccountTile.png");
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
  .menuTile > p {
    font-weight:bold;
    position: absolute;
    top:9%;
    left:44%
  }
  @media screen and (max-width: 450px){
    .menuTile > p{
      font-size: 0.3rem;
    }
  }
  
</style>
