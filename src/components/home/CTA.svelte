<script lang="ts">
  import { onMount, tick } from "svelte";
  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";
  import callToAction from "@constants/CTA";

  let ctaSection = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();
  let sectionTitle = $state<HTMLHeadingElement>();
  let activeSection = $state<Nullable<CTA>>(null);

  let currentTypewriter: ReturnType<typeof typeWrite> | null = null;
  let finishedAnimation = $state(false);

  // ---- helpers -------------------------------------------------------------

  function stopTyping() {
    currentTypewriter?.abort();
    currentTypewriter = null;
  }

  async function startTyping(el: HTMLElement, text: string, delay = 50) {
    stopTyping();
    await tick(); // ensure element is in DOM & layout settled
    const typer = typeWrite(el, text, delay);
    currentTypewriter = typer;
    await typer.promise;
  }

  // ---- flows ---------------------------------------------------------------

  const animateSection = async () => {
    finishedAnimation = false;
    await startTyping(tagline!, "What brings you here today?");
    finishedAnimation = true; // triggers the cards to drop
  };

  const animateTitle = async () => {
    if (!sectionTitle || !activeSection) return;
    await startTyping(sectionTitle, activeSection.title);
  };

  // Observe the section tagline once; start the initial sequence
  onMount(() => {
    observeElement(ctaSection!, null, animateSection);
    return () => {
      stopTyping();
    };
  });

  // UI actions
  async function pickSection(item: CTA) {
    if (activeSection?.name === item.name) return;
    activeSection = item;
    await tick(); // section DOM mounts
    await animateTitle(); // type the section title
  }

  async function resetToMenu() {
    activeSection = null;
    await tick(); // menu DOM mounts
    await animateSection();
  }
</script>

<section class="flex" bind:this={ctaSection}>
  {#if !activeSection}
    <h3 bind:this={tagline}>What brings you here today?</h3>

    {#if finishedAnimation}
      <h5 class="fade-in">I want to...</h5>

      <ul class="cards flex-row flex-wrap is-live">
        {#each callToAction as item, i (item.name)}
          <li style="--i:{i}">
            <button
              class="void-btn flex pad round"
              onclick={() => pickSection(item)}
              aria-label={item.name}
            >
              <img src="/cta/{item.name}.svg" alt="{item.name} icon" />
              <h4 style:color={item.color()}>{item.name}</h4>
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  {:else}
    <div
      class="container fade-in"
      style:background-color={activeSection.color(0.1)}
    >
      <h3 bind:this={sectionTitle} style:color={activeSection.color()}>
        {activeSection.title}
      </h3>

      <p>{activeSection.description}</p>

      <span class="flex-row flex-wrap">
        {#each activeSection.buttons as { name, link }, index (name)}
          <a
            class="button-anchor"
            class:secondary={index !== 0}
            style={index === 0
              ? `background-color: ${activeSection.color()};`
              : `color: ${activeSection.color()}; border: 1px solid ${activeSection.color()};`}
            href={link}
            rel="noopener noreferrer"
          >
            {name}
          </a>
        {/each}
      </span>

      <button class="void-btn caption" onclick={resetToMenu}>
        Feel like trying something else? Pick another path:
      </button>

      <ul class="icons flex-row flex-wrap" aria-label="Quick section switcher">
        {#each callToAction as item}
          <li>
            <button
              class="void-btn flex pad-8 round"
              class:active={activeSection.name === item.name}
              style:background-color={item.color(
                activeSection.name === item.name ? 0.75 : 0.1
              )}
              aria-pressed={activeSection.name === item.name}
              onclick={() => pickSection(item)}
              aria-label={item.name}
            >
              <img src="/cta/{item.name}.svg" alt="{item.name} icon" />
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    min-height: min(100vh, 50rem);
    padding-block: 1rem;

    h3 {
      @include light-blue(1, text);
    }

    /* Cards (menu) */
    .cards {
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 1.5rem;

      li {
        width: 95%;
        transform: translateY(-120vh) rotate(-2deg) scale(0.98);
        opacity: 0;
        will-change: transform, opacity;

        @include respond-up("tablet") {
          width: 10rem;
        }
      }

      &.is-live li {
        animation: card-fall 0.72s cubic-bezier(0.2, 0.8, 0.25, 1) both;
        animation-delay: calc(var(--i) * 120ms);
      }

      button {
        width: 100%;
        @include gray-border;
        @include light-blue(0.1);

        img {
          width: 3rem;
        }

        h4 {
          text-transform: uppercase;
          font-family: $font-sans;
        }

        &:hover,
        &:active,
        &:focus {
          background-color: transparent;
          @include box-shadow;

          * {
            @include scale;
          }
        }
      }
    }

    /* Icon switcher in the detail view */
    .icons {
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 0.75rem;

      li {
        display: contents;
      } /* keep buttons in flow grid/flex gaps */

      button {
        img {
          width: 2rem;
        }
        &:hover img,
        &:active img {
          @include scale;
          @include bright;
        }
        &.active img {
          @include bright(25%);
        }
      }
    }

    .container {
      .caption {
        @include gray(1, text);
        @include font(caption);

        &:hover,
        &:active,
        &:focus {
          text-decoration: underline dashed;
          color: black;
        }
      }

      span {
        margin-block: 0.5rem;

        a.secondary {
          background-color: white;

          &:hover:not(&:disabled),
          &:active:not(&:disabled),
          &:focus:not(&:disabled) {
            background-color: white;
          }
        }
      }
    }
  }

  /* Dark mode */
  :global(body.dark) {
    section {
      h3 {
        @include cyan(1, text);
      }

      .cards button {
        @include dark-blue;

        &:hover,
        &:active,
        &:focus {
          box-shadow: none;
          @include navy;
        }
      }

      .container .caption {
        &:hover,
        &:active,
        &:focus {
          color: white;
        }
      }
    }
  }

  /* Motion safety */
  @media (prefers-reduced-motion: reduce) {
    .cards li {
      animation: none !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
</style>
