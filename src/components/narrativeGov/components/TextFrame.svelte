<script>
  import jsonData from "../../../../public/data/narrativegov/randomData.json";

  export let play;
</script>

{#if play}
  <div class="textFrame">
    <h2>Galactic Governance</h2>

    <h4>Name: {jsonData.galacticGovernment.name}</h4>

    <h4>Location: {jsonData.galacticGovernment.location}</h4>

    <h4>Leader: {jsonData.galacticGovernment.leader}</h4>

    <h4>Description: {jsonData.galacticGovernment.description}</h4>

    <h2>Galactic News</h2>
    {#each jsonData.galacticNews as data}
      <h4>* {data.headline}</h4>
      <p>{data.content}</p>
    {/each}
  </div>
{/if}

<style>
  .textFrame {
    text-align: left;
    width: 90%;
    margin: 0;
    padding-top: 30px;
    padding-left: 30px;
    position: absolute;
    top: 8%;
    left: 5%;
    /* border: 1px solid white; */
  }
  h2 {
    font-style: italic;
    padding-bottom: 30px;
    padding-top: 30px;
  }
</style>
