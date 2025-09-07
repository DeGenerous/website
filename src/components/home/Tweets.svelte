<script lang="ts">
  import { onMount } from "svelte";

  import posts from "@constants/twitter"; // array of tweet IDs (strings)
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";
  import { darkTheme } from "@stores/theme.svelte";

  let tagline = $state<HTMLHeadingElement>(); // for typewriter effect
  let loader = $state<HTMLHeadingElement>(); // loading message

  let root = $state<HTMLElement>(); // observed wrapper

  let loading = $state<boolean>(true);
  let loaded = false;
  let step = $state<number>(0);
  let stepTimer: number | undefined;

  const messages = [
    "Syncing with the network grid…",
    "Fetching the latest updates…",
    "Bringing the conversation to you…",
  ];

  let slots: (HTMLElement | null)[] = [];

  function assignSlot(node: HTMLElement, index: number) {
    slots[index] = node;
    return {
      destroy() {
        slots[index] = null;
      },
    };
  }

  // Load Twitter SDK once
  function loadTwitterSDK(): Promise<any> {
    if (typeof window === "undefined") return Promise.resolve();
    const w = window as any;
    if (w.twttr?.widgets) return Promise.resolve(w.twttr);

    return new Promise((resolve, reject) => {
      const existing = document.getElementById("twitter-wjs") as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", () => resolve(w.twttr), {
          once: true,
        });
        existing.addEventListener("error", reject, { once: true });
        return;
      }
      const s = document.createElement("script");
      s.id = "twitter-wjs";
      s.async = true;
      s.src = "https://platform.twitter.com/widgets.js";
      s.onload = () => resolve(w.twttr);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function hydrateTweets() {
    if (loaded) return;
    loaded = true;

    // Rotate loader messages while we fetch
    stepTimer = window.setInterval(() => {
      step = (step + 1) % messages.length;
      typeWrite(loader!, messages[step]);
    }, 3000);

    try {
      const twttr = await loadTwitterSDK();

      // Create embeds sequentially to reduce layout thrash
      for (let i = 0; i < posts.length; i++) {
        const host = slots[i];
        if (!host) continue;
        await twttr.widgets.createTweet(posts[i], host, {
          theme: $darkTheme ? "dark" : "light",
          dnt: true,
          align: "center",
        });
      }
    } catch (err) {
      console.error("Twitter failed to load:", err);
    } finally {
      loading = false;
      if (stepTimer) clearInterval(stepTimer);
    }
  }

  onMount(() => {
    observeElement(root!, null, () => {
      typeWrite(tagline!, "Highlighted Tweets");
    });
    hydrateTweets();
  });
</script>

<section class="flex" bind:this={root}>
  <h3 bind:this={tagline}>Highlighted Tweets</h3>

  {#if loading}
    <h5 class="fade-in" bind:this={loader}>Connecting with X...</h5>
  {/if}

  <span class="twitter-wrapper vert-scrollbar" class:loading-animation={loading}>
    <div class="tweets flex-row horiz-scrollbar" class:visible={!loading} aria-live="polite">
      {#each posts as id, i (id)}
        <article class="tweet-card">
          <div class="tweet-slot" use:assignSlot={i}></div>
        </article>
      {/each}
    </div>
  </span>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    .tweets {
      width: 100vw;
      align-items: stretch;
      justify-content: flex-start;
      margin-top: 0.5rem;
      padding-left: 1rem;
      overflow-x: auto;
      scroll-snap-type: x proximity;
      opacity: 0;
      transform: scale(0.9);
      transition: all 0.6s ease-in-out;

      &.visible {
        transform: rotateX(180deg) scale(1);
        opacity: 1;
      }

      .tweet-card {
        min-width: 85vw;
        scroll-snap-align: start;
        display: flex;
        transform: rotateX(180deg);

        .tweet-slot {
          width: 100%;
          height: auto;
          /* Twitter injects an iframe here */
        }
      }
    }

    $tweet-width: 550px;

    @include respond-up("small-desktop") {
      .twitter-wrapper {
        overflow-y: scroll;
        max-height: 40rem;
        border-radius: 1rem;
        -webkit-backdrop-filter: blur(1rem);
        backdrop-filter: blur(1rem);
        @include light-blue(0.1);
        @include gray-border;

        .tweets {
          width: auto;
          display: block;
          overflow: hidden;
          transform: none;
          scroll-snap-type: unset;
          margin-top: 0;
          padding-left: 0;
          max-width: calc(2 * $tweet-width - 200px);
          column-count: 2; /* adjust for your width */
          column-gap: 1rem;
          border-radius: 1rem;
          padding-inline: 1rem;

          &.visible {
            transform: none;
          }

          .tweet-card {
            min-width: unset;
            width: 100%;
            transform: none;
            scroll-snap-align: unset;
            display: inline-block; /* required inside columns */
            break-inside: avoid; /* don't split a card between columns */
            -webkit-column-break-inside: avoid; /* safari */

            .tweet-slot {
              width: auto;
            }
          }
        }
      }
    }

    @include respond-up("full-hd") {
      .twitter-wrapper .tweets {
        max-width: calc(3 * $tweet-width - 200px);
        column-count: 3;
      }
    }

    @include respond-up("quad-hd") {
      .twitter-wrapper .tweets {
        max-width: calc(4 * $tweet-width - 200px);
        column-count: 4;
      }
    }
  }

  :global(body.dark .twitter-wrapper) {
    @include respond-up("small-desktop") {
      background: linear-gradient(to right, rgba(1, 0, 32, 1), rgba(1, 0, 32, 0.75));
    }
  }
</style>
