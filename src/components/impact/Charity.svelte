<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";

  let section = $state<HTMLElement>();

  onMount(() => {
    observeElement(
      section!,
      "visible",
      () => {},
      () => {},
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section class="charity flex" bind:this={section}>
  <div class="container transition">
    <span class="flex">
      <img
        class="round-8"
        src="/impact/ball.jpg"
        alt="Football in Kenya"
        loading="lazy"
        decoding="async"
      />
      <article class="flex">
        <h4>Supercharging Giving</h4>
        <h5>Proof-of-Impact: Philanthropy meets digital gamification.</h5>
        <p>
          We've funded multiple <b>$100k+ humanitarian missions</b>, improving the lives of over
          <b>100,000 lives globally</b>. In partnership with
          <b>Lions Clubs International</b>, our initiatives combined
          <b>blockchain transparency</b> with real-world service - organizing service trips to India,
          Morocco, Kenya, and beyond, to deliver direct, measurable support.
        </p>
        <p class="mobile-only">
          Our story began with an NFT mint where hundreds of generous degens proved that digital
          assets could fuel real-world change. Since then, we’ve helped raise <b
            >millions more for charity</b
          >, tying Web3 engagement to a global movement for good.
        </p>
      </article>
    </span>
  </div>

  <div class="container transition">
    <span class="flex">
      <img
        class="round-8"
        src="/impact/museum.jpg"
        alt="Gaming Museum"
        loading="lazy"
        decoding="async"
      />
      <article class="flex">
        <h4>Gaming for Good</h4>
        <h5>Where fun and education collide.</h5>
        <p>
          CoNexus is deployed in a major gaming museum, where
          <b>kids are using DGRS Labs' tools to build their own stories</b>, explore digital
          literacy, and turn imagination into agency. We're building the future of
          <b>gamified learning</b> - where narratives empower the next generation to think critically,
          speak their truth, and unlock new worlds.
        </p>
      </article>
    </span>
  </div>

  <article class="auto-width pc-only">
    Our story began with an NFT mint where hundreds of generous degens proved that digital assets
    could fuel real-world change. Since then, we’ve helped raise <b>millions more for charity</b>,
    tying Web3 engagement to a global movement for good.
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    .container {
      transition-duration: 0.6s;

      &:first-of-type {
        opacity: 0;
        transform: translateX(-100%);
      }

      &:last-of-type {
        opacity: 0;
        transform: translateX(100%);
      }

      span {
        img {
          width: 100%;
          @include gray-border;
        }

        article {
          align-items: flex-start;
          text-align: left;

          h4 {
            width: 100%;
            text-align: center;
          }
        }

        @include respond-up(tablet) {
          flex-direction: row;

          img {
            width: 15rem;
            aspect-ratio: 1/1;
          }

          article h4 {
            text-align: left;
          }
        }
      }
    }
  }

  :global(.charity.visible .container) {
    opacity: 1 !important;
    transform: none !important;
  }
</style>
