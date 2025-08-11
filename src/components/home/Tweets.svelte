<script lang="ts">
  import { onMount } from "svelte";

  import posts from "@constants/twitter"; // array of tweet IDs (strings)
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>(); // for typewriter effect
  let loader = $state<HTMLHeadingElement>(); // loading message

  let root = $state<HTMLElement>(); // observed wrapper
  let slots: (HTMLElement | null)[] = []; // embed hosts, one per tweet

  let loading = $state<boolean>(true);
  let loaded = false;
  let step = $state<number>(0);
  let stepTimer: number | undefined;

  const messages = [
    "Syncing with the network grid…",
    "Fetching the latest updates…",
    "Bringing the conversation to you…",
  ];

  // Load Twitter SDK once
  function loadTwitterSDK(): Promise<any> {
    if (typeof window === "undefined") return Promise.resolve();
    const w = window as any;
    if (w.twttr?.widgets) return Promise.resolve(w.twttr);

    return new Promise((resolve, reject) => {
      const existing = document.getElementById(
        "twitter-wjs"
      ) as HTMLScriptElement | null;
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
          theme: document.body.classList.contains("dark") ? "dark" : "light",
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

<section bind:this={root}>
  <h3 bind:this={tagline}>Highlighted Tweets</h3>

  {#if loading}
    <h5 class="fade-in" bind:this={loader}>Connecting with X...</h5>
  {/if}

  <div
    class="tweets horiz-scrollbar"
    class:visible={!loading}
    aria-live="polite"
  >
    {#each posts as id, i}
      <article class="tweet-card">
        <!-- ✅ Valid binding: MemberExpression -->
        <div class="tweet-slot" bind:this={slots[i]}></div>
      </article>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    width: 100vw;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  h5 {
    margin-block: 0.5rem;
  }

  .tweets {
    display: flex;
    align-items: stretch;
    gap: 1rem;
    margin-top: 0.5rem;
    padding-left: 1rem;
    overflow-x: auto;
    // scroll-snap-type: x proximity;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.6s ease-in-out;

    &.visible {
      transform: rotateX(180deg) scale(1);
      opacity: 1;
    }
  }

  .tweet-card {
    min-width: clamp(20rem, 50vw, 32rem);
    scroll-snap-align: start;
    display: flex;
    transform: rotateX(180deg);
  }

  .tweet-slot {
    width: 100%;
    /* Twitter injects an iframe here */
  }

  /* Desktop scrollbar polish */
  // @media (hover: hover) {
  //   .tweets::-webkit-scrollbar {
  //     height: 0.6rem;
  //   }
  //   .tweets::-webkit-scrollbar-track {
  //     background-color: rgba(0, 0, 0, 0.1);
  //   }
  //   .tweets::-webkit-scrollbar-thumb {
  //     background: linear-gradient(
  //       90deg,
  //       rgba(51, 226, 230, 0.15),
  //       rgba(51, 226, 230, 0.3),
  //       rgba(51, 226, 230, 0.15)
  //     );
  //     border-radius: 0.75rem;
  //   }
  //   .tweets::-webkit-scrollbar-thumb:hover {
  //     background: rgba(51, 226, 230, 0.5);
  //   }
  // }

  /* Mobile sizing */
  @media (max-width: 600px) {
    .tweet-card {
      min-width: 85vw;
    }
    .tweets {
      padding: 0 0.75rem 1rem;
      gap: 0.75rem;
    }
  }
</style>
