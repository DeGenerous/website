<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";
  import { enterpriseURL } from "@constants/media";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    resetTitle();
    observeElement(
      section!,
      "visible",
      () => typeWrite(tagline!, "CSR with Real Impact"),
      resetTitle,
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section id="csr" class="flex appear-left-observer" bind:this={section}>
  <h2 bind:this={tagline}>CSR with Real Impact</h2>
  <div class="container">
    <img
      class="round-8"
      src={enterpriseURL + "/csr.gif"}
      alt="CSR with Real Impact"
      loading="lazy"
      decoding="async"
    />
    <article class="flex">
      <p>
        Activate your company’s purpose through fully branded service missions in partnership with
        <a href="https://www.lionsclubs.org" target="_blank"> Lions Clubs International </a>
        (1.4M members) and enterprises like Johnson & Johnson.
      </p>
      <p>
        We help Lions manage logistics, partnerships, and both Web2 and blockchain donation flows,
        ensuring that
        <b>100% of contributions</b>
        reach those in need.
      </p>
      <p>
        Each annual charity expedition is organized with the help of local volunteers and recorded
        for transparency, driving over 10 million views and raising millions more for charity.
        Whether you join our next global mission or want a bespoke local program, we’ll guide you
        and ensure every detail reflects your brand values.
      </p>
      <p>
        <a href="mailto:charity@degenerousdao.com" target="_blank"> Join our mission </a>
        and make a measurable difference.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    img {
      width: 100%;
      @include gray-border;
    }

    article {
      align-items: flex-start;
      text-align: left;
    }

    @include respond-up(small-desktop) {
      img {
        width: 30rem;
      }
    }

    @include respond-up(full-hd) {
      flex-direction: row;
    }
  }

  :global(#csr.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
