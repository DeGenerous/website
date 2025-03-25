<script lang="ts">
  import { onMount } from "svelte";
  import observeElement from "@utils/observer";

  let vision: HTMLDivElement;

  onMount(() => {
    observeElement(vision, null, toggleVision);
  });

  const toggleVision = () => {
    showVision = !showVision;
  };

  let showVision: boolean = false;
</script>

<h1>Shape The World You Dream of</h1>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="flex-box"
  bind:this={vision}
  on:pointerdown|preventDefault={toggleVision}
  role="button"
  tabindex="0"
>
  <h3 style={showVision ? "opacity: 1;" : ""}>
    We are building a decentralized entertainment platform for the creative
    economy and Generative AI era. Our flagship app, made with user-friendly
    tools and efficiency in mind, empowers anyone to create, distribute, and
    monetize high-quality, visually immersive stories.
  </h3>
  <img
    src="/vision.webp"
    alt="Vision"
    style={showVision
      ? "transform: scale(1.25); filter: blur(0.5vw) brightness(50%);"
      : ""}
  />
</div>

<h3>
  The next era of entertainment belongs to the people. Step into a world of no
  restraints and make your mark. Whether you want to play, create, or
  innovate—now is your time.
</h3>

<style>
  div {
    position: relative;
    width: 100vw;
    height: 16vw;
    overflow: hidden;
    box-shadow: 0 0 0.5vw #010020;
    cursor: pointer;
  }

  h3 {
    padding-inline: 2vw;
  }

  div h3 {
    opacity: 0;
    width: 90%;
    line-height: 1.5;
    color: rgb(51, 226, 230);
    text-shadow: 0 0.25vw 0.25vw #010020;
    transition-timing-function: ease-in-out;
  }

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
    transition-timing-function: ease-in-out;
  }

  div:hover,
  div:active {
    filter: brightness(125%);
    transform: scale(1.025);
  }

  @media only screen and (max-width: 600px) {
    div {
      height: 60vw;
    }

    img {
      width: auto;
      height: 100%;
    }
  }
</style>
