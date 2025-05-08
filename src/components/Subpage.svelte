<script lang="ts">
  export let title: string = "";
  export let project: Nullable<Collab> = null;

  let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<header class="flex-box subpage-header">
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
  <h1>{title}</h1>
  <a class="icon-anchor" href="/" aria-label="Home" on:click|preventDefault></a>
</header>

<slot />

{#if project}
  <p class="collab-description">{project.description}</p>

  {#if project.logo}
    <img class="collab-logo" src={project.logo} alt={project.name} />
  {/if}

  <section class="blur tiles-collection">
    {#each project.stories as { picture, title, link }}
      <a class="tile" href={link} target="_blank">
        <img class="tile-picture" src={picture} alt={title} />
        <p class="tile-title">{title}</p>
      </a>
    {/each}
  </section>

  <div class="flex-box blur collab-links">
    <h3>Links:</h3>
    {#if project.website}
      <a href={project.website} target="_blank">
        <img class="link-icon" src="/icons/website.png" alt="Website" />
      </a>
    {/if}
    {#if project.twitter}
      <a href={project.twitter} target="_blank">
        <img class="link-icon" src="/icons/twitter.png" alt="Twitter" />
      </a>
    {/if}
    {#if project.tiktok}
      <a href={project.tiktok} target="_blank">
        <img class="link-icon" src="/icons/tiktik.png" alt="TikTok" />
      </a>
    {/if}
    {#if project.telegram}
      <a href={project.telegram} target="_blank">
        <img class="link-icon" src="/icons/telegram.png" alt="Telegram" />
      </a>
    {/if}
    {#if project.discord}
      <a href={project.discord} target="_blank">
        <img class="link-icon" src="/icons/discord.png" alt="Discord" />
      </a>
    {/if}
    {#if project.warpcast}
      <a href={project.discord} target="_blank">
        <img class="link-icon" src="/icons/warpcast.png" alt="Warpcast" />
      </a>
    {/if}
    {#if project.youtube}
      <a href={project.youtube} target="_blank">
        <img class="link-icon" src="/icons/youtube.png" alt="YouTube" />
      </a>
    {/if}
  </div>
{/if}

<div
  class="background subpage-bg"
  style={project?.background
    ? "background-image: none; background-color: rgba(0, 0, 0, 0.85);"
    : ""}
  style:top={-scroll / 25 + "vh"}
></div>

{#if project?.background}
  <div
    class="collab-bg"
    style:background-image="url({project.background})"
  ></div>
{/if}

<style>
  .collab-description {
    width: 90%;
    font-size: 1.5vw;
    line-height: 2.5vw;
    text-align: center;
    color: rgba(51, 226, 230, 0.75);
    text-shadow: 0 0.25vw 0.25vw #010020;
  }

  .collab-logo {
    width: 25vw;
  }

  .tiles-collection {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1vw;
    padding: 2vw;
    background-color: rgba(1, 0, 32, 0.75);
    box-shadow:
      inset 0 0 0.5vw rgba(51, 226, 230, 0.25),
      0 0 0.5vw #010020;
    overflow-y: hidden;
  }

  .tiles-collection::-webkit-scrollbar {
    height: 0.75vw;
  }

  .tiles-collection::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .tiles-collection::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to right,
      rgba(51, 226, 230, 0.15),
      rgba(51, 226, 230, 0.3),
      rgba(51, 226, 230, 0.15)
    );
    border-radius: 1vw;
    cursor: pointer;
  }

  .tiles-collection::-webkit-scrollbar-thumb:hover,
  .tiles-collection::-webkit-scrollbar-thumb:active {
    background: rgba(51, 226, 230, 0.5);
  }

  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    background-color: rgba(36, 65, 189, 0.75);
    color: rgba(255, 255, 255, 0.75);
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 1.5vw;
    box-shadow: 0 0 0.5vw #010020;
    cursor: pointer;
    text-decoration: none;
    flex: none;
    padding: 0;
  }

  .tile:hover,
  .tile:active {
    background-color: rgba(45, 90, 216, 0.9);
    color: rgba(51, 226, 230, 0.9);
    box-shadow: 0 0.5vw 0.5vw #010020;
    transform: scale(1.025) translateY(-0.5vw);
    text-decoration: none;
  }

  .tile-picture {
    object-fit: cover;
    width: 95%;
    height: 19vw;
    margin: 2.5%;
    margin-bottom: 0;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 1vw;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .tile-title {
    text-align: center;
    padding: 1vw;
    font-size: 2vw;
    line-height: 3vw;
    text-shadow: 0 0 1vw rgba(1, 0, 32, 0.4);
    cursor: pointer;
  }

  .collab-links {
    flex-flow: row;
    align-items: center;
    gap: 1.5vw;
    padding: 1.5vw;
    border-radius: 1.5vw;
    background-color: rgba(51, 226, 230, 0.1);
    box-shadow: 0 0 0.5vw #010020;
  }

  .link-icon {
    width: 4vw;
    height: 4vw;
    border-radius: 20%;
  }

  .link-icon:hover,
  .link-icon:active {
    transform: scale(1.1);
    filter: brightness(125%);
  }

  .collab-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -200;
  }

  @media only screen and (max-width: 600px) {
    .collab-description {
      font-size: inherit;
      line-height: 1.5em;
      padding: 1em;
      background-color: rgba(22, 30, 95, 0.5);
      -webkit-backdrop-filter: blur(2vw);
      backdrop-filter: blur(2vw);
      box-shadow:
        inset 0 0 0.5vw rgba(51, 226, 230, 0.5),
        0 0 0.5vw #010020;
      border-radius: 1em;
    }

    .collab-logo {
      width: 75vw;
    }

    .tiles-collection {
      border-radius: 0;
      border-left: none;
      border-right: none;
      gap: 1em;
      padding: 1em;
    }

    .tile {
      width: 40vw;
      border-radius: 1em;
    }

    .tile-picture {
      height: 38vw;
      border-radius: 0.75em;
    }

    .tile-title {
      font-size: 1em;
      line-height: 1.5em;
    }

    .collab-links {
      width: 100vw;
      gap: 1em;
      padding: 1em;
      border-radius: 0;
    }

    .collab-links a {
      padding: 0;
    }

    .link-icon {
      width: 2.5em;
      height: 2.5em;
    }
  }
</style>
