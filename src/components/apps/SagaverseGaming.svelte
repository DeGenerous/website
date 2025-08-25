<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () =>
    setTimeout(() => typeWrite(tagline!, "Sagaverse Gaming"), 1500);

  onMount(startTyping);
</script>

<section class="flex full-height">
  <h1 bind:this={tagline}>Sagaverse Gaming</h1>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
