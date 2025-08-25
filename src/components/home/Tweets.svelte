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
    class="tweets flex-row horiz-scrollbar"
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
    @include respond-up("small-desktop") {
      padding-top: 1rem;
      min-height: 100vh;
    }

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
          /* Twitter injects an iframe here */
        }

        @include respond-up("small-desktop") {
          min-width: clamp(20rem, 50vw, 32rem);
        }
      }
    }
  }
</style>
