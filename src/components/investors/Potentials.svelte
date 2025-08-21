<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  onMount(() => typeWrite(tagline!, "The Potentials"));
</script>

<section class="flex">
  <h1 bind:this={tagline}>The Potentials</h1>
  <article class="container">
    <h3>1,000 Evolutionary NFTs</h3>
    <img
      class="round-8"
      src="/investors/potentials.webp"
      alt="The Potentials"
    />
    The heart of our ecosystem that reaps the most benefits:
    <ul class="flex">
      <li>
        <b>On‑chain evolution:</b> The avatars’ artwork, traits, and rarity transform
        with the decisions the owners make
      </li>
      <li>
        <b>Governance power:</b> Potentials holders vote on which stories and platform
        features are admitted to CoNexus - shaping the product in real time
      </li>
      <li>
        <b>Premium utility:</b> Holders receive prioritized free access to all betas
        and live platforms, exclusive CoNexus storylines, custom video games, preferential
        pricing & rewards. They also star as characters in our franchise’s series
        (watched by millions) and govern its storyline.
      </li>
      <li>
        <b>Proven rewards:</b> Multiple partner-project airdrops have been delivered
        to the NFT holders, and our upcoming token will be distributed to Potentials
        first. Staking rewards are coming soon as well
      </li>
    </ul>
    Owning a Potential places you at the center of our growth and direction.
    <span class="flex-row">
      <a
        class="icon-link flex void-btn nohover-link"
        href="https://opensea.io/collection/potentials-eth"
        aria-label="OpenSea"
      >
        <img src="/icons/opensea.png" alt="OpenSea" />
      </a>
      <a
        class="button-anchor"
        href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
      >
        Unlock Your Potential
      </a>
      <a
        class="icon-link flex void-btn nohover-link"
        href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
        aria-label="Magic Eden"
      >
        <img src="/icons/magiceden.png" alt="Magic Eden" />
      </a>
    </span>
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  article {
    text-align: left;

    h3 {
      font-family: $font-sans;
    }

    ul {
      list-style-type: disc;
      align-items: flex-start;
      padding-left: 2rem;
    }

    span {
      a {
        font-family: $font-sans;

        &.icon-link {
          width: 2.5rem;

          img {
            width: inherit;
          }

          &:hover,
          &:focus,
          &:active {
            @include scale;
            @include bright;
          }
        }
      }
    }
  }
</style>
