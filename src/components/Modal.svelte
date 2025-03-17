<script lang="ts">
  import { showModal, member } from "@stores/modal.ts";

  let dialog: HTMLDialogElement;

  $: if (dialog && $showModal) {
    dialog.showModal();
  } else if (!$showModal) {
    closeDialog();
  }

  const closeDialog = () => {
    $showModal = false;
    dialog?.close();
  };

  let closeSvgFocus: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class="blur"
  bind:this={dialog}
  on:close={closeDialog}
  on:click|self={closeDialog}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    {#if $member}
      <section class="flex-box">
        <img class="picture" src="/team/{$member.picture}.jpg" alt="Pano" />

        <article class="flex-box">
          <span class="flex-box">
            <h2>
              {$member.name}
              {#if $member.secondName}
                {$member.secondName}
              {/if}
            </h2>
            {#if $member.twitter}
              <a href={$member.twitter}>
                <img src="/icons/twitter.png" alt="Twitter" />
              </a>
            {/if}
            {#if $member.email}
              <a href="mailto:{$member.email}">
                <img src="/icons/email.png" alt="Email" />
              </a>
            {/if}
          </span>

          {#each $member.description as description}
            <h3>{description}</h3>
          {/each}
        </article>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-100 -100 200 200"
        class="close-svg"
        stroke="rgba(255, 60, 64, 0.85)"
        stroke-width="30"
        stroke-linecap="round"
        on:click={() => ($showModal = false)}
        role="button"
        tabindex="0"
      >
        <path
          d="
              M -65 -65
              L 65 65
              M -65 65
              L 65 -65
            "
          fill="none"
        />
      </svg>
    {/if}
  </div>
</dialog>

<style>
  dialog {
    max-width: 80vw;
    border: none;
    color: inherit;
    background-color: rgba(1, 0, 32, 0.75);
    box-shadow: inset 0 0 0.5vw rgba(51, 226, 230, 0.5);
    border-radius: 1.5vw;
  }

  dialog > div {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    padding: 2vw;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  svg {
    position: absolute;
    top: 2vw;
    right: 2vw;
    width: 3vw;
    height: 3vw;
  }

  section {
    flex-direction: row;
    gap: 2vw;
  }

  article {
    gap: 1vw;
  }

  span {
    flex-direction: row;
    gap: 1vw;
  }

  h2 {
    color: rgba(51, 226, 230, 0.85);
  }

  h3 {
    text-align: left;
    color: #dedede;
  }

  .picture {
    width: 25vw;
    border-radius: 1vw;
    box-shadow: 0 0 0.5vw rgba(51, 226, 230, 0.5);
  }

  a {
    width: 3vw;
    height: 3vw;
  }

  a:hover,
  a:active {
    transform: scale(1.1);
    filter: brightness(125%);
  }

  a img {
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }

  @media only screen and (max-width: 600px) {
    dialog {
      width: 95vw;
      min-width: 95vw;
      max-width: none;
      border-radius: 1em;
    }

    dialog > div {
      padding: 1em;
    }

    section {
      flex-direction: column;
      gap: 1em;
    }

    svg {
      top: 0;
      right: 0;
      width: 2em;
      height: 2em;
      background-color: rgba(1, 0, 32, 0.75);
      padding: 1em;
      border-bottom-left-radius: 1em;
      border-top-right-radius: 1em;
      -webkit-backdrop-filter: blur(1rem);
      backdrop-filter: blur(1rem);
    }

    .picture {
      width: 100%;
      border-radius: 0.5em;
    }

    span {
      gap: 1em;
    }

    article {
      padding: 1em;
      gap: 1em;
    }

    a {
      width: 2em;
      height: 2em;
    }
  }

  @keyframes zoom {
    from {
      transform: scale(1.5);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
