<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  import Intro from "@components/community/Intro.svelte";
  import Join from "@components/community/Join.svelte";
  import Bounty from "@components/community/Bounty.svelte";
  import Ambassadors from "@components/community/Ambassadors.svelte";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () =>
    setTimeout(() => typeWrite(tagline!, "Community"), 1500);

  onMount(startTyping);
</script>

<section class="flex full-height">
  <h1 bind:this={tagline}>Community</h1>
  <p>Join a community defined by purpose, innovation, and real-world impact.</p>
</section>

<Intro />

<Join />

<Bounty />

<Ambassadors />

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
