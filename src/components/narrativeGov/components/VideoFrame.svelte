<script>
  export let play = false;
</script>

{#if play}
  <div class="videoFrame">
    <iframe
      src="https://www.youtube-nocookie.com/embed/GMGSSpqEE_A?autoplay=1&mute=1"
      title="Narrative Governance"
      frameborder="0"
      allowfullscreen=""
    />
  </div>
{/if}

<style>
  .videoFrame {
    width: 90%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 8%;
    left: 5%;
    /* border: 1px solid white; */
  }
</style>
