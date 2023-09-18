<script>
  import Roadmap from "./components/Roadmap.svelte";
  export let name;
</script>

<main class="roadmap">
  <Roadmap client:load />
</main>

<style>
  .roadmap {
    background-color: #0e080e;
    display: block;
    color: #fff;
    font-family: Kanit, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin-top: 0;
  }
</style>
