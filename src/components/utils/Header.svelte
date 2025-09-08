<script lang="ts">
  import { onMount } from "svelte";

  import tabs from "@constants/header";
  import { showScramble } from "@stores/scramble.svelte";
  import { darkTheme } from "@stores/theme.svelte";

  import LogoSVG from "@components/icons/Logo.svelte";
  import ConexusLogoSVG from "@components/icons/ConexusLogo.svelte";
  import BurgerSVG from "@components/icons/Burger.svelte";
  import ThemeToggle from "@components/icons/ThemeToggle.svelte";

  let { activeTab = "" }: { activeTab?: string } = $props();

  const clamp = 64; // px after which hiding can kick in

  let header: HTMLElement;

  let activeTheme = $derived($darkTheme ? "dark" : "light");

  let hiddenHeader = $state<boolean>(false);
  let hiddenTabs = $state<boolean>(true);

  let lang = $state<string>("en");

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

  // Throttle scroll work to animation frames to avoid layout thrash
  let lastY = 0;
  let ticking = false;
  const onscroll = () => {
    const y = window.scrollY;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (y > lastY && y > clamp) header.classList.add("hide");
      else if (y < lastY) header.classList.remove("hide");
      lastY = y;
      ticking = false;
    });
  };
</script>

<svelte:window {onscroll} />

<header class="flex-row blur" class:hide={hiddenHeader} bind:this={header}>
  <span class="flex-row">
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
      <a class="contact-us nohover-link" href="mailto:contact@dgrs.ink">
        Contact Sales
      </a>
    </nav>
  </span>
  
  <span class="flex-row">
    <a class="contact-us nohover-link pc-only" href="mailto:contact@dgrs.ink">
      Contact Sales
    </a>
    <ThemeToggle />
    <select id="lang" bind:value={lang}>
      <option value="en" selected>EN</option>
    </select>
    <ConexusLogoSVG
      href="https://conexus.degenerousdao.com/"
      target="_blank"
      hideForMobiles={true}
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

    @include respond-up("tablet") {
      padding: 1rem;
    }

    &.hide {
      transform: translateY(-100%);
    }

    select {
      width: 4rem;
      padding: 0;
      min-height: 2.5rem;

      @media (max-width: 400px) {
        display: none;
      }
    }

    .contact-us {
      @include dark-blue(1, text);

      &:hover,
      &:active,
      &:focus {
        @include light-blue(1, text);
      }
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

      @include respond-up("small-desktop") {
        position: static;
        flex-direction: row;
        padding: 0;
        width: auto;
        box-shadow: none;
        background-color: transparent !important;

        &.hidden {
          opacity: 1;
        }

        a.contact-us {
          display: none;
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

      .contact-us {
        @include white-txt;

        &:hover,
        &:active,
        &:focus {
          @include cyan(1, text);
        }
      }

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
