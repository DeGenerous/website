<script>
  import Title from "./Title.svelte";
  import Collabs from "./Collabs.svelte";
  import Potentials from "./Potentials.svelte";
  import Vision from "./Vision.svelte";

  let scroll;

  $: console.log(scroll);
</script>

<svelte:window bind:scrollY={scroll} />

<Title />

<Collabs />

<Potentials />

<Vision />
