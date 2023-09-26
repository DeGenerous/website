<script>
  export let x1;
  export let y1;
  export let x2;
  export let y2;
  export let containerHeight;
  export let containerWidth;
</script>

<svg class="svg-container" height={containerHeight} width={containerWidth}>
  <line {x1} {y1} {x2} {y2} stroke="grey" stroke-width="3" />
</svg>

<style>
  .svg-container {
    position: absolute;
  }
</style>
