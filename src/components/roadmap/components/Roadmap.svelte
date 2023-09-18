<script>
  import Box from "./Box.svelte";
  import Store from "../stores/Store";

  let boxData = [];

  Store.subscribe((data) => (boxData = data));

  let activeBox = 0;
  const changeActiveBox = (e) => {
    activeBox = e.detail;
  };
  const decreaseBox = () => {
    if (activeBox <= 1) {
      activeBox = boxData.length;
      return;
    }
    activeBox -= 1;
  };
  const increaseBox = () => {
    if (activeBox >= boxData.length) {
      activeBox = 1;
      return;
    }
    activeBox += 1;
  };
</script>

<div
  class="roadmap"
  on:click|self={() => {
    activeBox = 0;
  }}
>
  <h1 class="title">Roadmap</h1>
  {#each boxData as elem (elem.title)}
    <Box
      title={elem.title}
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
    height: 100%;
    position: fixed;
    background-color: rgb(49, 55, 53);
    background-image: url("/images/background.jpg");
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
