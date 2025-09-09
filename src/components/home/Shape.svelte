<script lang="ts">
  import { onMount } from "svelte";

  import { trailerURL } from "@constants/media";
  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    resetTitle();
    observeElement(
      section!,
      "visible",
      () => typeWrite(tagline!, "Shape The World You Dream Of"),
      () => {}, // no reset
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section class="shape-world flex pad-inline" bind:this={section}>
  <h3 class="auto-width" bind:this={tagline}>Shape The World You Dream Of</h3>

  <div class="container">
    <video class="round transition" controls aria-label="CoNexus showcase video">
      <source src={trailerURL + "/conexus.mp4"} type="video/mp4" />
      <track kind="captions" />``
    </video>

    <article class="flex">
      <p>
        Step into a playground of endless possibility, where your wildest visions come to life on a
        foundation built for boundless creativity.
      </p>

      <p>
        Whether you’re weaving epic tales, crafting unforgettable games, or launching the next
        breakthrough app, DGRS hands you the keys to build, iterate, and amaze - no limits attached.
      </p>

      <p>Join a community of dreamers and doers and watch your ideas reshape reality.</p>

      <a
        class="button-anchor"
        href="http://degenerousdao.com/join"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join the Community
      </a>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .shape-world {
    margin-block: 5rem;

    @include respond-up("small-desktop") {
      padding-inline: 100px;
    }

    .container {
      video {
        width: 100%;
        height: auto;
        opacity: 0.1;
        filter: blur(1rem);
        transition-duration: 0.6s;
      }

      @include respond-up("small-desktop") {
        flex-direction: row;

        video {
          width: 30rem;
        }

        article {
          align-items: flex-start;

          p {
            text-align: left;
          }
        }
      }

      @include respond-up("large-desktop") {
        video {
          width: 35rem;
        }

        article {
          gap: 2rem;
        }
      }
    }
  }

  :global(.shape-world.visible video) {
    opacity: 1 !important;
    filter: none !important;
  }
</style>
