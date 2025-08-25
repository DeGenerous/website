<script lang="ts">
  import { onMount } from "svelte";

  import projects from "@constants/built";
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  import SwitchSVG from "@components/icons/Switch.svelte";

  let expandedIndex = $state<number[]>([]);

  let tagline = $state<HTMLHeadingElement>();
  let viewport = $state<HTMLElement>(); // padded wrapper (not the scroller)
  let scroller = $state<HTMLUListElement>(); // the real scroll container
  let tileRefs = $state<HTMLElement[]>([]);

  let tileStep = 300; // fallback

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    observeElement(
      viewport!,
      "visible",
      () => typeWrite(tagline!, "Built on DGRS"),
      resetTitle
    );
  });

  onMount(resetTitle);

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

  function scrollWrap(dir: 1 | -1) {
    if (!scroller) return;

    const epsilon = 4;
    const maxLeft = scroller.scrollWidth - scroller.clientWidth;

    scroller.style.scrollSnapType = "x proximity"; // enable snapping

    if (dir === 1) {
      // next
      if (scroller.scrollLeft + epsilon >= maxLeft) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroller.scrollBy({ left: tileStep, behavior: "smooth" });
      }
    } else {
      // prev
      if (scroller.scrollLeft <= epsilon) {
        scroller.scrollTo({ left: maxLeft, behavior: "smooth" });
      } else {
        scroller.scrollBy({ left: -tileStep, behavior: "smooth" });
      }
    }

    setTimeout(() => {
      scroller!.style.scrollSnapType = "none"; // disable snapping temporarily
    });
  }
</script>

<section class="flex full-height">
  <h3 bind:this={tagline}>Built on DGRS</h3>

  <p class="auto-width">
    Our composable AI infrastructure underpins everything from multimedia agents
    to games, films, and apps - all within a single, unified ecosystem. From
    authors and brands to filmmakers, four entertainment &amp; management apps,
    three video games, a sci-fi franchise, and a social media AI agent, DGRS’s
    modular building blocks power real-world innovation.
  </p>

  <div class="carousel mar-auto mar-block transition" bind:this={viewport}>
    <SwitchSVG onclick={() => scrollWrap(-1)} />

    <!-- Viewport gives visual padding; scroller has NO horizontal padding -->
    <ul class="projects-list" bind:this={scroller}>
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
            <img src={project.image} alt={project.title} />
            <h5 class="fade-in">Click to learn more...</h5>
          </span>
          <h4>{project.title}</h4>
        </button>
      {/each}
    </ul>

    <SwitchSVG onclick={() => scrollWrap(1)} right />
  </div>

  <span class="flex gap-8">
    <h5>Have an idea?</h5>
    <a class="button-anchor" href="/"> Launch on DGRS </a>
  </span>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    .carousel {
      width: 100vw;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding-inline: 0.5rem; /* visual breathing room around arrows */
      transition-duration: 0.6s;
      opacity: 0.5;
      transform: scaleY(0.9);
    }

    /* Real scroll container — no horizontal padding here */
    .projects-list {
      width: 100%;
      display: flex;
      align-items: stretch;
      gap: 1rem; /* measured for tileStep */
      overflow-x: auto;
      scroll-behavior: smooth;
      // scroll-snap-type: x mandatory;
      scroll-padding-inline: 0.5rem; /* where "start" should align visually */
      flex: 1;
      // background-color: rgba(0, 0, 0, 0.25);

      &::-webkit-scrollbar {
        display: none;
      }

      .project {
        height: 400px; /* fixed height for tiles */
        width: inherit;
        max-width: 300px; /* max width for smaller screens */
        justify-content: space-between;
        flex: 0 0 auto;
        scroll-snap-align: start;
        text-align: left;
        @include gray-border;
        @include light-blue(0.1);

        @include respond-up("tablet") {
          width: 360px; /* fixed width for larger screens */
          max-width: unset;
        }

        @include respond-up("quad-hd") {
          height: 15vw;
          width: 12.5vw; /* fixed width for wide desktop */
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
          font-family: $font-sans;
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
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .projects-list {
        scroll-behavior: auto;
      }
    }
  }

  :global(.carousel.visible) {
    opacity: 1 !important;
    transform: scaleY(1) !important;

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
</style>
