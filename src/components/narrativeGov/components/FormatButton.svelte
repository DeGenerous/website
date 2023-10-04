<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import TextButton from "./TextButton.svelte";
  import VideoButton from "./VideoButton.svelte";

  export let activeField;
</script>

<div class="FormatButton">
  <TextButton
    on:changeActiveField={() => {
      dispatch("changeActiveField", "text");
    }}
    {activeField}
  />
  <VideoButton
    on:changeActiveField={() => {
      dispatch("changeActiveField", "video");
    }}
    {activeField}
  />
</div>

<style>
  .FormatButton {
    position: absolute;
    width: 20%;
    height: 12%;
    top: 62%;
    left: 76%;
    background-size: contain;

    background-image: url("../images/narrativeGov/FormatBG.png");
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
</style>
