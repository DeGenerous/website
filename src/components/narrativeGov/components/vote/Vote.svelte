<script>
  import NarrativeGovStore from "../../stores/narrativeGovStore";
  let options = [
    "Interstellar Trade Regulations",
    "Galactic Defense Funding",
    "Exploration and Colonization Initiatives:",
    "Resource Allocation for Renewable Energy",
    "Cultural Exchange and Diplomacy Programs:",
  ];
  let selectedOption;
</script>

<div class="vote">
  <div class="select-component">
    <div class="options">
      {#each options as option (option)}
        <div
          on:click={() => {
            selectedOption = option;
          }}
          class:selected={selectedOption === option}
        >
          * {option}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .vote {
    background-size: contain;
    height: 34%;
    width: 67%;
    position: absolute;
    top: 65%;
    left: 5%;
    background-color: black;
    /* border: 1px solid white; */
  }
  .select-component {
    position: relative;
    width: 100%;
    height: 100%;
    left: 5%;
    top: 10%;
    text-align: left;
    font-size: 1.5rem;
    font-family: "Righteous", cursive;
  }

  .options {
    /* border: 1px solid #ccc; */
    padding: 10px;
  }

  .options > div {
    cursor: pointer;
    padding: 5px;
    transition: transform 0.4s;
  }
  .options > div:hover {
    transform: scale3d(1.01, 1.06, 1);
  }
  .selected {
    font-weight: bold;
    color: blueviolet;
  }
</style>
