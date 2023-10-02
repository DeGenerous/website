<script>
  export let x1;
  export let y1;
  export let x2;
  export let y2;
  export let containerHeight;
  export let containerWidth;
  export let color;

  let svgColor;

  if (color) {
    svgColor = "purple";
  } else {
    svgColor = "grey";
  }
</script>

<svg class="svg-container" height={containerHeight} width={containerWidth}>
  <line {x1} {y1} {x2} {y2} stroke={svgColor} stroke-width="3" />
</svg>

<style>
  .svg-container {
    position: absolute;
  }
</style>
