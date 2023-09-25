<script>
  export let x1;
  export let y1;
  export let x2;
  export let y2;
</script>

<svg class="svg-container" height="1000" width="1000">
  <line {x1} {y1} {x2} {y2} stroke="green" stroke-width="3" />
</svg>

<style>
  .svg-container {
    position: absolute;
    /* top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
  }
</style>
