<script lang="ts">
  let {
    onclick = () => {},
    position = "bottom",
    animation = true,
    rotate = null,
    inheritColor = false,
    as = "button",
  }: {
    onclick?: () => void;
    position?: Nullable<"top" | "bottom">;
    animation?: boolean;
    rotate?: Nullable<string>;
    inheritColor?: boolean;
    as?: "button" | "span" | "div";
  } = $props();
  let svgFocus = $state<boolean>(false);
</script>

<svelte:element
  this={as}
  class="flex void-btn {position}"
  class:floating={animation}
  class:inherit={inheritColor}
  onpointerover={() => (svgFocus = true)}
  onpointerout={() => (svgFocus = false)}
  {onclick}
  aria-label={as === "button" ? "Arrow" : undefined}
  role={as !== "button" ? undefined : undefined}
  tabindex={as !== "button" ? undefined : undefined}
>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style:transform="rotate({rotate}deg)">
    <path d="M7 10L12 15L17 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</svelte:element>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .void-btn {
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
    .void-btn {
      stroke: $cyan;
    }
  }
</style>
