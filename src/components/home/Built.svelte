<script lang="ts">
  import { onMount } from "svelte";

  import projects from "@constants/built";
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let expandedIndex = $state<number[]>([]);

  let tagline = $state<HTMLHeadingElement>();
  let viewport = $state<HTMLElement>(); // padded wrapper (not the scroller)
  let tileRefs = $state<HTMLElement[]>([]);

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    observeElement(
      viewport!,
      "visible",
      () => typeWrite(tagline!, "Built on DGRS"),
      () => {}, // no reset
      undefined,
      true // animate once
    );
  });

  onMount(resetTitle);

  // Observe each tile for visibility (animate once and keep class)
  onMount(() => {
    const cleanups: Array<() => void> = [];

    const setup = () => {
      tileRefs.forEach((el) => {
        if (!el) return;
        const dispose = observeElement(
          el,
          "visible",
          () => {},
          () => {},
          undefined,
          false // animate multiple times
        );
        cleanups.push(dispose);
      });
    };

    // Defer once to ensure refs are bound
    if (!tileRefs || tileRefs.length === 0) requestAnimationFrame(setup);
    else setup();

    return () => {
      cleanups.forEach((fn) => fn?.());
    };
  });

  function toggleExpand(event: Event, i: number) {
    if (expandedIndex.includes(i)) {
      expandedIndex = expandedIndex.filter((index) => index !== i);
    } else {
      expandedIndex = [...expandedIndex, i];
    }
    const target = event.target as HTMLElement;
    const projectDesc = target.querySelector("p");
    const projectImg = target.querySelector("img");
    if (!projectDesc || !projectImg) return;
    target.style.transform = "scaleX(0)";
    setTimeout(() => {
      target.style.transform = "scaleX(1)";
    }, 300); // slight delay for effect
  }
</script>

<section class="built-on-dgrs flex pc-narrow">
  <h3 bind:this={tagline}>Built on DGRS</h3>

  <p class="auto-width pc-narrow">
    Our composable AI infrastructure underpins everything from multimedia agents to games, films,
    and apps - all within a single, unified ecosystem. Not just our products: independent teams,
    creators, brands, franchises, and filmmakers build on DGRS's modular building blocks.
  </p>

  <!-- Projects list: mobile stacked sticky; desktop flex grid -->
  <div class="projects-list flex-row flex-wrap pad-inline" bind:this={viewport}>
    {#each projects as project, i}
      <button
        class="project void-btn flex pad-8 gap-8 round"
        class:expanded={expandedIndex.includes(i)}
        onclick={(event) => toggleExpand(event, i)}
        data-description={project.description}
        bind:this={tileRefs[i]}
      >
        <span class="pad-8">
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
          <h5 class="fade-in">Click to learn more...</h5>
        </span>
        <h4>{project.title}</h4>
      </button>
    {/each}
  </div>

  <span class="flex auto-width">
    <h5>Have an idea?</h5>
    <p>Your dream. Our engine. Infinite possibilities.</p>
    <a class="button-anchor" href="https://form.typeform.com/to/kh9chgAR" target="_blank">
      Launch on DGRS
    </a>
  </span>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    .projects-list {
      width: 100%;
      position: relative;
      max-width: 90rem;

      @include respond-up(small-desktop) {
        padding: 0;
      }

      .project {
        height: 380px; /* fixed height for tiles */
        width: 100%;
        justify-content: space-between;
        flex: 0 0 auto;
        text-align: left;
        @include gray-border;
        @include light-blue(0.1);

        @media (max-width: 768px) {
          transform: scale(0.95);
        }

        * {
          pointer-events: none;
        }

        span {
          position: relative;
          height: 100%;

          img {
            position: absolute;
            top: 0;
            left: 0;
            height: inherit;
            display: block;
            border-radius: 0.5rem;
          }

          p {
            text-align: center;
            font-weight: 500;
            height: inherit;
            @include font(h5);
          }

          h5 {
            display: none;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            text-align: center;
            @include white-txt(1);
          }
        }

        h4 {
          text-align: center;
          @include blue(1, text);
        }

        &.expanded {
          @include dark-blue(0.9);

          span {
            img {
              // opacity: 0.5;
              z-index: -1;
              filter: blur(0.1rem) brightness(25%);
              // transform: scaleX(0);
            }

            p {
              @include white-txt;
            }
          }

          h4 {
            @include white-txt(1);
          }
        }

        &:hover,
        &:active {
          &.expanded {
            @include bright;
          }

          &:not(&.expanded) {
            @include light-blue(0.25);

            h4 {
              @include navy(1, text);
            }

            span {
              img {
                filter: blur(0.1rem) brightness(50%);
              }

              h5 {
                display: block;
              }
            }
          }
        }

        @include respond-up("tablet") {
          width: calc(50% - 0.75rem);
        }

        @include respond-up(small-desktop) {
          width: calc(33.33% - 1rem);
        }

        @include respond-up(large-desktop) {
          height: 380px;
          width: calc(25% - 1.125rem);
        }

        @include respond-up(full-hd) {
          height: max(440px, 35vh);
        }
      }
    }
  }

  :global(.carousel.visible) {
    h3 {
      opacity: 1;
    }
  }

  :global(body.dark) {
    .project {
      @include dark-blue;

      h4 {
        @include cyan(1, text);
      }

      &.expanded {
        @include dark-blue;
      }

      &:hover,
      &:active {
        &:not(&.expanded) {
          @include dark-blue;

          h4 {
            @include cyan(1, text);
          }
        }
      }
    }
  }

  :global(.built-on-dgrs .projects-list .project.visible) {
    @media (max-width: 768px) {
      opacity: 1;
      transform: none;
    }
  }
</style>
