<script lang="ts">
  let {
    onclick = () => {},
    position = "bottom",
  }: {
    onclick: () => void;
    position?: "top" | "bottom";
  } = $props();
  let svgFocus = $state<boolean>(false);
</script>

<button
  class="flex void-btn {position} floating"
  onpointerover={() => (svgFocus = true)}
  onpointerout={() => (svgFocus = false)}
  {onclick}
  aria-label="Arrow"
>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 10L12 15L17 10"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  button {
    position: absolute;
    fill: none;
    stroke: $blue;

    &:hover,
    &:active,
    &:focus {
      @include bright(150%);
    }

    &.bottom {
      bottom: 1rem;
    }

    &.top {
      top: 1rem;
    }
  }

  :global(body.dark) {
    button {
      stroke: $cyan;
    }
  }
</style>
