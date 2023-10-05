<script>
  import Icon from "../Icon.svelte";
  import { createEventDispatcher } from "svelte";
  import MenuTile from "./MenuTile.svelte";
  import NftTile from "./NftTile.svelte";
  import SelectButton from "./SelectButton.svelte";

  const dispatch = createEventDispatcher();

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
  <MenuTile />
  <NftTile />
  <SelectButton />
</div>

<style>
  .sidePanel {
    position: absolute;
    top: 0%;
    left: 100%;
    width: 100%;
    height: 100%;
    /* height: 100%; */
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
  /* @keyframes right-appear {
    to {
      left: 0%;
      opacity: 1;
    }
  }
  @keyframes right-disappear {
    to {
      left: 100%;
      opacity: 0;
    }
  } */
  /* @media screen and (min-width: 500px) {
    .sidePanel {
      top: 0%;
      left: 100%;
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  } */
</style>
