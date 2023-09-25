<script>
  import Box from "./Box.svelte";
  import Store from "../stores/Store";
  import Svg from "./Svg.svelte";
  import { onMount } from "svelte";

  let activeBox = 1;
  let nextBoxTime = 6000;
  let boxRadius = 35;
  // Restart interval that automatically start showing Boxes
  $: if (activeBox === 0) {
    clearInterval(boxInterval);
    boxInterval = setInterval(increaseBox, nextBoxTime);
  }
  // after clicking on box style of clicked box is changed and Popup showed
  const changeActiveBox = (e) => {
    activeBox = e.detail;
    clearInterval(boxInterval);
  };

  const decreaseBox = () => {
    if (activeBox <= 1) {
      activeBox = $Store.length;
      return;
    }
    activeBox -= 1;
  };

  const increaseBox = () => {
    if (activeBox >= $Store.length) {
      activeBox = 1;
      return;
    }
    activeBox += 1;
  };

  let boxInterval = setInterval(increaseBox, nextBoxTime);

  // Drawing SVG
  let containerWidth;
  let containerHeight;
  $: trackContainer = containerWidth;

  let points = [];
  let pairs = [];

  onMount(() => {
    const container = document.querySelector(".roadmap");

    // Container width and height in pixels
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
    window.addEventListener("resize", () => {
      containerWidth = container.offsetWidth;
      window.location.reload();
    });

    const svgLength = 5;

    for (let i = 0; i < $Store.length - 1; i++) {
      let x1 = $Store[i].left;
      let y1 = $Store[i].top;
      let x2 = $Store[i + 1].left;
      let y2 = $Store[i + 1].top;

      // Difference beetween points
      let dx = x2 - x1;
      dx = (parseFloat(dx) / 100) * containerWidth;

      let dy = y2 - y1;
      dy = (parseFloat(dy) / 100) * containerHeight;

      // Total length between points
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Max number of steps between points
      const numSteps = Math.floor(distance / svgLength);

      //Steps for x and y
      let stepX = dx / numSteps;
      let stepY = dy / numSteps;

      // Generating points beetween boxes
      for (let i = 1; i < numSteps; i++) {
        const newX =
          (parseFloat(x1) / 100) * containerWidth + i * stepX + boxRadius;
        const newY =
          (parseFloat(y1) / 100) * containerHeight + i * stepY + boxRadius;

        points.push({ x: newX, y: newY });
      }

      // Taking every third pair for drawing SVG
      for (let i = 0; i < points.length - 1; i++) {
        let firstPoint = points[i];
        let secondPoint = points[i + 1];
        if (i % 3 === 0) pairs.push({ firstPoint, secondPoint });
      }
    }
    console.log(pairs.length);
  });
</script>

<div
  class="roadmap"
  on:click|self={() => {
    activeBox = 0;
  }}
>
  {#key trackContainer}{/key}
  {#key trackContainer}
    {#if containerHeight}
      {#each pairs as pair}
        <Svg
          x1={pair.firstPoint.x}
          y1={pair.firstPoint.y}
          x2={pair.secondPoint.x}
          y2={pair.secondPoint.y}
        />
      {/each}
    {/if}
  {/key}

  <!-- <h1 class="title">Roadmap</h1> -->
  {#each $Store as elem (elem.title)}
    <Box
      title={elem.title}
      text={elem.text}
      top={elem.top}
      left={elem.left}
      number={elem.id}
      isActive={activeBox === elem.id}
      isDone={elem.isDone}
      on:changeActiveBox={changeActiveBox}
      on:decreaseBox={decreaseBox}
      on:increaseBox={increaseBox}
    />
  {/each}
</div>

<style>
  .roadmap {
    width: 100%;
    height: 100svh;
    font-family: "Poppins,sans-serif";
    /* position: fixed; */
    position: relative;
    background-color: #313735;
    background-image: url("../images/nexusBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .title {
    position: absolute;
    top: 0;
    left: 100px;
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
  .map-img {
    width: 100%;
    max-width: none;
    position: relative;
  }
</style>
