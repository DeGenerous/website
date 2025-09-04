<script lang="ts">
  import { onMount } from "svelte";

  import tabs from "@constants/header";
  import { showScramble } from "@stores/scramble.svelte";
  import { darkTheme } from "@stores/theme.svelte";

  import LogoSVG from "@components/icons/Logo.svelte";
  import ConexusLogoSVG from "@components/icons/ConexusLogo.svelte";
  import BurgerSVG from "@components/icons/Burger.svelte";

  let { activeTab = "" }: { activeTab?: string } = $props();

  let scrollY = $state<number>(0);
  const clamp = 64; // px after which hiding can kick in

  let header: HTMLElement;

  let activeTheme = $derived($darkTheme ? "dark" : "light");

  let hiddenHeader = $state<boolean>(false);
  let hiddenTabs = $state<boolean>(true);

  onMount(() => {
    const saved = localStorage.getItem("theme");
    $darkTheme = saved === "dark";
    document.body.classList.add(activeTheme);
  });

  $effect(() => {
    document.body.classList.toggle("dark", $darkTheme);
    document.body.classList.toggle("light", !$darkTheme);
    localStorage.setItem("theme", activeTheme);
  });

  const onscroll = () => {
    const y = window.scrollY;

    if (y > scrollY && y > clamp) {
      header.classList.add("hide");
    } else if (y < scrollY) {
      header.classList.remove("hide");
    }
  };
</script>

<svelte:window {onscroll} bind:scrollY />

<header class="flex-row blur" class:hide={hiddenHeader} bind:this={header}>
  <LogoSVG href="/" onclick={showScramble} />
  <nav id="site-nav" class="flex transition" class:hidden={hiddenTabs} aria-label="Primary">
    <ConexusLogoSVG href="https://conexus.degenerousdao.com/" target="_blank" hideForPCs={true} />
    {#each tabs as tab}
      <a
        class="nohover-link"
        class:active={activeTab === tab}
        href="/{tab}"
        aria-current={activeTab === tab ? "page" : undefined}
        onclick={showScramble}
      >
        {tab}
      </a>
    {/each}
    <input
      class="theme-toggle pc-only"
      type="checkbox"
      bind:checked={$darkTheme}
      aria-label="Toggle dark mode"
    />
  </nav>
  <span class="flex-row">
    <ConexusLogoSVG
      href="https://conexus.degenerousdao.com/"
      target="_blank"
      hideForMobiles={true}
    />
    <input
      class="theme-toggle mobile-only"
      type="checkbox"
      bind:checked={$darkTheme}
      aria-label="Toggle dark mode"
    />
    <BurgerSVG
      onclick={() => (hiddenTabs = !hiddenTabs)}
      expanded={!hiddenTabs}
      controls="site-nav"
    />
  </span>
</header>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    transition: transform 0.3s ease-in-out;
    will-change: transform;
    @include box-shadow;
    @include light-blue(0.1);

    &.hide {
      transform: translateY(-100%);
    }

    nav {
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      gap: 0.25rem;
      padding: 1rem;
      opacity: 1;
      background-color: white;
      @include box-shadow;

      &.hidden {
        right: -100%;
        opacity: 0;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2.5rem;
        padding-inline: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 500;
        text-transform: capitalize;
        @include dark-blue(1, text);

        &:hover,
        &:active,
        &:focus {
          text-decoration: none;
          @include light-blue(1, text);
        }

        &.active {
          @include blue(1, text);
          @include light-blue(0.25);
        }
      }

      @include respond-up("tablet") {
        position: static;
        flex-direction: row;
        padding: 0;
        width: auto;
        box-shadow: none;
        background-color: transparent !important;

        &.hidden {
          opacity: 1;
        }
      }
    }

    nav,
    span {
      .theme-toggle {
        --size: 2rem;
        appearance: none;
        outline: none;
        cursor: pointer !important;
        width: var(--size);
        height: var(--size);
        box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
        border-radius: 999px;
        background-color: transparent;
        border: none;
        filter: none;
        transition: all 500ms;

        @include scale(0.75);
        @include light-blue(0.5, text);

        &:checked {
          --ray-size: calc(var(--size) * -0.4);
          --offset-orthogonal: calc(var(--size) * 0.65);
          --offset-diagonal: calc(var(--size) * 0.45);

          box-shadow:
            inset 0 0 0 var(--size),
            calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
            var(--offset-orthogonal) 0 0 var(--ray-size),
            0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
            0 var(--offset-orthogonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
            var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
            var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);

          @include scale(0.5);
          @include cyan(1, text);
        }

        &:hover,
        &:active {
          @include bright;
        }
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    header {
      transition: none;
      transform: none !important;
      &.hide {
        transform: none !important;
      }
    }
  }

  :global(body.dark) {
    header {
      @include dark-blue;

      nav {
        @include dark-blue;

        a {
          @include white-txt;

          &:hover,
          &:active,
          &:focus {
            @include cyan(1, text);
          }

          &.active {
            @include dark-blue(1, text);
            @include cyan;
          }
        }
      }
    }
  }
</style>
