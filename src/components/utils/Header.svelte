<script lang="ts">
  import { onMount, tick } from "svelte";

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
  let expandedDropdown = $state<string | null>(null);
  let showTranslator = $state(false);

  function ensureGTranslate() {
    if (typeof window === "undefined") return;

    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      globe_color: "#3875fa",
      wrapper_selector: ".gtranslate_wrapper",
      flag_size: 24,
      globe_size: 40,
    };

    const existing = document.querySelector<HTMLScriptElement>("script[data-gtranslate]");
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/globe.js";
      script.defer = true;
      script.dataset.gtranslate = "true";
      document.head.appendChild(script);
      script.addEventListener("load", () => {
        if (typeof window.gtranslateInit === "function") window.gtranslateInit();
      });
    } else if (typeof window.gtranslateInit === "function") {
      window.gtranslateInit();
    }
  }

  onMount(() => {
    const saved = localStorage.getItem("theme");
    $darkTheme = saved === "dark";
    document.body.classList.add(activeTheme);
  });

  onMount(async () => {
    showTranslator = true;
    await tick();
    ensureGTranslate();
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
      {#each tabs as { name, links }}
        <div class="nav-item flex" class:active={activeTab === name}>
          <span class="flex-row">
            <a
              class="tab nohover-link flex"
              href="/{name}"
              aria-current={activeTab === name ? "page" : undefined}
              onclick={showScramble}
            >
              {name}
            </a>
            {#if links}
              <button
                class="arrow void-btn"
                class:expanded={expandedDropdown === name}
                aria-hidden="true"
                aria-label="Toggle dropdown"
                onclick={() => (expandedDropdown = expandedDropdown === name ? null : name)}
              ></button>
            {/if}
          </span>
          {#if links}
            <div
              class="dropdown flex round-8 fade-in"
              class:expanded={expandedDropdown === name}
              role="menu"
            >
              {#each links as { name, href }}
                <a class="nohover-link" {href} role="menuitem">{name}</a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
      <div class="nav-item flex">
        <span class="contact-us flex-row">
          <a class="tab nohover-link flex" href="mailto:biz@dgrslabs.ink">
            Contact Sales
          </a>
        </span>
      </div>
    </nav>
  </span>

  <span class="flex-row">
    <a class="contact-us nohover-link pc-only" href="mailto:biz@dgrslabs.ink"> Contact Sales </a>
    <ThemeToggle />
    {#if showTranslator}
      <div class="gtranslate_wrapper" data-external="true"></div>
    {/if}
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

      .nav-item {
        position: relative;
        width: 100%;
        gap: 0.5rem;

        > span {
          position: relative;
          width: 100%;
          height: 2.5rem;
          gap: 0.25rem;
          border-radius: 0.5rem;
          @include dark-blue(1, text);

          &:hover,
          &:active,
          &:focus {
            @include light-blue(1, text);
          }
        }

        .tab {
          width: 100%;
          height: 100%;
          font-weight: 500;
          text-transform: capitalize;
          color: inherit;
        }

        .arrow {
          position: absolute;
          top: 0;
          right: 0;
          display: inline-block;
          width: 0.5rem;
          aspect-ratio: 1 / 1;
          flex: none;
          min-width: unset;
          min-height: unset;
          margin: 1rem;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: rotate(45deg);
          transition: all 0.3s ease-in-out;
          z-index: 1;

          &.expanded {
            transform: scaleY(1.1) translateY(10%) rotate(45deg);
          }

          @include respond-up("small-desktop") {
            display: inline-block;
          }
        }

        &.active > span {
          @include blue(1, text);
          @include light-blue(0.25);
        }

        .dropdown {
          display: none;
          width: 100%;
          margin-bottom: 0.5rem;
          @include light-blue(0.1);

          &.expanded {
            display: flex;
          }

          a {
            width: 100%;
            white-space: nowrap;
            border-radius: 0.5rem;
            padding: 0.5rem 1.5rem;
            @include dark-blue(1, text);

            &:hover,
            &:active,
            &:focus {
              @include light-blue(0.25);
              @include blue(1, text);
            }
          }
        }

        @include respond-up("small-desktop") {
          > span {
            padding-inline: 0.5rem;
            gap: 0.5rem;
            cursor: pointer;

            .arrow {
              position: static;
              margin: 0;
              pointer-events: none;
            }
          }

          .dropdown {
            display: none;
            position: absolute;
            width: auto;
            top: 100%;
            left: 0;
            align-items: flex-start;
            gap: 0;
            z-index: 10;
            background: white;
            @include box-shadow;

            a {
              padding-inline: 1rem;
              text-align: left;
            }
          }

          &:hover,
          &:focus-within {
            &:not(.active) {
              .arrow {
                transform: scaleY(1.1) translateY(10%) rotate(45deg);
              }

              .dropdown {
                display: flex;
              }
            }
          }
        }
      }

      &.hidden {
        right: -100%;
        opacity: 0;
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

        span.contact-us {
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

        .nav-item {
          > span {
            @include white-txt;

            &:hover,
            &:active,
            &:focus {
              @include cyan(1, text);
            }
          }

          &.active > span {
            @include dark-blue(1, text);
            @include cyan;
          }

          .dropdown {
            @include dark-blue;

            a {
              @include white-txt;

              &:hover,
              &:active,
              &:focus {
                @include navy;
                @include cyan(1, text);
              }
            }
          }
        }
      }
    }
  }
</style>
