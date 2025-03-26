<script lang="ts">
  import { onMount } from "svelte";

  import Title from "@components/content/Title.svelte";
  import Conexus from "@components/content/Conexus.svelte";
  import Collabs from "@components/content/Collabs.svelte";
  import Potentials from "@components/content/Potentials.svelte";
  import GovernanceHub from "@components/content/GovernanceHub.svelte";
  import Loredex from "@components/content/Loredex.svelte";
  import Sagaverse from "@components/content/Sagaverse.svelte";
  import Vision from "@components/content/Vision.svelte";
  import Philanthropy from "@components/content/Philanthropy.svelte";
  import Team from "@components/content/Team.svelte";
  import Twitter from "@components/content/Twitter.svelte";

  import observeElement from "@utils/observer";

  let scroll: number;

  onMount(() => {
    const headings = document.querySelectorAll("h1");
    Array.from(headings).map((h1) => observeElement(h1, "highlighted-header"));

    const blurredPictures = document.querySelectorAll(".blurred-image");
    Array.from(blurredPictures).map((img) =>
      observeElement(img, "visible-image")
    );

    const buttons = document.querySelectorAll(".scaled-down");
    Array.from(buttons).map((button) => observeElement(button, "no-transform"));

    const animations = document.querySelectorAll(".paused-animation");
    Array.from(animations).map((element) =>
      observeElement(element, "running-animation")
    );
  });
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

<style>
</style>
