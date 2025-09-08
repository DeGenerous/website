<script lang="ts">
  import { mediaURL } from "@constants/media";
</script>

<section class="round">
  <div class="flex">
    <span class="container">
      <p>A new world of endless possibilities awaits you.</p>
      <ul class="flex-row flex-wrap">
        <a
          class="menu-tile nohover-link blur"
          href="https://conexus.degenerousdao.com/sections/Community%20Picks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="{mediaURL}/conexus-sections/communitypicks.avif" alt="Community Picks" loading="lazy" decoding="async" />
          <h4>Community Picks</h4>
        </a>
        <a
          class="menu-tile nohover-link pc-only"
          href="https://conexus.degenerousdao.com/sections/Collabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="{mediaURL}/conexus-sections/collabs.avif" alt="Collabs" loading="lazy" decoding="async" />
          <h4>Collabs</h4>
        </a>
        <a
          class="menu-tile nohover-link pc-only"
          href="https://conexus.degenerousdao.com/sections/Dischordian%20Saga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="{mediaURL}/conexus-sections/dischordiansaga.avif" alt="Dischordian Saga" loading="lazy" decoding="async" />
          <h4>Dischordian Saga</h4>
        </a>
      </ul>
      <p>Infinitely unique. Never repeatable.</p>
    </span>
  </div>
  <img src="/apps/conexusBG.webp" alt="CoNexus" loading="lazy" decoding="async" />
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    position: relative;
    width: min(100%, 40rem);
    height: auto;

    div {
      .container {
        width: auto;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background: unset;
        border: unset;
        backdrop-filter: unset;
        -webkit-backdrop-filter: unset;

        p {
          @include white-txt;
        }

        .menu-tile {
          width: 100%;
          height: unset;
          border-radius: 0.75rem;
          padding: 0.25rem;
          gap: 0.25rem;

          h4 {
            font-size: 0.75rem;
            color: inherit;
          }

          img {
            border-radius: 0.5rem;
          }
        }
      }
    }

    > img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: inherit;
      z-index: -1;
      @include gray-border;
    }

    @include respond-up(tablet) {
      height: min(45.25vw, 25rem);

      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .container {
          box-shadow: $shadow-plus-inset-glow;
          animation: dark-glowing 10s ease-in-out infinite;
          -webkit-backdrop-filter: blur(0.25rem);
          backdrop-filter: blur(0.25rem);

          p {
            font-size: 0.5rem;
            line-height: 1;
          }

          .menu-tile {
            width: 11rem;
          }
        }
      }

      > img {
        position: static;
      }
    }
  }
</style>
