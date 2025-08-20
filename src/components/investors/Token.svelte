<script lang="ts">
  import typeWrite from "@utils/typewriter";
  import { onMount } from "svelte";

  let tagline = $state<HTMLHeadingElement>();
  let subtitle = $state<HTMLHeadingElement>();

  onMount(() => {
    subtitle!.innerText = "";
    typeWrite(tagline!, "Main Ecosystem Token").then(() =>
      typeWrite(subtitle!, "(Coming Soon)")
    );
  });
</script>

<section class="flex">
  <h1 bind:this={tagline}>Main Ecosystem Token</h1>
  <h3 bind:this={subtitle}>(Coming Soon)</h3>
  <article class="pad fade-in">
    A single utility-and-governance token will ultimately power everything
    across our ecosystem, and its value will be backed by the real-world usage
    of CoNexus. Details on economics and the launch schedule will be released
    soon. Be wary of scammers and fake tokens - ignore DMs and check official
    channels.
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    h1 {
      @include light-blue(1, text);
    }

    article {
      text-align: left;
    }
  }

  :global(body.dark) {
    section {
      h1 {
        @include cyan(1, text);
      }
    }
  }
</style>
