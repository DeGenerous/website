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
    pointer-events: auto;
    position: absolute;
    width: 20%;
    height: 12%;
    top: 68%;
    left: 75.4%;
    background-size: contain;

    background-image: url("../images/narrativeGov/Format.png");
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
</style>
