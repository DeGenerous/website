<script lang="ts">
  import Tagline from "@components/home/Tagline.svelte";
  import Video from "@components/home/Video.svelte";
  import CTA from "@components/home/CTA.svelte";
  import Conexus from "@components/home/Conexus.svelte";
  import Collabs from "@components/home/Collabs.svelte";
  import Built from "@components/home/Built.svelte";
  import Shape from "@components/home/Shape.svelte";
  import Tweets from "@components/home/Tweets.svelte";

  function scrollToVideo() {
    window.scrollTo({ top: window.innerHeight + 5 * 16, behavior: "smooth" });
  }

  const onscroll = (event: Event) => {
    console.log(event);
  };
</script>

<svelte:window {onscroll} />

<Tagline />

<Video />

<CTA />

<Conexus />
<Collabs />

<Built />

<Shape />

<Tweets />

<style>
  :global(main) {
    padding-top: 0 !important;
    padding-inline: 0 !important;
    gap: 5rem !important;

    :global(h5) {
      font-weight: normal !important;
    }
  }
</style>
