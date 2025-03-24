<script>
  import team from "@constants/team";
  import { showModal, member } from "@stores/modal";
</script>

<h1>Our Core Team</h1>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section class="blur">
  {#each team as { name, secondName, picture, position, twitter, email, description }}
    <div
      on:click={() => {
        $showModal = true;
        $member = {
          name,
          secondName,
          picture,
          position,
          twitter,
          email,
          description,
        };
      }}
      role="button"
      tabindex="0"
    >
      <img src="/team/{picture}.jpg" alt="Pano" />
      <p>{name}</p>
      {#if secondName}
        <p>{secondName}</p>
      {/if}
      <h3>{position}</h3>
    </div>
  {/each}
</section>

<h3>
  We are always on the lookout for talented people, especially AI engineers,
  backend developers, and ambassadors.
</h3>

<style>
  * {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  section {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    gap: 1vw;
    padding: 2vw;
    background-image: radial-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(51, 226, 230, 0.1)
    );
    box-shadow:
      inset 0 0 0.5vw rgba(51, 226, 230, 0.25),
      0 0 0.5vw #010020;
    overflow-y: hidden;
  }

  section::-webkit-scrollbar {
    height: 0.75vw;
  }

  section::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }

  section::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to right,
      rgba(51, 226, 230, 0.15),
      rgba(51, 226, 230, 0.3),
      rgba(51, 226, 230, 0.15)
    );
    border-radius: 1vw;
    cursor: pointer;
  }

  section::-webkit-scrollbar-thumb:hover,
  section::-webkit-scrollbar-thumb:active {
    background: rgba(51, 226, 230, 0.5);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    width: 20vw;
    height: 31vw;
    background-color: rgba(36, 65, 189, 0.75);
    color: rgba(255, 255, 255, 0.6);
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 1.5vw;
    box-shadow: 0 0 0.5vw #010020;
    cursor: pointer;
    text-decoration: none;
    flex: none;
  }

  div:hover,
  div:active {
    background-color: rgba(45, 90, 216, 0.9);
    color: rgba(51, 226, 230, 0.9);
    box-shadow: 0 0.5vw 0.5vw #010020;
    transform: scale(1.025) translateY(-0.5vw);
    text-decoration: none;
  }

  img {
    object-fit: cover;
    width: 95%;
    height: 22vw;
    margin: 2.5%;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 1vw;
    flex: 1;
    background-color: rgba(51, 226, 230, 0.1);
    cursor: pointer;
    flex: none;
  }

  p {
    text-align: center;
    font-size: 1.75vw;
    line-height: 2.5vw;
    height: 2.5vw;
    text-shadow: 0 0 1vw rgba(1, 0, 32, 0.4);
    cursor: pointer;
  }

  div h3 {
    color: inherit;
    font-size: 1.25vw;
    line-height: 2.5vw;
  }

  @media only screen and (max-width: 600px) {
    section {
      border-radius: 0;
      border-left: none;
      border-right: none;
      gap: 1em;
      padding: 1em;
    }

    div {
      width: 48vw;
      height: auto;
      border-radius: 1em;
    }

    img {
      height: 52vw;
      border-radius: 0.75em;
      flex: auto;
    }

    p,
    div h3 {
      font-size: 1.1em;
      line-height: 2em;
      height: auto;
    }

    div h3 {
      font-size: 0.9em;
    }
  }
</style>
