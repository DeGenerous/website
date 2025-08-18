<script lang="ts">
</script>

<section class="flex fade-in">
  <h1>Community</h1>
  <p>Join a community defined by purpose, innovation, and real-world impact.</p>
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
