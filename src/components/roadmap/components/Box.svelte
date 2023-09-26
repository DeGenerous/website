<script>
  import Popup from "./Popup.svelte";
  import { createEventDispatcher } from "svelte";
  export let title;
  export let text;
  export let number;
  export let left;
  export let top;
  export let isActive = false;
  export let isDone = false;
  const dispatch = createEventDispatcher();
</script>

<div class={`map-dot-mobile`} style="top: {top}%; left: {left}%;">
  <div
    class="box"
    on:click|preventDefault={() => {
      dispatch("changeActiveBox", number);
    }}
  >
    <div class="box-inner" class:active={isActive} class:done={isDone}>
      <div class="map-number">{number}</div>
    </div>
  </div>
</div>

<p class="title" style="top: {top + 7}%; left: {left}%;">{title}</p>

<Popup
  {text}
  {left}
  {top}
  {number}
  active={isActive}
  on:decreaseBox={() => {
    dispatch("decreaseBox");
  }}
  on:increaseBox={() => {
    dispatch("increaseBox");
  }}
/>

<style>
  .map-dot-mobile {
    margin-top: 0;
    margin-left: 0;
    font-size: 3rem;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: auto;
  }

  .box {
    width: 70px;
    height: 70px;
    cursor: pointer;
    transform-style: preserve-3d;
    background-color: #9d50eb;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 1em;
    transition: transform 0.4s;
    display: flex;
  }
  .box:hover {
    transform: scale3d(1.12, 1.06, 1);
  }
  .box-inner {
    width: 92%;
    height: 92%;
    background-color: #ffffff;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .box-inner.done {
    background-color: #9e52eb;
  }
  .map-number {
    font-weight: 400;
    color: black;
  }
  .box-inner.active {
    background-color: #632c9a;
    color: white;
  }
  .title {
    color: white;
    position: absolute;
    font-weight: bold;
    background-color: #9d50eb;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    margin-top: 20px;
  }
  @media screen and (min-width: 280px) {
    .box {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
    p {
      display: none;
    }
  }

  @media screen and (min-width: 375px) {
    .box {
      width: 45px;
      height: 45px;
    }
    p {
      display: none;
    }
  }

  @media screen and (min-width: 500px) {
    .box {
      width: 70px;
      height: 70px;
      font-size: 2rem;
    }
    p {
      display: block;
    }
  }
</style>
