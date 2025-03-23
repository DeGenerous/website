<script lang="ts">
  import roadmap from "@constants/roadmap";
  import { onMount } from "svelte";

  onMount(() => {
    const firstGoal = document.getElementById("goal-12") as HTMLLIElement;
    setTimeout(() => {
      firstGoal.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
  });
</script>

<header class="flex-box">
  <a class="icon-anchor" href="/" aria-label="Home">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-100 -100 200 200"
      class="circle-icon"
    >
      <path
        class="back-arrow-svg-mask"
        d="
          M -14 -30
          L -14 -64
          L -76 -9
          L -14 48
          L -14 12
          Q 36 14 60 52
          Q 60 -26 -12 -30
          Z
        "
        fill="rgb(51, 226, 230, 0.85)"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </svg>
  </a>
  <h1>Roadmap</h1>
  <a class="icon-anchor" href="/" aria-label="Home" on:click|preventDefault></a>
</header>

<ul class="flex-box">
  {#each roadmap as { name, description, done }, index}
    <li>
      {#if done}
        <div class="flex-box checkmark-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-100 -100 200 200"
            class="checkmark-svg"
            fill="rgba(0, 185, 55, 0.9)"
            stroke-width="30"
          >
            <defs>
              <mask id="checkmark-svg-mask">
                <circle r="85" stroke="none" fill="white" />
                <path
                  d="M -50 0 L -15 30 L 50 -35"
                  fill="none"
                  stroke="black"
                />
              </mask>
            </defs>
            <circle r="85" stroke="none" mask="url(#checkmark-svg-mask)" />
          </svg>
        </div>
      {/if}
      <div
        id="goal-{index}"
        class="flex-box blur goal"
        class:done
        style={done ? "background-color: rgba(22, 30, 95, 0.75)" : ""}
      >
        <article class="flex-box">
          <h2>{name}</h2>
          <h3>{description}</h3>
        </article>
      </div>
    </li>
  {/each}
</ul>

<style>
  h1 {
    color: rgba(51, 226, 230, 0.85) !important;
  }

  header {
    width: 100vw;
    flex-direction: row;
    padding-top: 3vw;
    opacity: 0;
    animation: fadeIn 2.4s 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  .icon-anchor {
    display: none;
  }

  .circle-icon {
    width: inherit;
    height: inherit;
  }

  ul {
    gap: 1vw;
  }

  li {
    position: relative;
  }

  .goal {
    flex-direction: row;
    width: 57.5vw;
    gap: 1vw;
    padding: 1.5vw 1vw;
    background-color: rgba(36, 65, 189, 0.75);
    border-radius: 1.5vw;
    box-shadow:
      inset 0 0 0.5vw rgba(51, 226, 230, 0.5),
      0 0.5vw 0.5vw #010020;
  }

  .goal article {
    width: 100%;
  }

  article h2 {
    color: rgb(51, 226, 230);
    text-shadow: none;
  }

  article h3 {
    color: #dedede;
  }

  .done {
    box-shadow:
      inset 0 0 0.5vw rgba(0, 185, 55, 0.25),
      0 0.5vw 0.5vw #010020;
  }

  .done h2 {
    color: white;
  }

  .done h3 {
    color: #bebebe;
  }

  .checkmark-wrapper {
    position: absolute;
    left: -5vw;
    height: 100%;
  }

  .checkmark-svg {
    width: 4vw;
    height: 4vw;
  }

  @media only screen and (max-width: 600px) {
    header {
      position: fixed;
      top: 0;
      width: 100vw;
      justify-content: space-between;
      padding: 1em;
      animation-delay: 0;
      z-index: 100;
      background-color: rgba(1, 0, 32, 0.75);
      box-shadow: 0 0.25vw 0.5vw #010020;
      -webkit-backdrop-filter: blur(1rem);
      backdrop-filter: blur(1rem);
    }

    .icon-anchor {
      display: block;
      width: 3em;
      height: 3em;
    }

    ul {
      gap: 1em;
    }

    .goal {
      width: 95vw;
      gap: 1em;
      padding: 1em;
      border-radius: 1em;
    }

    .goal article {
      gap: 0.5em;
    }

    .checkmark-wrapper {
      top: 1em;
      left: 0.5em;
      z-index: 10;
      height: 1.5em;
    }

    .checkmark-svg {
      width: 2em;
      height: 2em;
    }
  }
</style>
