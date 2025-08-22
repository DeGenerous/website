<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () =>
    setTimeout(() => typeWrite(tagline!, "Brand Guidelines"), 1500);

  onMount(startTyping);
</script>

<section class="flex full-height">
  <h1 bind:this={tagline}>Brand Guidelines</h1>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
