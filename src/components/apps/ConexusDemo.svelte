<script lang="ts">
  import { mediaURL } from "@constants/media";
</script>

<section class="round">
  <div class="flex">
    <span class="container">
      <p>A new world of endless possibilities awaits you.</p>
      <ul class="flex-row">
        <li>
          <a
            class="menu-tile nohover-link"
            href="https://conexus.degenerousdao.com/sections/Community%20Picks"
            target="_blank"
          >
            <img
              src="{mediaURL}/conexus-sections/communitypicks.avif"
              alt="Community Picks"
            />
            <h4>Community Picks</h4>
          </a>
        </li>
        <li>
          <a
            class="menu-tile nohover-link"
            href="https://conexus.degenerousdao.com/sections/Collabs"
            target="_blank"
          >
            <img src="{mediaURL}/conexus-sections/collabs.avif" alt="Collabs" />
            <h4>Collabs</h4>
          </a>
        </li>
        <li>
          <a
            class="menu-tile nohover-link"
            href="https://conexus.degenerousdao.com/sections/Dischordian%20Saga"
            target="_blank"
          >
            <img
              src="{mediaURL}/conexus-sections/dischordiansaga.avif"
              alt="Dischordian Saga"
            />
            <h4>Dischordian Saga</h4>
          </a>
        </li>
      </ul>
      <p>Infinitely unique. Never repeatable.</p>
    </span>
  </div>
  <img src="/conexusBG.webp" alt="CoNexus" />
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    position: relative;

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

        .menu-tile {
          width: 11rem;
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
      width: 40rem;
      border-radius: inherit;
      aspect-ratio: 2 / 1;
      @include box-shadow;
    }
  }
</style>
