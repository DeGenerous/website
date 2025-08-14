<script lang="ts">
  import Tagline from "@components/home/Tagline.svelte";
  import Video from "@components/home/Video.svelte";
  import CTA from "@components/home/CTA.svelte";
  import Conexus from "@components/home/Conexus.svelte";
  import Collabs from "@components/home/Collabs.svelte";
  import Built from "@components/home/Built.svelte";
  import Shape from "@components/home/Shape.svelte";
  import Tweets from "@components/home/Tweets.svelte";
</script>

<main class="flex">
  <Tagline />
  <Video />
  <CTA />
  <Conexus />
  <Collabs />
  <hr class="mar-block" />
  <Built />
  <hr class="mar-block" />
  <Shape />
  <hr class="mar-block" />
  <Tweets />
</main>
