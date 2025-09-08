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
    <p>
      A single utility-and-governance token will ultimately power everything across our ecosystem, and
      its value will be backed by the real-world usage of CoNexus. Details on economics and the launch
      schedule will be released soon.
      You can read our <a
        href="https://medium.com/@uros_52593/text-to-story-a-manifesto-for-the-narrative-engine-age-6de9718e6df4"
        target="_blank"
        rel="noopener noreferrer"
      >
        manifesto
      </a> in the meantime.
    </p>
    <strong>
      ⚠️ Be wary of scammers and fake tokens - ignore DMs and check official channels.
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
