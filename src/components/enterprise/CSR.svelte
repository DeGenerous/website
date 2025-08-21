<script lang="ts">
</script>

<section id="csr" class="flex pad-inline full-height">
  <h2>CSR with Real Impact</h2>
  <div class="container">
    <img
      class="round-8"
      src="/enterprise/ball.webp"
      alt="CSR with Real Impact"
    />
    <article class="flex">
      <p>
        Activate your company’s purpose through fully branded service missions
        in partnership with
        <a href="https://www.lionsclubs.org" target="_blank">
          Lions Clubs International
        </a>
        (1.4M members) and enterprises like Johnson&Johnson.
      </p>
      <p>
        We help Lions manage logistics, partnerships, and both Web2 and
        blockchain donation flows, ensuring that
        <b>100% of contributions</b>
        reach those in need.
      </p>
      <p>
        Each annual charity expedition is organized with the help of local
        volunteers and recorded for transparency, driving over 10 million views
        and raising millions more for charity. Whether you join our next global
        mission or want a bespoke local program, we’ll guide you and ensure
        every detail reflects your brand values.
      </p>
      <p>
        <a href="mailto:charity@degenerousdao.com" target="_blank">
          Join our mission
        </a>
        and make a measurable difference.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    img {
      width: 100%;
    }

    article {
      align-items: flex-start;
      text-align: left;

      p {
        width: 100%;
        max-width: unset;
      }
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
