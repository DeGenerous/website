<script lang="ts">
  import collabs from "@constants/collabs";
</script>

<section class="flex pc-narrow">
  <p>
    We’re working with industry pioneers, from Web3 leaders to award-winning
    filmmakers.
  </p>

  <ul class="container flex-row flex-wrap">
    {#each collabs as { href, src, alt }}
      <li class="transition">
        <a class="nohover-link" {href} target="_blank" rel="noopener">
          <img class="transition" {src} {alt} />
        </a>
      </li>
    {/each}
  </ul>

  <p>
    Our mission is to unleash human creativity, democratize IP ownership, and
    channel Web3 value toward real‑world good.
  </p>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    ul {
      li {
        width: calc(50% - 0.5rem);
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        @include gray(0.1);
        @include gray-border;

        @include respond-up(tablet) {
          width: calc(33.33% - 1rem);
        }

        @include respond-up(small-desktop) {
          width: calc(25% - 0.75rem);
        }

        &:hover,
        &:active,
        &:focus {
          @include gray(0.2);
          @include scale;
        }
      }

      @include respond-up(full-hd) {
        width: 60%;
      }
    }
  }
</style>
