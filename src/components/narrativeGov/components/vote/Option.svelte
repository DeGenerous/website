<script>
  import { createEventDispatcher } from "svelte";
  export let optionText;
  export let checked = false;

  const dispatch = createEventDispatcher();
</script>

<div class="option" on:click={() => dispatch("optionSelected", optionText)}>
  {#if checked}
    <img src="/icons/optionSelected.svg" class="filter-white" alt="" />
  {:else}
    <img src="/icons/option.svg" class="filter-white" alt="" />
  {/if}

  <p>{optionText}</p>
</div>

<style>
  .option {
    /* border: 1px solid white; */
    display: flex;
    align-items: top; /* Align the items vertically in the center */
    font-family: "Righteous", cursive;
  }
  .option img {
    margin-right: 5px;
    position: relative;
    width: 3%;
    height: 3%;
    color: white;
  }
  .option > p {
    padding-top: 0%;
    padding-bottom: 0;
  }
  .option:hover {
    background: linear-gradient(
      to right,
      transparent 1.4rem,
      hsl(254, 33%, 30%) 1rem,
      transparent
    );
  }

  .filter-white {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(131deg)
      brightness(103%) contrast(102%);
  }

  @media screen and (max-width: 450px) {
    .option {
      line-height: 0.5;
    }
    .option:hover {
      pointer-events: none;
    }
  }
</style>
