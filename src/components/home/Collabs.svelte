<script lang="ts">
  import collabs from "@constants/collabs";
</script>

<section class="flex pc-narrow">
  <h5 class="auto-width">
    We’re working with industry pioneers, from Web3 leaders to award-winning
    filmmakers.
  </h5>

  <ul class="container flex-row flex-wrap">
    {#each collabs as { href, src, alt }}
      <li class="transition">
        <a class="nohover-link" {href} target="_blank" rel="noopener noreferrer">
          <img class="transition" {src} {alt} />
        </a>
      </li>
    {/each}
  </ul>
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
