<script>
  import Title from "./Title.svelte";
  import Conexus from "./Conexus.svelte";
  import Collabs from "./Collabs.svelte";
  import Potentials from "./Potentials.svelte";
  import GovernanceHub from "./GovernanceHub.svelte";
  import Loredex from "./Loredex.svelte";
  import Sagaverse from "./Sagaverse.svelte";
  import Vision from "./Vision.svelte";
  import Philanthropy from "./Philanthropy.svelte";
  import Team from "./Team.svelte";
  import Twitter from "./Twitter.svelte";

  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Title />

<hr />

<Conexus />

<hr />

<Collabs />

<hr />

<Potentials />

<hr />

<GovernanceHub />

<hr />

<Loredex />

<hr />

<Sagaverse />

<hr />

<Vision />

<hr />

<Philanthropy />

<hr />

<Team />

<hr />

<Twitter />

<div class="background" style:top={-scroll / 25 + "vh"}></div>
