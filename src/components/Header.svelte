<script lang="ts">
  import { onMount } from "svelte";

  import LogoSVG from "@components/icons/Logo.svelte";
  import ConexusLogoSVG from "@components/icons/ConexusLogo.svelte";

  let isDark = $state<boolean>(false);
  let activeTheme = $derived(isDark ? "dark" : "light");

  onMount(() => {
    const saved = localStorage.getItem("theme");
    isDark = saved === "dark";
    document.body.classList.add(activeTheme);
  });

  $effect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
    localStorage.setItem("theme", activeTheme);
  });
</script>

<header class="flex-row blur">
  <LogoSVG onclick={() => {}} />
  <nav class="flex-row">
    <a href="/">Investors</a>
    <a href="/">Enterprise</a>
    <a href="/">Apps</a>
    <a href="/">Impact</a>
    <a href="/">Community</a>
    <a href="/">Team</a>
    <input class="theme-toggle" type="checkbox" bind:checked={isDark} />
  </nav>
  <ConexusLogoSVG onclick={() => {}} />
</header>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  header {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100vw;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    @include box-shadow;

    nav {
      gap: 0.25rem;

      a {
        display: flex;
        align-items: center;
        height: 2.5rem;
        padding-inline: 0.5rem;
        border-radius: 0.5rem;

        &:hover,
        &:active,
        &:focus {
          text-decoration: none;
          color: $cyan;
          @include dark-blue;
        }
      }

      .theme-toggle {
        --size: 2rem;

        appearance: none;
        outline: none;
        cursor: pointer;

        width: var(--size);
        height: var(--size);
        box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
        border-radius: 999px;
        background-color: transparent;
        border: none;
        filter: none;
        transform: scale(0.75);

        transition: all 500ms;

        @include light-blue(0.5, text);

        &:checked {
          --ray-size: calc(var(--size) * -0.4);
          --offset-orthogonal: calc(var(--size) * 0.65);
          --offset-diagonal: calc(var(--size) * 0.45);

          transform: scale(0.5);
          box-shadow:
            inset 0 0 0 var(--size),
            calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
            var(--offset-orthogonal) 0 0 var(--ray-size),
            0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
            0 var(--offset-orthogonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1)
              0 var(--ray-size),
            var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0
              var(--ray-size),
            var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0
              var(--ray-size);

          @include orange(1, text, bright);
        }
      }
    }
  }

  :global(body.dark) {
    header {
      @include navy(0.5);

      nav {
        a {
          &:hover,
          &:active,
          &:focus {
            color: $dark-blue;
            @include cyan;
          }
        }
      }
    }
  }
</style>
