<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Main Ecosystem Token"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Main Ecosystem Token</h1>
  <article class="container appear-bottom">
    <h3>(Coming Soon)</h3>
    A single utility-and-governance token will ultimately power everything across
    our ecosystem, and its value will be backed by the real-world usage of CoNexus.
    Details on economics and the launch schedule will be released soon.
    <strong>
      ⚠️ Be wary of scammers and fake tokens - ignore DMs and check official
      channels.
    </strong>
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  article {
    text-align: left;

    h3 {
      font-family: $font-sans;
    }

    strong {
      font-weight: normal;
      @include red(1, text);
    }
  }
</style>
