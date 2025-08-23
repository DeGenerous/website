<script lang="ts">
  let {
    onclick = () => {},
    position = "bottom",
    animation = true,
    rotate = null,
    inheritColor = false,
  }: {
    onclick?: () => void;
    position?: Nullable<"top" | "bottom">;
    animation?: boolean;
    rotate?: Nullable<string>;
    inheritColor?: boolean;
  } = $props();
  let svgFocus = $state<boolean>(false);
</script>

<button
  class="flex void-btn {position}"
  class:floating={animation}
  class:inherit={inheritColor}
  onpointerover={() => (svgFocus = true)}
  onpointerout={() => (svgFocus = false)}
  {onclick}
  aria-label="Arrow"
>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style:transform="rotate({rotate}deg)"
  >
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
    fill: none;
    stroke: $blue;

    &:hover,
    &:active,
    &:focus {
      @include bright(150%);
    }

    &.bottom {
      position: absolute;
      bottom: 1rem;
    }

    &.top {
      position: absolute;
      top: 1rem;
    }

    &.inherit {
      stroke: inherit !important;
    }
  }

  :global(body.dark) {
    button {
      stroke: $cyan;
    }
  }
</style>
