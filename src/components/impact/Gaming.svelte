<script lang="ts">
</script>

<section class="flex full-height">
  <h2>Gaming for Good</h2>

  <div class="container">
    <img class="round-8" src="/impact/museum.jpg" alt="Gaming Museum" />
    <article class="flex">
      <h5>Where fun and education collide.</h5>
      <p>
        In 2024, CoNexus was deployed in a major gaming museum, where
        <b>kids used CoNexus to build their own stories</b>, explore digital
        literacy, and turn imagination into agency. We're building the future of
        <b>gamified learning</b> - where narratives empower the next generation to
        think critically, speak their truth, and unlock new worlds.
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
