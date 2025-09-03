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
              class:completed={sec.activeGoalIdx !== null &&
                gi < sec.activeGoalIdx}
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
            style:transform="translateY({sec.trackerY}px)"
            aria-hidden="true"
          >
            <span></span>
          </div>
          <div
            class="trail"
            class:hidden={!sec.inView}
            style:height="{Math.max(0, sec.trackerY)}px"
            aria-hidden="true"
          ></div>
          <ul class="goals" class:right={si % 2 === 1}>
            {#each sec.goals as g, gi}
              <li
                class="goal container"
                class:active={sec.activeGoalIdx === gi}
                class:completed={sec.activeGoalIdx !== null &&
                  gi < sec.activeGoalIdx}
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

      .goals-wrapper {
        position: relative;
        padding-inline: 2rem 0;

        .tracker {
          position: absolute;
          top: 0;
          left: 0.25rem;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: transform 100ms linear;
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
          pointer-events: none;
          @include light-blue(0.25);

          span {
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            @include blue(1, bg, bright);
          }
        }

        .trail {
          position: absolute;
          top: 0;
          width: 4px;
          height: 0;
          border-radius: 999px;
          background: linear-gradient(
            to bottom,
            rgba(56, 117, 250, 0.5),
            rgba(56, 117, 250, 0.2)
          );
          transition: height 120ms linear;
          z-index: 0;
          pointer-events: none;

          left: 0.875rem;
          transform: translateX(-50%);
        }

        &.right {
          padding-inline: 0 2rem;

          .tracker {
            left: auto;
            right: 0.25rem;
          }

          .trail {
            left: unset;
            right: 0.875rem;
            transform: translateX(50%);
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
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          @include gray-border;

          h4 {
            font-family: $font-sans;
          }

          p {
            text-align: left;
            opacity: 0.9;
          }

          &.active {
            @include light-blue(0.1);
          }

          &.completed:not(.active) {
            opacity: 0.5;
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
