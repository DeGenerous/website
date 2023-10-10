 <script>
  import Icon from "../Icon.svelte";
  import { createEventDispatcher } from "svelte";
  import MenuTile from "./MenuTile.svelte";
  import NftTile from "./NftTile.svelte";
  import nftData from "../../../../../public/data/narrativegov/nftData.json"; 
  import {
    NarrativeGovStore,
  } from "../../stores/narrativeGovStore";
  const dispatch = createEventDispatcher();
  

  const handleSelect = (e) => {
    $NarrativeGovStore.nftSelected = [...$NarrativeGovStore.nftSelected, e.detail]
    console.log(`Nft: ${$NarrativeGovStore.nftSelected.length}`)
  }
  export let show = false;

</script>

<div
  class="sidePanel"
  class:disappear={show === false}
  class:appear={show === true}
>
  <Icon
    right={32.8}
    top={-0.1}
    on:iconClicked={() => {
      dispatch("toggleSidePanel");
    }}
  />
  <MenuTile nftSum = {nftData.nft.length} nftSelected = {$NarrativeGovStore.nftSelected.length} />
  
  {#each nftData.nft as nft}
    <NftTile src = {nft.img} nftClass={nft.class} nftId = {nft.id} on:nftSelected={handleSelect}/>
  {/each}
  
</div>

<style>
  .sidePanel {
    position: absolute;
    top: 0%;
    left: 100%;
    width: 100%;
    height: 100%;
    background-image: url("/images/narrativeGov/Side panel.png");
    background-size: cover;
    background-repeat: no-repeat;

    opacity: 1;
    transition: left 0.6s, opacity 1s;
    /* animation: right-appear 0.5s ease forwards; */

    /* border: 1px solid red; */
  }

  .disappear {
    left: 100%;
  }
  .appear {
    left: 0%;
    opacity: 1;
  }
</style>
