<script>
  import { createEventDispatcher } from "svelte";

  export let text;
  export let top;
  export let left;
  export let number;
  export let active;

  const dispatch = createEventDispatcher();
</script>

<div
  class="popup-container"
  class:active
  style="top: {top + 10 >= 80 ? top - 12 : top + 10}%; left: {left}%;"
>
  <p>{number}. {text}</p>
  <div class="roadmap-navigation">
    <div
      class="roadmap-nav-button"
      on:click={() => {
        dispatch("decreaseBox");
      }}
    >
      <img
        src="https://assets.website-files.com/63fb7767a4a9907b1cf84647/63fb7767a4a9901459f846b4_arrow_left.svg"
        loading="lazy"
        alt="arrow left
    "
        class="arrow-left"
      />
    </div>
    <div
      class="roadmap-nav-button"
      on:click={() => {
        dispatch("increaseBox");
      }}
    >
      <img
        src="https://assets.website-files.com/63fb7767a4a9907b1cf84647/63fb7767a4a9900a39f846b3_arrow_right.svg"
        loading="lazy"
        alt="arrow right"
        class="arrow-right"
      />
    </div>
  </div>
</div>

<style>
  .popup-container {
    position: absolute;
    background-color: #297268;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 1.5rem;
    z-index: 1;
    visibility: hidden;
    opacity: 0; /* Start with opacity set to 0 */
    transform: scale(0.8); /* Start with a smaller scale */
    transform-origin: center center;
    transition: opacity 0.3s, transform 0.3s; /* Add transitions */
  }
  .popup-container.active {
    opacity: 1; /* Set opacity to 1 to make it appear */
    transform: scale(1); /* Scale it to its original size */
    visibility: visible;
  }
  .roadmap-navigation {
    grid-column-gap: 0.5rem;
    align-items: center;
    margin-top: 0.5rem;
    display: flex;
    box-sizing: border-box;
    text-align: left;
  }
  .roadmap-nav-button {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transition: background-color 0.4s;
    display: flex;
  }
  .roadmap-nav-button:hover {
    background-color: #63cfc0;
  }
</style>
