<script lang="ts">
  let {
    onclick = () => {},
    expanded = false,
    controls = undefined,
  }: {
    onclick: () => void;
    expanded?: boolean;
    controls?: string | undefined;
  } = $props();
  let svgFocus = $state<boolean>(false);
</script>

<button
  class="flex void-btn"
  onpointerover={() => (svgFocus = true)}
  onpointerout={() => (svgFocus = false)}
  {onclick}
  aria-label="Toggle navigation"
  aria-expanded={expanded}
  aria-controls={controls}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    stroke="#eee"
    stroke-width=".6"
    stroke-linecap="round"
  >
    <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
      <animate
        dur="0.2s"
        attributeName="d"
        values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
        fill="freeze"
        begin="start.begin"
      />
      <animate
        dur="0.2s"
        attributeName="d"
        values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
        fill="freeze"
        begin="reverse.begin"
      />
    </path>
    <rect width="10" height="10" stroke="none">
      <animate dur="2s" id="reverse" attributeName="width" begin="click" />
    </rect>
    <rect width="10" height="10" stroke="none">
      <animate
        dur="0.001s"
        id="start"
        attributeName="width"
        values="10;0"
        fill="freeze"
        begin="click"
      />
      <animate
        dur="0.001s"
        attributeName="width"
        values="0;10"
        fill="freeze"
        begin="reverse.begin"
      />
    </rect>
  </svg>
</button>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  button {
    fill: transparent;
    stroke: $dark-blue;
    width: 2.5rem;

    @include respond-up("tablet") {
      display: none;
    }

    svg {
      width: inherit;
    }

    &:hover,
    &:active,
    &:focus {
      stroke: $light-blue;
    }
  }

  :global(body.dark) {
    button {
      stroke: $cyan;
    }
  }
</style>
