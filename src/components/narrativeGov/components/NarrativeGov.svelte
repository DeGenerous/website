<script>
  import VoteButton from "./VoteButton.svelte";
  import FormatButton from "./FormatButton.svelte";
  import Icon from "./Icon.svelte";
  import VideoFrame from "./VideoFrame.svelte";
  import TextButton from "./TextButton.svelte";
  import TextFrame from "./TextFrame.svelte";
  import SidePanel from "./SidePanel/SidePanel.svelte";
  import Vote from "./Vote/Vote.svelte";

  let activeField = "video";
  let showSidePanel = false;

  const changeActiveField = (e) => {
    activeField = e.detail;
  };

  const toggleSidePanel = () => {
    showSidePanel = !showSidePanel;
  };
</script>

<div class="wrapper">
  {#if activeField === "video"}
    <!-- add autoplay below -->
    <!-- <video playsinline loop autoplay paused={showSidePanel}>
      <source
        src="/video/narrativeGov/Narrative Governance.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video> -->
    <iframe
      src="https://www.youtube.com/embed/GMGSSpqEE_A?autoplay=1&mute=1"
      frameborder="0"
      allowfullscreen
    />
  {/if}

  <Vote />

  <div class="narrativeGov">
    <FormatButton on:changeActiveField={changeActiveField} {activeField} />
    <VoteButton  />
    <Icon on:iconClicked={toggleSidePanel} />
    <TextFrame play={activeField === "text"} />
  </div>

  {#if showSidePanel === true}<div class="shadow" />{/if}
  <SidePanel on:toggleSidePanel={toggleSidePanel} show={showSidePanel} />
</div>

<style>
  .narrativeGov {
    pointer-events: none;
    width: 100%;
    padding-top: 91%;
    position: relative;
    background-image: url("../images/narrativeGov/Hub.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
  }

  /* Does not work for children  */
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
    /* border: 1px solid blue; */
  }
  video {
    /** Simulationg background-size: cover */
    object-fit: cover;
    height: 56.5%;
    width: 90%;

    position: absolute;
    top: 7.9%;
    left: 5%;
  }
  iframe {
    /** Simulationg background-size: cover */
    object-fit: cover;
    height: 56.5%;
    width: 91%;

    position: absolute;
    top: 7.9%;
    left: 4.5%;
    border: 1px solid red;

  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
  }
</style>
