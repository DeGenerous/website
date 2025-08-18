<script lang="ts">
</script>

<section class="flex fade-in">
  <h1>Digital Tools. Real-World Change.</h1>
  <p>
    We don't just build products - we build impact engines. The DGRS ecosystem
    has helped raise millions of dollars for global causes, supported thousands
    of creators, and powered storytelling enjoyed by millions across the world.
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
