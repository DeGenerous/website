<script>
  import Title from "./Title.svelte";
  import Collabs from "./Collabs.svelte";
  import Potentials from "./Potentials.svelte";
  import GovernanceHub from "./GovernanceHub.svelte";
  import Sagaverse from "./Sagaverse.svelte";
  import Vision from "./Vision.svelte";
  import Philanthropy from "./Philanthropy.svelte";
  import Team from "./Team.svelte";

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

<Sagaverse />

<hr />

<Vision />

<hr />

<Philanthropy />

<hr />

<Team />

<div class="background" style:top={-scroll / 25 + "vh"}></div>
