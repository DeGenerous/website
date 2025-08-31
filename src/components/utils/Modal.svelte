<!-- LEGACY SVELTE 3/4 SYNTAX -->
<script lang="ts">
  import {
    modal,
    showModal,
    resetModal,
    portfolio,
  } from "@stores/modal.svelte";

  let dialog: HTMLDialogElement;

  $: if (dialog && $showModal) {
    dialog.classList.remove("dialog-fade-out");
    dialog.showModal();
  } else if (dialog) {
    closeDialog();
  }

  const closeDialog = () => {
    dialog.classList.add("dialog-fade-out"); // animation before close
    $showModal = false;
    resetModal();
    setTimeout(() => dialog?.close(), 300);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y_no_static_element_interactions -->
<dialog
  class="blur"
  bind:this={dialog}
  on:close={closeDialog}
  on:click|self={closeDialog}
  aria-label="Modal"
>
  <div class="flex" on:click|stopPropagation>
    <!-- DYNAMIC CONTENT PROVIDED BY openModal() FUNCTION -->
    {@html modal.content}

    {#if $portfolio}
      <h3>Link Portfolio</h3>
      <div class="flex gap-8">
        <label for="portfolio-link" class="standard-label white-txt">
          Portfolio URL (required)
        </label>
        <p class="transparent-white-txt">
          Personal site, GitHub, Behance, Dribbble, Notion, or Google Drive
        </p>
        <input
          id="portfolio-link"
          class="standard-input"
          type="url"
          placeholder="https://yourportfolio.com"
        />
      </div>
      <div class="flex gap-8">
        <label for="portfolio-context" class="standard-label white-txt">
          Additional context (optional)
        </label>
        <textarea
          id="portfolio-context"
          placeholder="What should we look at first? Add passwords, timecodes, or quick notes. (Max 500 characters)"
          maxlength="500"
        ></textarea>
      </div>
    {/if}

    <span class="flex">
      <!-- DEFAULT CLOSE BUTTON ON EVERY MODAL -->
      <button class="red-btn" on:click={() => ($showModal = false)}>
        Close
      </button>

      <!-- SECOND OPTIONAL BUTTON IF NEEDED -->
      {#if modal.button}
        <button class={modal.buttonClass} on:click={modal.buttonFunc}>
          {modal.button}
        </button>
      {/if}
    </span>
  </div>
</dialog>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  dialog {
    width: 90%;

    & > div {
      padding: 1.5rem;

      div {
        width: 100%;

        input,
        textarea {
          width: 100%;
        }
      }

      span {
        width: 100%;
        flex-direction: column-reverse;

        button {
          width: 100%;
          min-width: 10rem;
        }
      }
    }

    @include respond-up(tablet) {
      width: clamp(250px, 75%, 60rem);

      & > div {
        span {
          flex-flow: row wrap;
          gap: 1.5rem;

          button {
            width: auto;
          }
        }
      }
    }
  }
</style>
