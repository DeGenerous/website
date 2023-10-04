<script>
  import VoteButton from "./VoteButton.svelte";
  import FormatButton from "./FormatButton.svelte";
  import Icon from "./Icon.svelte";
  import VideoFrame from "./VideoFrame.svelte";
  import TextButton from "./TextButton.svelte";
  import TextFrame from "./TextFrame.svelte";
  let activeField = "video";

  const changeActiveField = (e) => {
    activeField = e.detail;
  };
</script>

<div class="wrapper">
  {#if activeField === "video"}
    <video playsinline autoplay loop>
      <source
        src="/video/narrativeGov/Narrative Governance.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <!-- <iframe
      src="https://www.youtube.com/embed/GMGSSpqEE_A?autoplay=1&mute=1"
      frameborder="0"
      allowfullscreen
    /> -->
  {/if}

  <div class="narrativeGov">
    <FormatButton on:changeActiveField={changeActiveField} {activeField} />
    <VoteButton active={activeField === "video"} />
    <Icon />
    <TextFrame play={activeField === "text"} />
  </div>
</div>

<style>
  .narrativeGov {
    pointer-events: none;
    width: 100%;
    padding-top: 91%;
    position: relative;
    background-image: url("../images/narrativeGov/Display.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }
  .narrativeGov > * {
    pointer-events: auto; /* Reset pointer-events for children */
  }
  .wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  video {
    /** Simulationg background-size: cover */
    object-fit: cover;
    height: 57%;
    width: 90%;

    position: absolute;
    top: 7%;
    left: 5%;
  }
  iframe {
    /** Simulationg background-size: cover */
    object-fit: cover;
    height: 57%;
    width: 90%;

    position: absolute;
    top: 8%;
    left: 5%;
  }
</style>
