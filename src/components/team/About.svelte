<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "About Us"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>About&nbsp;Us</h1>

  <div class="container flex-row flex-wrap appear-bottom">
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
        <ul class="default-ul flex">
          <li>Iterate relentlessly – weekly releases</li>
          <li>Tiny strike teams with clear ownership</li>
          <li>Community input guides every sprint</li>
          <li>Data over opinions, rapid experiments, ruthless focus</li>
        </ul>
      </span>

      <span class="flex">
        <h4>We live by five values:</h4>
        <ul class="flex">
          <li class="flex-row">
            <img class="standard-icon" src="/icons/bulb.svg" alt="Innovation" />
            <p>
              <b>Innovation</b> – breakthrough tech and bold ideas drive meaningful
              change
            </p>
          </li>
          <li class="flex-row">
            <img
              class="standard-icon"
              src="/icons/people.svg"
              alt="Innovation"
            />
            <p>
              <b>Community</b> – members steer everything we build
            </p>
          </li>
          <li class="flex-row">
            <img
              class="standard-icon"
              src="/icons/target.svg"
              alt="Innovation"
            />
            <p>
              <b>Empowerment</b> – tools and ownership let anyone shape stories and
              earn
            </p>
          </li>
          <li class="flex-row">
            <img
              class="standard-icon"
              src="/icons/shield.svg"
              alt="Innovation"
            />
            <p>
              <b>Transparency</b> – clear goals, open dialogue, visible on‑chain
              activity
            </p>
          </li>
          <li class="flex-row">
            <img
              class="standard-icon"
              src="/icons/heart.svg"
              alt="Innovation"
            />
            <p>
              <b>Impact</b> – every launch targets measurable social and humanitarian
              good
            </p>
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

    ul {
      align-items: flex-start;

      li {
        align-items: flex-start;
        gap: 0.5rem;

        img {
          width: 1.5rem;
        }
      }
    }

    @include respond-up(tablet) {
      width: calc(50% - 1rem);
    }
  }
</style>
