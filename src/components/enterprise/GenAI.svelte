<script lang="ts">
</script>

<section id="gen-ai" class="flex pad-inline full-height">
  <h2>GenAI Film Studio</h2>
  <div class="container">
    <img
      class="round-8"
      src="/enterprise/gen-ai.webp"
      alt="GenAI Film Studio"
    />
    <article class="flex">
      <p>
        Harness the power of AI alongside veteran directors and editors to
        produce everything from 15sec ads to feature‑length films. Our hybrid
        workflow uses generative tools for rapid storyboarding and asset
        creation, then layers in human craftsmanship for cinematic polish.
      </p>
      <p>
        Clients achieve up to
        <b>90% cost and time savings</b>, without sacrificing emotional impact
        or production value.
      </p>
      <p>
        Our studio has delivered hundreds of high-quality ads, films, and shows,
        amassing tens of millions of views.
      </p>
      <p>
        <a href="mailto:biz@degenerousdao.com" target="_blank">
          Schedule a creative call
        </a>
        to bring your project to life.
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
