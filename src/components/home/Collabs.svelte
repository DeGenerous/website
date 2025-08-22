<script lang="ts">
  import collabs from "@constants/collabs";
</script>

<section class="container fade-in">
  <p>
    We’re working with industry pioneers, from Web3 leaders to award-winning
    filmmakers.
  </p>

  <div class="collabs">
    <ul class="reel" style="--count:{collabs.length}">
      {#each [...collabs, ...collabs] as c}
        <li>
          <a class="nohover-link" href={c.href} target="_blank" rel="noopener">
            <img class="transition" src={c.src} alt={c.alt} loading="lazy" />
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <p>
    Our mission is to unleash human creativity, democratize IP ownership, and
    channel Web3 value toward real‑world good.
  </p>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  /* Tunables */
  $row-h: 7rem; // row height (logos scale to fit)
  $space: 2.5rem; // space between logos
  $edge-fade: 6%; // fade at edges
  $dur-per-item: 2s; // speed: total duration = count * dur-per-item

  section {
    margin-block: -6rem 4rem;
    max-width: 100vw;
    padding-inline: 0;
    border-radius: 0;

    p {
      @include auto-width;
    }
  }

  /* Wrap */
  .collabs {
    width: 100%;
    overflow: hidden;

    // soft edge fade
    // -webkit-mask-image: linear-gradient(
    //   90deg,
    //   transparent 0,
    //   #000 #{$edge-fade},
    //   #000 calc(100% - #{$edge-fade}),
    //   transparent 100%
    // );
    // mask-image: linear-gradient(
    //   90deg,
    //   transparent 0,
    //   #000 #{$edge-fade},
    //   #000 calc(100% - #{$edge-fade}),
    //   transparent 100%
    // );

    .reel {
      --count: var(--count, 7);
      --dur: calc(var(--count) * #{$dur-per-item});

      /* Critical bits for seamless loop */
      display: inline-flex;
      min-width: max-content;
      padding: 0;
      margin: 0;
      list-style: none;

      will-change: transform;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
      animation: slide-left var(--dur) linear infinite;

      > li {
        flex: 0 0 auto;
        height: $row-h;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        padding: 0.5rem;

        // Use margin for spacing (NOT gap)
        margin-inline-end: $space;

        @include respond-up("large-desktop") {
          height: $row-h * 1.25;
        }

        > a {
          display: inline-flex;
          align-items: center;
          height: 100%;
        }

        img {
          height: 100%;
          width: auto; // keep natural aspect
          object-fit: contain;
          display: block;
          transition:
            transform 0.25s ease,
            filter 0.25s ease,
            opacity 0.25s ease;
        }
      }
    }

    /* Pause + dim on hover (desktop) */
    &:hover .reel {
      animation-play-state: paused;
    }
    &:hover img {
      opacity: 0.5;
    }
    .reel li:hover img {
      opacity: 1;
    }
  }
</style>
