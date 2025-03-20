<script>
  import { onMount } from "svelte";

  onMount(() => {
    setTimeout(createTweets, 2500);
  });

  function createTweets() {
    const tweets = document.querySelectorAll(".tweet");
    Array.from(tweets).map((span) => {
      twttr.widgets.createTweet(span.innerHTML, span.parentElement, {
        theme: "dark",
      });
    });
  }
</script>

<h1>Highlighted Tweets</h1>

<section class="flex-box">
  <div>
    <span class="tweet">1760742472844759111</span>
  </div>
  <div>
    <span class="tweet">1731660381997740165</span>
  </div>
  <div>
    <span class="tweet">1726994405989437864</span>
  </div>
  <div>
    <span class="tweet">1816970658632339546</span>
  </div>
  <div>
    <span class="tweet">1898767898744611204</span>
  </div>
  <div>
    <span class="tweet">1760434777432141850</span>
  </div>
  <div>
    <span class="tweet">1760086629996253534</span>
  </div>
</section>

<style>
  h1 {
    opacity: 0;
    animation: fadeIn 0.3s 5s ease-in-out forwards;
  }

  section {
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
