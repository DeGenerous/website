<script lang="ts">
  import { onMount } from "svelte";

  import roadmap from "@constants/roadmap";
  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Roadmap"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Roadmap</h1>

  {#each roadmap as { section, goals }}
    <ul class="flex">
      <h2>{section}</h2>
      {#each goals as { name, description }}
        <li class="container gap-8">
          <h4>{name}</h4>
          {description}
        </li>
      {/each}
    </ul>
  {/each}
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  li {
    width: 100%;
    font-family: $font-serif;
    @include gray-border;

    h4 {
      font-family: $font-sans;
    }
  }
</style>
