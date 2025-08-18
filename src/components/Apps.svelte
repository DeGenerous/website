<script lang="ts">
</script>

<section class="flex fade-in">
  <h1>Apps</h1>
  <p>
    Explore our ecosystem of innovative applications that power the future of
    interactive storytelling and digital ownership.
  </p>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    height: 100vh;

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
