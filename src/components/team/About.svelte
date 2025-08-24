<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "About Us"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>About&nbsp;Us</h1>

  <div class="container flex-row flex-wrap">
    <article class="flex">
      <span class="flex">
        <h4>Who we are</h4>
        <p>
          DGRS Labs is a team of builders, storytellers, and technologists
          disrupting industries for social good.
        </p>
      </span>

      <span class="flex">
        <h4>Why we exist</h4>
        <p>
          Stories shape culture. By returning creative power to everyday people,
          we unlock voices and value that traditional media ignores.
        </p>
      </span>

      <span class="flex">
        <h4>What we do</h4>
        <p>
          We reinvent IP creation through AI‑powered, community‑owned
          storytelling.
        </p>
      </span>
    </article>

    <article class="flex">
      <span class="flex">
        <h4>How we operate</h4>
        <ul class="default-ul">
          <li>Iterate relentlessly – weekly releases</li>
          <li>Tiny strike teams with clear ownership</li>
          <li>Community input guides every sprint</li>
          <li>Data over opinions, rapid experiments, ruthless focus</li>
        </ul>
      </span>

      <span class="flex">
        <h4>We live by five values:</h4>
        <ul class="default-ul">
          <li>
            Innovation – breakthrough tech and bold ideas drive meaningful
            change
          </li>
          <li>Community – members steer everything we build</li>
          <li>
            Empowerment – tools and ownership let anyone shape stories and earn
          </li>
          <li>
            Transparency – clear goals, open dialogue, visible on‑chain activity
          </li>
          <li>
            Impact – every launch targets measurable social and humanitarian
            good
          </li>
        </ul>
      </span>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  div {
    align-items: flex-start;
    justify-content: space-between;
  }
  article {
    width: 100%;

    &,
    span {
      align-items: flex-start;
      text-align: left;
    }

    h4 {
      font-family: $font-sans;
    }

    span {
      gap: 0.5rem;
    }

    @include respond-up(tablet) {
      width: calc(50% - 1rem);
    }
  }
</style>
