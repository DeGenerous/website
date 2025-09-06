<script lang="ts">
  import { darkTheme } from "@stores/theme.svelte";

  const toggle = () => ($darkTheme = !$darkTheme);
</script>

<button
  class="switcher void-btn flex"
  role="switch"
  aria-checked={$darkTheme}
  aria-label="Toggle {$darkTheme ? 'dark' : 'light'} mode"
  onclick={toggle}
>
  <span class="track">
    <svg class="icon sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </g>
    </svg>
    <svg class="icon moon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="currentColor"
      />
    </svg>
    <span class="thumb shad-behind"></span>
  </span>
</button>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  $h: 2rem;
  $w: 4rem;
  $pad: 0.125rem;
  $thumb-size: $h - $pad * 2;

  .switcher {
    width: $w;
    height: $h;
    padding: 0;
    border-radius: 2rem;
    min-width: unset;
    min-height: unset;

    .track {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      transition: background-color 0.3s ease;
      @include light-blue(0.25);
      // @include box-shadow(soft, inset);
  
      .icon {
        position: absolute;
        top: 50%;
        width: calc($h * 0.75);
        height: calc($h * 0.75);
        transform: translateY(-50%);
        transition: opacity 0.3s ease, color 0.3s ease;
        pointer-events: none;
      }
  
      .sun {
        left: calc($pad + 0.25rem);
        @include cyan(0.75, text);
      }
  
      .moon {
        right: calc($pad + 0.25rem);
        @include light-blue(0.75, text);
      }
  
      .thumb {
        position: absolute;
        top: $pad;
        left: $pad;
        width: $thumb-size;
        height: $thumb-size;
        border-radius: 50%;
        background: white;
        transition: transform 0.3s ease;
        will-change: transform;
      }
    }

    &:focus-visible .track {
      outline: 2px solid $light-blue;
      outline-offset: 2px;
    }

    &[aria-checked="true"] {
      .track {
        @include navy;
      }

      .thumb {
        transform: translateX(calc($w - $thumb-size - $pad * 2));
        @include blue;
      }

      &:focus-visible .track {
        outline-color: $cyan;
      }
    }
  }
</style>

