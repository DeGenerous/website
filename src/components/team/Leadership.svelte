<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "Leadership"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Leadership</h1>

  <article aria-labelledby="leader-pano">
    <h3 id="leader-pano">Daniel “Pano” Elkins</h3>
    <p><em>Co-Founder</em></p>
    <p>
      Lions Clubs International board appointee, book publisher, and veteran
      game designer. Led <cite>Dragon&nbsp;Age&nbsp;Dark&nbsp;Times</cite> and
      <cite
        >Star&nbsp;Wars&nbsp;Rise&nbsp;of&nbsp;the&nbsp;Silent&nbsp;Council</cite
      >, attracting millions of players and inspiring thriving mod ecosystems.
    </p>
  </article>

  <article aria-labelledby="leader-maxi">
    <h3 id="leader-maxi">Uroš “Maxi” Trbović</h3>
    <p><em>Co-Founder</em></p>
    <p>
      Growth strategist who built a media platform with more than one million
      users and ran social channels topping 900k followers. Combines data-driven
      experimentation with sharp storytelling instincts to scale creator
      economies from zero to breakout.
    </p>
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
