<script lang="ts">
  import { onMount } from "svelte";

  import roadmap from "@constants/roadmap";
  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  // Local interactive model with per-section tracker
  let sections = $state(
    (roadmap as Section[]).map((s, si) => ({
      index: si,
      title: s.section,
      goals: s.goals.map((g, gi) => ({
        ...g,
        id: `${si}-${gi}`,
        ref: null as HTMLElement | null,
      })),
      wrap: null as HTMLElement | null,
      trackerY: 0,
      inView: false,
      activeGoalIdx: null as number | null,
      finished: false,
    }))
  );

  function updateTracker() {
    const viewportCenter = window.innerHeight / 2;
    sections.forEach((sec) => {
      if (!sec.wrap) return;
      const wrapRect = sec.wrap.getBoundingClientRect();
      sec.inView = wrapRect.bottom > 0 && wrapRect.top < window.innerHeight;
      let bestCenter: number | null = null;
      let bestDist = Infinity;
      let bestIdx: number | null = null;
      sec.goals.forEach((g, gi) => {
        if (!g.ref) return;
        const r = g.ref.getBoundingClientRect();
        const cy = r.top + r.height / 2;
        const d = Math.abs(cy - viewportCenter);
        if (d < bestDist) {
          bestDist = d;
          bestCenter = cy;
          bestIdx = gi;
        }
      });
      if (bestCenter !== null) {
        const y = bestCenter - wrapRect.top;
        // clamp to wrap bounds
        sec.trackerY = Math.max(0, Math.min(y, wrapRect.height));
      }
      // finished only after scrolling past last goal center (reversible)
      const lastIdx = sec.goals.length - 1;
      const lastRef = lastIdx >= 0 ? sec.goals[lastIdx]?.ref : null;
      if (lastRef && bestCenter !== null) {
        const lr = lastRef.getBoundingClientRect();
        const lastCenter = lr.top + lr.height / 2;
        sec.finished = !!(
          bestIdx === lastIdx && viewportCenter > lastCenter + 4
        );
      } else {
        sec.finished = false;
      }
      if (bestIdx !== sec.activeGoalIdx) {
        sec.activeGoalIdx = bestIdx;
        if (bestIdx !== null) {
          const g = sec.goals[bestIdx];
          console.log("Roadmap active:", {
            section: sec.title,
            index: sec.index,
            goalIndex: bestIdx,
            goal: g?.name,
          });
        }
      }
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
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onScroll as any);
    };
  });

  onMount(() => typeWrite(tagline!, "Roadmap"));
</script>

<section class="roadmap flex">
  <h1 bind:this={tagline}>Roadmap</h1>

  {#each sections as sec, si}
    <section>
      <h2>{sec.title}</h2>
      {#if si === sections.length - 1}
        <!-- Last section: centered goals, no tracker/wrap -->
        <ul class="goals upcoming">
          {#each sec.goals as g, gi}
            <li
              class="goal container"
              class:active={sec.activeGoalIdx === gi}
              class:completed={(sec.activeGoalIdx !== null &&
                gi < sec.activeGoalIdx) ||
                sec.finished}
              bind:this={g.ref}
              id="goal-{g.id}"
            >
              <h4>{g.name}</h4>
              <p>{g.description}</p>
            </li>
          {/each}
        </ul>
      {:else}
        <div
          class="goals-wrapper"
          class:right={si % 2 === 0}
          bind:this={sec.wrap}
        >
          <div
            class="tracker"
            class:hidden={!sec.inView}
            style:height="{Math.max(0, sec.trackerY)}px"
            aria-hidden="true"
          >
            <div class="trail" aria-hidden="true"></div>
            <div class="dot flex" aria-hidden="true">
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
          </div>
          <ul class="goals" class:right={si % 2 === 1}>
            {#each sec.goals as g, gi}
              <li
                class="goal container transition"
                class:active={sec.activeGoalIdx === gi}
                class:completed={(sec.activeGoalIdx !== null &&
                  gi < sec.activeGoalIdx) ||
                  sec.finished}
                bind:this={g.ref}
                id="goal-{g.id}"
              >
                <h4>{g.name}</h4>
                <p>{g.description}</p>
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
    gap: 3rem;

    section {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;
      max-width: 70rem;

      .goals-wrapper {
        position: relative;
        padding-inline: 1rem 0;

        .tracker {
          position: absolute;
          top: 0;
          left: 0.5rem;
          width: 1rem;
          height: 0;
          transition: height 0.3s linear;
          pointer-events: none;

          .trail {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0.5rem;
            height: 100%;
            background: linear-gradient(
              to bottom,
              rgba(0, 185, 55, 0),
              rgba(75, 112, 50, 1)
            );
          }

          .dot {
            position: absolute;
            bottom: -0.5rem; // half of dot size
            left: 50%;
            transform: translateX(-50%);
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            @include deep-green;

            svg {
              width: 75%;
              height: 75%;
              fill: none;
              stroke: $white;
            }
          }
        }

        &.right {
          padding-inline: 0 1rem;

          .tracker {
            left: auto;
            right: 0.5rem;
          }
        }
      }

      .goals {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        &.right {
          align-items: flex-end;
          text-align: right;
        }

        &.upcoming {
          align-items: center;
          text-align: center;
        }

        .goal {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          @include gray-border;

          h4 {
            font-family: $font-sans;
            transition: color 0.3s ease-in-out;
          }

          p {
            text-align: left;
            opacity: 0.9;
            transition: color 0.3s ease-in-out;

            @include respond-up("tablet") {
              text-align: center;
            }
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
      }
    }
  }

  :global(body.dark) {
    .roadmap {
      section {
        .goals-wrapper {
          .tracker {
            .trail {
              background: linear-gradient(
                to bottom,
                rgba(75, 112, 50, 0),
                rgba(0, 185, 55, 1)
              );
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
    }
    .trail {
      transition: none;
    }
  }
</style>
