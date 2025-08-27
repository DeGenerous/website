<script lang="ts">
</script>

<section class="round">
  <iframe
    src="https://www.youtube.com/embed/isK6VuGAbs4"
    title="Dischordian Saga"
    allowfullscreen
  ></iframe>
  <img src="/apps/governance-hub.webp" alt="Galactic Governance Hub" />
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    position: relative;
    width: min(95vw, 40rem);

    iframe {
      position: absolute;
      width: 89%;
      left: 5.5%;
      top: 12.5%;
      height: 78.5%;
      z-index: 10;
      outline: none;
      border: none;
    }

    > img {
      border-radius: inherit;
    }
  }
</style>
