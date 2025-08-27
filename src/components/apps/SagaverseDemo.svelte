<script lang="scss">
</script>

<section class="flex-row flex-wrap">
  <div>
    <img
      class="first"
      src="/apps/sagaverse/BattleForNexon1.webp"
      alt="Ark Assassin"
    />
    <img
      class="second"
      src="/apps/sagaverse/BattleForNexon2.webp"
      alt="Ark Assassin"
    />
  </div>
  <div>
    <img
      class="first"
      src="/apps/sagaverse/ArkAssassin1.webp"
      alt="Ark Assassin"
    />
    <img
      class="second"
      src="/apps/sagaverse/ArkAssassin2.webp"
      alt="Ark Assassin"
    />
  </div>
  <div>
    <img
      class="first"
      src="/apps/sagaverse/LastStand1.webp"
      alt="Ark Assassin"
    />
    <img
      class="second"
      src="/apps/sagaverse/LastStand2.webp"
      alt="Ark Assassin"
    />
  </div>
  <div>
    <img
      class="first"
      src="/apps/sagaverse/TheDarkZoo1.webp"
      alt="Ark Assassin"
    />
    <img
      class="second"
      src="/apps/sagaverse/TheDarkZoo2.webp"
      alt="Ark Assassin"
    />
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    width: 100%;

    div {
      position: relative;
      width: calc(50% - 0.5rem);
      max-width: 20rem;
      aspect-ratio: 1 / 1;
      border-radius: 0.5rem;
      @include dark-blue;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: inherit;

        &.second {
          opacity: 0;
          z-index: 1;
        }
      }

      &:hover,
      &:active,
      &:focus {
        img.second {
          opacity: 1;
        }
      }

      @include respond-up(tablet) {
        width: calc(25% - 0.75rem);
      }
    }
  }
</style>
