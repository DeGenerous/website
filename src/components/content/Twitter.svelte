<script>
  import { onMount } from "svelte";
  import observeElement from "@utils/observer";
  import posts from "@constants/twitter";

  let loadingWrapper1;
  let loadingWrapper2;
  let loadingWrapper3;
  let tweetsWrapper;
  let loadedTweets = false;

  onMount(() => {
    observeElement(loadingWrapper1, null, createTweets);
  });

  function createTweets() {
    if (loadedTweets) return;

    const tweets = document.querySelectorAll(".tweet");
    Array.from(tweets).map((span) => {
      twttr.widgets.createTweet(span.innerHTML, span.parentElement, {
        theme: "dark",
      });
    });

    setTimeout(() => {
      loadingWrapper1.style.display = "none";
      loadingWrapper2.style.display = "block";

      setTimeout(() => {
        loadingWrapper2.style.display = "none";
        loadingWrapper3.style.display = "block";

        setTimeout(() => {
          loadingWrapper3.style.display = "none";
          tweetsWrapper.style.display = "flex";
        }, 3000);
      }, 3000);
    }, 3000);

    loadedTweets = true;
  }
</script>

<h1>Highlighted Tweets</h1>

<h3 bind:this={loadingWrapper1}>Syncing with the network grid...</h3>
<h3 class="hidden" bind:this={loadingWrapper2}>
  Fetching the latest updates...
</h3>
<h3 class="hidden" bind:this={loadingWrapper3}>
  Bringing the conversation to you...
</h3>

<section class="flex-box" bind:this={tweetsWrapper}>
  {#each posts as postID}
    <div>
      <span class="tweet">{postID}</span>
    </div>
  {/each}
</section>

<style>
  h1 {
    opacity: 0;
    animation: fadeIn 0.3s 5s ease-in-out forwards;
  }

  section {
    display: none;
    width: 100vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    padding-inline: 1vw;
    gap: 1vw;
    overflow-x: scroll;
    transform: rotateX(180deg);
    opacity: 0;
    animation: fadeIn 0.3s 5s ease-in-out forwards;
  }

  div {
    min-width: 30vw;
    transform: rotateX(180deg);
  }

  span {
    display: none;
  }

  section::-webkit-scrollbar {
    height: 0.75vw;
  }

  section::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }

  section::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to right,
      rgba(51, 226, 230, 0.15),
      rgba(51, 226, 230, 0.3),
      rgba(51, 226, 230, 0.15)
    );
    border-radius: 1vw;
    cursor: pointer;
  }

  section::-webkit-scrollbar-thumb:hover,
  section::-webkit-scrollbar-thumb:active {
    background: rgba(51, 226, 230, 0.5);
  }

  .hidden {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    section {
      width: 100%;
      padding-inline: 1em;
      gap: 1em;
    }

    section::-webkit-scrollbar {
      height: 0;
    }

    div {
      min-width: 85vw;
    }
  }
</style>
