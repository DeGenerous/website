<script>
  import {
    NarrativeGovStore,
  } from "../../stores/narrativeGovStore";
  import NarrativeGov from "../narrativeGov.svelte";
  import Option from './Option.svelte'

  let options = [
    "Interstellar Trade Regulations",
    "Galactic Defense Funding",
    "Exploration and Colonization Initiatives:",
    "Resource Allocation for Renewable Energy",
    "Cultural Exchange and Diplomacy Programs",
  ];

  let selectedOption;

  const optionSelected = (e) => {
    selectedOption = e.detail;
  }
  
</script>

<div class="voteContainer">
    <div class="options">
      {#each options as option (option)}
        <div
          on:click={() => {
            selectedOption = option;
             $NarrativeGovStore.votedOption = option;
          }}
          class:selected={selectedOption === option}
        >
          <Option on:optionSelected={optionSelected} optionText = {option} checked = {selectedOption === option}/>
        </div>
      {/each}
    </div>
</div>

<style>
  .voteContainer {
    background-size: contain;
    position: absolute;
    height: 34%;
    width: 67%;
    top: 64%;
    left: 4%;
    background-image: url('/images/narrativeGov/conexus-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Righteous", cursive;
    font-size: 1.2rem;
    /* border: 1px solid white; */
  }

  .options {
    /* border: 1px solid #ccc; */
    position: absolute;
    max-width: 100%;
    height: 100%;
    margin-top: 70px;
  }

  .options > div {
    cursor: pointer;
    transition: transform 0.4s;
    padding-left: 30px;
    align-items: center;
  }
  .options > div:hover {
    transform: scale3d(1.01, 1.06, 1);
  }
  .selected {
    font-weight: bold;
    color: blueviolet;
  }

  @media screen and (max-width: 450px){
    .voteContainer{
      font-size: 0.5rem;
      height:32%;
      top: 66%;
      left: 4.5%;

    }
    .options{
      margin-top: 5%;
    }
  }
</style>
