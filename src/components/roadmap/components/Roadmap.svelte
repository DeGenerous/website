<script>
  import Box from "./Box.svelte";
  import Store from "../stores/Store";
  import Svg from "./Svg.svelte";
  import { onMount } from "svelte";

  let screenWidth;

  let activeBox = 1;
  let nextBoxTime = 6000;
  let boxRadius;

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
    clearInterval(boxInterval);
  };

  const increaseBox = () => {
    if (activeBox >= $Store.length) {
      activeBox = 1;
      return;
    }
    activeBox += 1;
    clearInterval(boxInterval);
  };

  let boxInterval = setInterval(increaseBox, nextBoxTime);

  // Drawing SVG
  let containerWidth;
  let containerHeight;

  let points = [];
  let pairs = [];

  let pairsDone = 0;

  onMount(() => {
    // Defining boxRadius for SVG depending on windows width
    screenWidth = window.innerWidth;
    if (screenWidth < 299) {
      boxRadius = 11;
    } else if (screenWidth < 389) {
      boxRadius = 15;
    } else if (screenWidth < 500) {
      boxRadius = 22.5;
    } else if (screenWidth < 1024) {
      boxRadius = 30;
    } else {
      boxRadius = 35;
    }

    const container = document.querySelector(".roadmap");

    // Container width and height in pixels
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;

    window.addEventListener("resize", () => {
      window.location.reload();
    });

    const svgLength = 5;

    for (let i = 0; i < $Store.length - 1; i++) {
      let x1 = $Store[i].left;
      let y1 = $Store[i].top;
      let x2 = $Store[i + 1].left;
      let y2 = $Store[i + 1].top;

      // If next box is done svg will be colored
      let nextBoxDone = $Store[i + 1].isDone ? true : false;

      // Difference between points in pixels
      let dx = x2 - x1;
      dx = (parseFloat(dx) / 100) * containerWidth;

      let dy = y2 - y1;
      dy = (parseFloat(dy) / 100) * containerHeight;

      // Total length between points in pixels
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Max number of steps between points
      const numSteps = Math.floor(distance / svgLength);

      // Steps for x and y
      let stepX = dx / numSteps;
      let stepY = dy / numSteps;

      // Generating points between boxes
      for (let i = 1; i < numSteps; i++) {
        const newX =
          (parseFloat(x1) / 100) * containerWidth + i * stepX + boxRadius;
        const newY =
          (parseFloat(y1) / 100) * containerHeight + i * stepY + boxRadius;

        points.push({ x: newX, y: newY });
      }

      // Taking every third pair for drawing SVG
      let id = 0;
      for (let i = 0; i < points.length - 1; i++) {
        let firstPoint = points[i];
        let secondPoint = points[i + 1];

        if (i % 3 === 0) {
          pairs.push({ id, firstPoint, secondPoint, nextBoxDone });
          id++;
        }
      }
    }
  });
</script>

<div
  class="roadmap"
  on:click|self={() => {
    console.log("Roadmap clicked");
    activeBox = 0;
  }}
>
  <!-- Drawing after container is mounted -->
  {#if containerHeight}
    {#each pairs as pair}
      <Svg
        x1={pair.firstPoint.x}
        y1={pair.firstPoint.y}
        x2={pair.secondPoint.x}
        y2={pair.secondPoint.y}
        {containerWidth}
        {containerHeight}
        color={pair.nextBoxDone}
      />
    {/each}
  {/if}

  <!-- <h1 class="title">Roadmap</h1> -->
  {#if boxRadius}
    {#each $Store as elem (elem.title)}
      <Box
        title={elem.title}
        text={elem.text}
        top={elem.top}
        left={elem.left}
        number={elem.id}
        isActive={activeBox === elem.id}
        isDone={elem.isDone}
        boxRadius={(boxRadius / containerHeight) * 100}
        on:changeActiveBox={changeActiveBox}
        on:decreaseBox={decreaseBox}
        on:increaseBox={increaseBox}
      />
    {/each}
  {/if}
</div>

<style>
  .roadmap {
    width: 100%;
    margin: 0 auto;
    height: 100vh;
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
