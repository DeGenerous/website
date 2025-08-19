<script lang="ts">
  import typeWrite from "@utils/typewriter";
  import { onMount } from "svelte";

  let tagline = $state<HTMLHeadingElement>();
  let subtitle = $state<HTMLHeadingElement>();
  let hidden = $state<boolean>(true);

  onMount(() => {
    subtitle!.innerText = "";
    typeWrite(tagline!, "The Potentials").then(() =>
      typeWrite(subtitle!, "1,000 Evolutionary NFTs").then(() => {
        hidden = false;
      })
    );
  });
</script>

<section class="flex">
  <h1 bind:this={tagline}>The Potentials</h1>
  <img src="/investors/potentials.webp" alt="The Potentials" class="fade-in" />
  <h3 bind:this={subtitle}>1,000 Evolutionary NFTs</h3>
  <article class="pad fade-in" class:hidden>
    The heart of our ecosystem that reaps the most benefits:
    <ul class="flex pad">
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
  </article>
  <div class="flex-row gap-8 fade-in" class:hidden>
    <a
      class="icon-link flex void-btn"
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
      class="icon-link flex void-btn"
      href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
      aria-label="Magic Eden"
    >
      <img src="/icons/magiceden.png" alt="Magic Eden" />
    </a>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .hidden {
    display: none;
  }

  section {
    h1 {
      @include light-blue(1, text);
    }

    img {
      width: 100vw;
    }

    article {
      text-align: left;

      ul {
        list-style-type: disc;
        align-items: flex-start;
        padding-left: 2rem;

        li b {
          text-shadow: none;
          @include dark-blue(1, text);
        }
      }
    }

    div {
      a {
        &.icon-link {
          width: 2.5rem;

          img {
            width: inherit;
          }
        }
      }
    }
  }

  :global(body.dark) {
    section {
      h1 {
        @include cyan(1, text);
      }
      ul li b {
        text-shadow: none;
        @include white-txt(1);
      }
    }
  }
</style>
