<script lang="ts">
</script>

<section class="flex full-height">
  <h2>Supercharging Giving</h2>

  <div class="container">
    <img class="round-8" src="/impact/ball.jpg" alt="Football in Kenya" />
    <article class="flex">
      <h5>Proof-of-Impact: Philanthropy meets digital gamification.</h5>
      <p>
        We've funded multiple <b>$100k+ humanitarian missions</b>, improving the
        lives of over <b>100,000 lives globally</b>. In partnership with
        <b>Lions Clubs International</b>, our initiatives combined
        <b>blockchain transparency</b> with real-world service - organizing service
        trips to India, Morocco, Kenya, and beyond, to deliver direct, measurable
        support.
      </p>
      <p>
        Our story began with an NFT mint where hundreds of generous degens
        proved that digital assets could fuel real-world change. Since then,
        we’ve helped raise <b>millions more for charity</b>, tying Web3
        engagement to a global movement for good.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    img {
      width: 100%;
      @include gray-border;
    }

    article {
      align-items: flex-start;
      text-align: left;
    }

    @include respond-up(small-desktop) {
      flex-direction: row;

      img {
        width: 20rem;
        aspect-ratio: 1/1;
      }
    }
  }
</style>
