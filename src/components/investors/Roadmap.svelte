<script lang="ts">
  import { onMount } from "svelte";

  import roadmap from "@constants/roadmap";
  import typeWrite from "@utils/typewriter";
  import observeElement from "@utils/observer";

  let tagline = $state<HTMLHeadingElement>();

  // Local interactive model with per-section tracker
  const totalSections = (roadmap as Section[]).length;
  let sections = $state(
    (roadmap as Section[]).map((s, si) => ({
      index: si,
      title: s.section,
      goals: s.goals.map((g, gi) => ({
        ...g,
        id: `${si}-${gi}`,
        ref: null as HTMLElement | null,
      })),
      titleEl: null as HTMLHeadingElement | null,
      typed: false,
      side: si === totalSections - 1 ? "center" : si % 2 === 0 ? "right" : "left",
      upcomingEl: null as HTMLElement | null,
      upcomingAnimated: false,
      wrap: null as HTMLElement | null,
      trackerY: 0,
      goalCenters: [] as number[],
      inView: false,
      activeGoalIdx: null as number | null,
      completedCount: 0,
      trailHeight: 0,
      finished: false,
    }))
  );

  function updateTracker() {
    const viewportCenter = window.innerHeight / 2;
    sections.forEach((sec) => {
      if (!sec.wrap) return;
      const wrapRect = sec.wrap.getBoundingClientRect();
      sec.inView = wrapRect.bottom > 0 && wrapRect.top < window.innerHeight;
      // compute centers for each goal relative to wrap
      sec.goalCenters = sec.goals.map((g) => {
        if (!g.ref) return 0;
        const r = g.ref.getBoundingClientRect();
        return r.top - wrapRect.top + r.height / 2;
      });
      // continuous progress of the tracker along the wrapper based on viewport center
      const progress = Math.max(0, Math.min(viewportCenter - wrapRect.top, wrapRect.height));
      sec.trackerY = progress;
      // compute nearest goal index for highlighting
      let bestDist = Infinity;
      let bestIdx: number | null = null;
      sec.goalCenters.forEach((cy, gi) => {
        const d = Math.abs(cy - progress);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = gi;
        }
      });
      // finished only after scrolling past last goal center (reversible)
      const lastIdx = sec.goals.length - 1;
      const lastCenter = lastIdx >= 0 ? sec.goalCenters[lastIdx] : null;
      sec.finished = lastCenter !== null ? progress > (lastCenter + 4) : false;
      if (bestIdx !== sec.activeGoalIdx) {
        sec.activeGoalIdx = bestIdx;
      }
      // number of completed goals = goals whose center is at or above progress
      const stuck = sec.goalCenters.filter((cy) => cy <= progress).length;
      sec.completedCount = Math.min(sec.goals.length, stuck);
      // trail height should end at the farthest dot position
      const farthestY =
        sec.completedCount < sec.goals.length
          ? sec.trackerY
          : lastCenter ?? sec.trackerY;
      sec.trailHeight = Math.max(0, Math.min(farthestY, wrapRect.height));
    });
  }

  onMount(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateTracker();
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // first paint
    onScroll();
    // Observe section titles (type only) and goals wrapper (directional appear)
    const disposers: Array<() => void> = [];
    sections.forEach((sec) => {
      // Title: type only
      if (sec.titleEl) {
        sec.titleEl.style.opacity = "0"; // reset so it types only when visible
        const disposeTitle = observeElement(sec.titleEl, null, () => {
          if (!sec.typed && sec.titleEl) {
            typeWrite(sec.titleEl, sec.title);
            sec.typed = true;
          }
        });
        disposers.push(disposeTitle);
      }

      // Upcoming tiles (last section): fall-in once via observer on the list
      if (sec.upcomingEl) {
        const disposeUpcoming = observeElement(
          sec.upcomingEl,
          null,
          () => {
            if (!sec.upcomingAnimated) {
              const items = Array.from(sec.upcomingEl!.querySelectorAll("li"));
              items.forEach((li, i) => {
                li.classList.add("fall-in");
                (li as HTMLElement).style.setProperty("--i", String(i));
              });
              sec.upcomingAnimated = true;
            }
          },
          () => {},
          {
            root: null,
            rootMargin: "-35% 0px -35% 0px",
            threshold: [0, 0.5, 1],
          }
        );
        disposers.push(disposeUpcoming);
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onScroll as any);
      disposers.forEach((d) => d());
    };
  });

  onMount(() => typeWrite(tagline!, "Roadmap"));
</script>

<section class="roadmap flex">
  <h1 bind:this={tagline}>Roadmap</h1>

  {#each sections as sec, si}
    <section class="flex" class:appear-bottom={si === 0}>
      <h3 bind:this={sec.titleEl}>{sec.title}</h3>
      {#if si === sections.length - 1}
        <!-- Last section: centered goals, no tracker -->
        <ul class="goals upcoming flex" bind:this={sec.upcomingEl}>
          {#each sec.goals as g, gi}
            <li
              class="goal container transition"
              class:active={sec.activeGoalIdx === gi}
              class:completed={(sec.activeGoalIdx !== null && gi < sec.activeGoalIdx) ||
                sec.finished}
              bind:this={g.ref}
              id="goal-{g.id}"
            >
              <h4 class="transition">{g.name}</h4>
              <p class="transition">{g.description}</p>
            </li>
          {/each}
        </ul>
      {:else}
        <div class="goals-wrapper" class:right={si % 2 === 0} bind:this={sec.wrap}>
          <div
            class="tracker"
            class:hidden={!sec.inView}
            class:started={sec.completedCount > 0}
            aria-hidden="true"
          >
            <div
              class="trail"
              aria-hidden="true"
              style:height="{Math.max(0, sec.trailHeight)}px"
            ></div>
            {#each sec.goals as _g, di}
              {#key di}
                <div
                  class="dot flex"
                  aria-hidden="true"
                  style:top="{
                    (di < sec.completedCount
                      ? sec.goalCenters[di] ?? 0
                      : sec.trackerY) + 'px'
                  }"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              {/key}
            {/each}
          </div>
          <ul class="goals flex" class:right={si % 2 === 1}>
            {#each sec.goals as g, gi}
              <li
                class="goal container transition"
                class:active={sec.activeGoalIdx === gi}
                class:completed={gi < sec.completedCount || sec.finished}
                bind:this={g.ref}
                id="goal-{g.id}"
              >
                <h4 class="transition">{g.name}</h4>
                <p class="transition">{g.description}</p>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </section>
  {/each}
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .roadmap {
    align-items: stretch;

    section {
      max-width: 90rem;

      h3 {
        @include auto-width;
      }

      .goals-wrapper {
        position: relative;

        .tracker {
          display: none;
          position: absolute;
          top: 0;
          left: -2rem;
          width: 1rem;
          height: 100%;
          pointer-events: none;

          @include respond-up(small-desktop) {
            display: block;
          }

          .trail {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0.5rem;
            height: 100%;
            border-radius: 0.25rem;
            background: linear-gradient(to bottom, rgba(0, 185, 55, 0.25), rgba(75, 112, 50, 1));
            transition: height 0.3s linear;
          }

          .dot {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            @include deep-green;
            transition: top 0.3s linear, opacity 0.3s ease;
            opacity: 1;

            svg {
              width: 75%;
              height: 75%;
              fill: none;
              stroke: $white;
            }
          }

          &:not(.started) {
            .dot {
              opacity: 0;
            }
          }
        }

        &.right {
          .tracker {
            left: auto;
            right: -2rem;
          }
        }
      }

      .goals {
        align-items: stretch;

        &.right {
          align-items: flex-end;
        }

        .goal {
          width: 100%;
          max-width: unset;
          border-radius: 0.5rem;
          gap: 1rem;
          @include gray-border;

          p {
            opacity: 0.9;
          }

          &.active {
            @include light-blue(0.1);
          }

          &.completed {
            transform: scaleX(1.01);
            @include green(0.25);

            h4 {
              @include deep-green(1, text);
            }

            p {
              @include dark-green(1, text);
            }
          }
        }

        &.upcoming {
          align-items: stretch;

          // Hidden by default; visible when fall-in class is applied
          li {
            opacity: 0;
          }

          .goal {
            width: 100%;
            justify-content: space-between;
            @include gray-border;
            @include light-blue(0.1);

            p {
              height: 100%;
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

          @include respond-up(tablet) {
            flex-flow: row wrap;

            .goal {
              max-width: calc(50% - 1rem);
            }
          }

          @include respond-up(large-desktop) {
            flex-wrap: nowrap;

            .goal {
              max-width: unset;
            }
          }
        }
      }
    }
  }

  :global(body.dark) {
    .roadmap {
      section {
        .goals-wrapper {
          .tracker {
            .trail {
              background: linear-gradient(to bottom, rgba(75, 112, 50, 0), rgba(0, 185, 55, 1));
            }

            .dot {
              @include green;

              svg {
                stroke: $dark-green;
              }
            }
          }
        }

        .goals {
          .goal {
            &.active {
              background-color: unset;
            }

            &.completed {
              background: $dark-green;

              h4 {
                @include green(1, text);
              }

              p {
                @include white-txt;
              }
            }
          }
        }
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tracker {
      transition: none;
      display: none !important;
    }
    .trail {
      transition: none;
    }
    // Upcoming tiles should be visible immediately without animation
    .goals.upcoming li {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
  }
</style>
