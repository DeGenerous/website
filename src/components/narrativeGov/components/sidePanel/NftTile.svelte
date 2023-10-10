<script>
  import SelectButton from "./SelectButton.svelte";
  import { createEventDispatcher } from "svelte";
  export let src;
  export let nftClass;
  export let nftId;

  const dispatch = createEventDispatcher();
</script>

<div class="nftTile">
  <p style="top: 5%;">Potential:</p>
  <p style="top: 16%; left:75%"># {nftId}</p>
  <p>Class:</p>
  <p class="nftClass" style=" top:53%; left:54%;">
    {nftClass}
  </p>
  <img {src} alt="Nft picture" />
  <SelectButton
    on:nftSelected={() => {
      dispatch("nftSelected", src);
    }}
  />
</div>

<style>
  .nftTile {
    position: relative;
    top: 25%;
    left: 73%;
    width: 25%;
    height: 15%;
    top: 25%;
    margin-top: 20px;
    background-image: url("/images/narrativeGov/Tile.png");
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
  .nftTile > img {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 40%;
    height: 80%;
  }
  .nftTile > p {
    /* font-weight: bold; */
    color: white;
    position: absolute;
    left: 57%;
    top: 40%;
    font-family: "Righteous", cursive;
    font-size: 1.2rem;
  }
  .nftClass {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    .nftTile > p {
      font-size: 0.4rem;
      left: 53%;
    }

    .nftClass {
      font-size: 0.3rem;
    }
  }
</style>
