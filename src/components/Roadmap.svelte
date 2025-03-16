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

<ul class="flex-box blur">
  {#each roadmap as { name, description, done }, index}
    <li
      id="goal-{index}"
      class="flex-box"
      class:done
      style={done ? "background-color: rgba(22, 30, 95, 0.75)" : ""}
    >
      {#if done}
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
              <path d="M -50 0 L -15 30 L 50 -35" fill="none" stroke="black" />
            </mask>
          </defs>
          <circle r="85" stroke="none" mask="url(#checkmark-svg-mask)" />
        </svg>
      {:else}
        <span class="flex-box number"
          >{index + 1 - roadmap.filter((goal) => goal.done).length}</span
        >
      {/if}
      <article class="flex-box">
        <h2>{name}</h2>
        <h3>{description}</h3>
      </article>
    </li>
  {/each}
</ul>

<style>
  header {
    width: 100vw;
    flex-direction: row;
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

  li article {
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

  .checkmark-svg,
  .number {
    width: 4vw;
    height: 4vw;
    flex: none;
  }

  .number {
    color: rgb(51, 226, 230);
    background-color: rgba(1, 0, 32, 0.5);
    box-shadow: 0 0 0.5vw rgba(51, 226, 230, 0.5);
    border-radius: 50%;
    font-size: 2vw;
  }

  @media only screen and (max-width: 600px) {
    header {
      justify-content: space-between;
      padding-inline: 1em;
      animation-delay: 0;
    }

    .icon-anchor {
      display: block;
      width: 3em;
      height: 3em;
    }

    ul {
      gap: 1em;
    }

    li {
      width: 95vw;
      gap: 1em;
      padding: 1em;
      border-radius: 1em;
    }

    li article {
      gap: 0.5em;
    }

    .checkmark-svg,
    .number {
      width: 2em;
      height: 2em;
    }

    .number {
      font-size: 1em;
    }
  }
</style>
