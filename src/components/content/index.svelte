<script>
  import Title from "./Title.svelte";
  import Collabs from "./Collabs.svelte";
  import Potentials from "./Potentials.svelte";
  import GovernanceHub from "./GovernanceHub.svelte";
  import Vision from "./Vision.svelte";

  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Title />

<hr />

<Collabs />

<hr />

<Potentials />

<hr />

<GovernanceHub />

<hr />

<Vision />

<div class="background" style:top={-scroll / 25 + "vh"}></div>
