<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "About Us"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>About&nbsp;Us</h1>

  <div class="flex-row flex-wrap appear-bottom">
    <span class="question container flex">
      <h4>Who we are</h4>
      <p>
        DGRS Labs is a team of builders, storytellers, and technologists disrupting industries for
        social good.
      </p>
    </span>

    <span class="question container flex">
      <h4>Why we exist</h4>
      <p>
        Stories shape culture. By returning creative power to everyday people, we unlock voices and
        value that traditional media ignores.
      </p>
    </span>

    <span class="question container flex">
      <h4>What we do</h4>
      <p>We reinvent IP creation through AI‑powered, community‑owned storytelling.</p>
    </span>

    <span class="how-to container flex">
      <h4>How we operate</h4>
      <ul class="flex">
        <li>
          <p><b>Relentless iteration</b> — weekly releases, compounding progress</p>
        </li>
        <li>
          <p><b>Lean teams</b> — small groups, clear ownership, accountability</p>
        </li>
        <li>
          <p><b>Community-driven</b> — user feedback shapes priorities and sprints</p>
        </li>
        <li>
          <p><b>Evidence-based</b> — data and experiments drive decisions</p>
        </li>
      </ul>
    </span>

    <h4 class="mobile-only">We live by five values:</h4>

    <span class="value container">
      <span class="flex">
        <img class="standard-icon" src="/icons/bulb.svg" alt="Innovation" />
        <h5>Innovation</h5>
      </span>
      <p>Breakthrough tech and bold ideas drive meaningful change</p>
    </span>
    <span class="value container">
      <span class="flex">
        <img class="standard-icon" src="/icons/people.svg" alt="Community" />
        <h5>Community</h5>
      </span>
      <p>Members steer everything we build</p>
    </span>
    <span class="value container">
      <span class="flex">
        <img class="standard-icon" src="/icons/target.svg" alt="Empowerment" />
        <h5>Empowerment</h5>
      </span>
      <p>Tools and ownership let anyone shape stories and earn</p>
    </span>
    <span class="value container">
      <span class="flex">
        <img class="standard-icon" src="/icons/shield.svg" alt="Transparency" />
        <h5>Transparency</h5>
      </span>
      <p>Clear goals, open dialogue, visible on‑chain activity</p>
    </span>
    <span class="value container">
      <span class="flex">
        <img class="standard-icon" src="/icons/heart.svg" alt="Impact" />
        <h5>Impact</h5>
      </span>
      <p>Every launch targets measurable social and humanitarian good</p>
    </span>

    <p>
      <i>
        Our mission is to unleash human creativity, democratize IP ownership, and channel Web3 value
        toward real‑world good.
      </i>
    </p>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  div {
    align-items: stretch;
    max-width: 1500px;

    > p,
    > h4 {
      width: 100%;
    }

    .container {
      width: 100%;
      gap: 1rem;
    }

    .question,
    .value {
      justify-content: flex-start;
    }

    .value img {
      width: 2rem;
    }

    @include respond-up(small-desktop) {
      .container {
        max-width: unset;
      }

      .question {
        width: calc(33% - 1.5rem);
      }

      .value {
        width: calc(20% - 1.5rem);
      }
    }

    @include respond-up(large-desktop) {
      .question {
        width: calc(20% - 1.5rem);
      }

      .how-to {
        width: calc(40% - 1.5rem);
        text-align: left;

        li {
          width: 100%;
        }
      }

      .value span {
        flex-direction: row;
      }
    }
  }
</style>
