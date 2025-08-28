<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import typeWrite from "@utils/typewriter";
  import SwitchSVG from "@components/icons/Switch.svelte";

  let tagline = $state<HTMLHeadingElement>();
  let scroller = $state<HTMLUListElement>();
  let sectionHeader = $state<HTMLHeadingElement>();

  const titles = ["Engineering", "Creative", "Growth"] as const;
  let currentIndex = $state<number>(0);

  let raf = 0;
  function onScroll() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      if (!scroller) return;
      const { scrollLeft, clientWidth } = scroller;
      const idx = Math.round(scrollLeft / clientWidth);
      currentIndex = Math.min(Math.max(idx, 0), titles.length - 1);

      typeWrite(sectionHeader!, titles[currentIndex]);
    });
  }

  function pageTo(index: number) {
    if (!scroller) return;
    currentIndex = index;
    scroller.scrollTo({
      left: index * scroller.clientWidth,
      behavior: "smooth",
    });
  }

  function scrollWrap(opts: { index?: number; dir?: 1 | -1 }) {
    if (opts.index !== undefined) return pageTo(opts.index);

    const next =
      (currentIndex + (opts.dir === 1 ? 1 : -1) + titles.length) %
      titles.length;

    pageTo(next);
  }

  onMount(() => {
    typeWrite(tagline!, "Core Team");
    if (scroller) scroller.scrollTo({ left: 0 });
  });

  onDestroy(() => cancelAnimationFrame(raf));
</script>

<section class="flex">
  <h1 bind:this={tagline}>Core&nbsp;Team</h1>

  <div class="team-wrapper container">
    <nav class="pad">
      <SwitchSVG onclick={() => scrollWrap({ dir: -1 })} absolute="left" />
      <h3 bind:this={sectionHeader}>Engineering</h3>
      <SwitchSVG
        onclick={() => scrollWrap({ dir: 1 })}
        right
        absolute="right"
      />
    </nav>

    <ul
      class="team flex-row pad horiz-scrollbar"
      bind:this={scroller}
      onscroll={onScroll}
    >
      <li class="flex">
        <ul class="flex">
          <li class="flex">
            <img src="/team/anusiem.jpg" alt="Anusiem John-Franklin" />
            <article class="flex">
              <h4>
                Anusiem&nbsp;John-Franklin <span>Lead Full-Stack Engineer</span>
              </h4>
              <p>
                Built high-throughput services in Rust, Go, and Python. Scaled
                fintech systems to 16M users; deep Azure, Kubernetes, and AI
                expertise.
              </p>
            </article>
          </li>
          <li class="flex">
            <img src="/team/dimon.jpg" alt="Dmytro Bryla" />
            <article class="flex">
              <h4>
                Dmytro&nbsp;Bryla <span>Senior Front-End &amp; UX Engineer</span
                >
              </h4>
              <p>
                Fluent in Astro, Svelte, React, NodeJS, and Solidity. Designs
                and builds pixel-perfect interfaces with thoughtful interactions
                and performance at the core.
              </p>
            </article>
          </li>
          <li class="flex">
            <img src="/team/vani.jpg" alt="Vani" />
            <article class="flex">
              <h4>Vani <span>Web3 Engineer</span></h4>
              <p>
                Hardware-to-Solidity polymath and multiple Ethereum Foundation
                hackathon winner. Designs secure, composable smart contracts.
              </p>
            </article>
          </li>
        </ul>
      </li>

      <li class="flex">
        <ul class="flex">
          <li class="flex">
            <img src="/team/cryptok.jpg" alt="Sean 'Cryptok' Dugan" />
            <article class="flex">
              <h4>
                Sean “Cryptok”&nbsp;Dugan <span
                  >Cinematics Director &amp; Producer</span
                >
              </h4>
              <p>
                Traditional and AI-film veteran. Produces and edits work from
                short ads to feature-length films viewed tens of millions of
                times, and has raised multi-million-dollar funding.
              </p>
            </article>
          </li>
          <li class="flex">
            <img src="/team/kit.jpg" alt="Kit" />
            <article class="flex">
              <h4>Kit <span>Art Director</span></h4>
              <p>
                Global illustrator with more than ten years of professional
                craft, officially backed by top Web3 orgs, marketplaces, and
                curators.
              </p>
            </article>
          </li>
        </ul>
      </li>

      <li class="flex">
        <ul class="flex">
          <li class="flex">
            <img src="/team/kyt.jpg" alt="Kyt" />
            <article class="flex">
              <h4>Kyt <span>Lead Ambassador</span></h4>
              <p>
                Twenty years in community building, content production, and
                strategy. Forges partnerships and empowers new voices on-chain.
              </p>
            </article>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="tabs flex-row pad-inline">
      {#each titles as title, i (title)}
        <button
          class="void-btn"
          class:active={i === currentIndex}
          onclick={() => scrollWrap({ index: i })}
          aria-label={"Scroll to " + title + " team section"}
        ></button>
      {/each}
    </ul>
  </div>

  <p class="auto-width pc-narrow">
    <i>
      Two contributors work under verified pseudonyms for security and
      competitive edge. Details are available to investors under NDA.
    </i>
  </p>

  <p class="auto-width pc-narrow">
    We’re not alone. Every week, we draw on the expertise of contractors,
    agencies, and advisors—from Web3 founders and legal counsel to branding
    specialists, storytellers, and AI engineers—who share our vision of
    community-owned storytelling.
  </p>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .team-wrapper {
    max-width: 95vw;
    padding: 0;

    nav {
      width: 100%;
      position: relative;
    }

    .team {
      align-items: flex-start;
      justify-content: flex-start;
      overflow-x: scroll;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      padding-top: 0;
      width: 100%;

      &::-webkit-scrollbar {
        height: 0;
      }

      li {
        flex: 0 0 100%; /* full viewport width “pages” */
        scroll-snap-align: center; /* snap each section’s center */
        scroll-snap-stop: always; /* don’t skip sections during momentum */

        ul {
          li {
            width: 100%;
            justify-content: flex-start;
            padding: 1rem;
            border-radius: 1rem;
            background-color: $white;
            @include gray-border;

            img {
              width: 100%;
              border-radius: 0.5rem;
              aspect-ratio: 1 / 1;
            }

            article {
              h4 {
                font-family: $font-sans;

                span {
                  display: block;
                  @include font(body);
                }
              }
            }

            @include respond-up(tablet) {
              flex-direction: row;

              img {
                width: 10rem;
              }

              article {
                align-items: flex-start;
                text-align: left;

                h4 {
                  span {
                    display: inline;
                    font: inherit;

                    &::before {
                      content: " — ";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .tabs {
      width: 100%;

      button {
        height: 0.25rem;
        min-height: unset;
        width: 100%;
        border-radius: 0.5rem;
        @include light-blue(0.1);

        &.active {
          @include light-blue(0.5);
        }
      }
    }

    @include respond-up(small-desktop) {
      max-width: calc(100% - 200px);
    }

    @include respond-up(large-desktop) {
      max-width: 70rem;
    }
  }

  :global(body.dark) {
    .team-wrapper {
      ul {
        li {
          ul {
            li {
              @include navy;
            }
          }
        }
      }
    }
  }
</style>
