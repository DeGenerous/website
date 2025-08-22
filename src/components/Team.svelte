<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  import About from "@components/team/About.svelte";
  import Leadership from "@components/team/Leadership.svelte";
  import Core from "@components/team/Core.svelte";
  import Careers from "@components/team/Careers.svelte";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () => setTimeout(() => typeWrite(tagline!, "Team"), 1500);

  onMount(startTyping);
</script>

<section class="flex full-height">
  <h1 bind:this={tagline}>Team</h1>
</section>

<About />

<Leadership />

<Core />

<Careers />

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
