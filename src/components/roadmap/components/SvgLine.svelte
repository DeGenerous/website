<script>
  import Svg from "./Svg.svelte";
  import Store from "../stores/Store";
  import { onMount } from "svelte";
  export let containerWidth;
  export let containerHeight;

  export let x1;
  export let x2;
  export let y1;
  export let y2;

  let points = [];
  let pairs = [];
  onMount(() => {
    const svgLength = 10;

    // Izračunaj razliku u x i y koordinatama
    const dx = x2 - x1;
    const dy = y2 - y1;

    // Izračunaj ukupnu dužinu segmenta između tačaka
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Izračunaj broj koraka potreban za zadati razmak
    const numSteps = Math.floor(distance / svgLength);

    // Izračunaj inkrement za x i y koordinate
    let stepX = dx / numSteps;
    let stepY = dy / numSteps;

    //   // Dodaj početnu tačku
    //   points.push({ x: x1, y: y1 });

    // Generiši sve tačke između početne i krajnje tačke u pikselima
    for (let i = 1; i < numSteps; i++) {
      const newX = (parseFloat(x1) / 100) * containerWidth + i * stepX;
      const newY = (parseFloat(y1) / 100) * containerHeight + i * stepY;
      points.push({ x: newX, y: newY });
    }

    //   // Dodata krajnja tačka
    //   points.push({ x: x2, y: y2 });

    for (let i = 0; i < points.length - 1; i++) {
      let firstPoint = points[i];
      let secondPoint = points[i + 1];
      pairs.push({ firstPoint, secondPoint });
    }
  });
</script>

{#each pairs as pair}
  <Svg
    x1={pair.firstPoint.x}
    y1={pair.firstPoint.y}
    x2={pair.secondPoint.x}
    y2={pair.secondPoint.y}
  />
{/each}
