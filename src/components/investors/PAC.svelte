<script lang="ts">
  import typeWrite from "@utils/typewriter";
  import { onMount } from "svelte";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "$PAC"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>$PAC</h1>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    h1 {
      @include light-blue(1, text);
    }
  }

  :global(body.dark) {
    section h1 {
      @include cyan(1, text);
    }
  }
</style>
