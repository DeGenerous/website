<script lang="ts">
</script>

<section class="round">
  <!-- <div class="flex">
    <span class="container">
      <p>A new world of endless possibilities awaits you.</p>
      <p>Infinitely unique. Never repeatable.</p>
    </span>
  </div> -->
  <img src="/apps/governance-hub.webp" alt="Galactic Governance Hub" />
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    position: relative;
    width: min(95vw, 40rem);

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .container {
        width: auto;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: $shadow-plus-inset-glow;
        animation: dark-glowing 10s ease-in-out infinite;

        p {
          font-size: 0.5rem;
          line-height: 1;
          @include white-txt;
        }
      }
    }

    > img {
      border-radius: inherit;
    }
  }
</style>
