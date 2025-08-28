<script lang="ts">
  import { toastStore } from "@stores/toast.svelte";

  import VoidArrowSVG from "@components/icons/VoidArrow.svelte";
  import OpenSVG from "@components/icons/Open.svelte";
  import CopySVG from "@components/icons/Copy.svelte";

  let showInstagram = $state<boolean>(false);
  let showTwitter = $state<boolean>(false);

  const copyContract = (contract: string) => {
    navigator.clipboard.writeText(contract);
    toastStore.show(
      `Copied contract address: ${contract.slice(0, 6)}...${contract.slice(-4)}`
    );
  };
</script>

<section id="join" class="flex full-height">
  <h2>Join the Generous Degens</h2>

  <p class="auto-width pc-narrow">
    Open communication, honesty, and on‑chain transparency guide all of the
    work, and we welcome anyone who shares our commitment to innovation,
    empowerment, and measurable impact to help write the next chapter.
  </p>

  <a
    class="discord button-anchor"
    href="https://degenerousdao.com/join"
    target="_blank"
    rel="noopener noreferrer"
    role="button"
  >
    Join us on Discord
  </a>

  <ul class="socials flex-row flex-wrap">
    <li>
      <div>
        <button
          class="void-btn flex-row"
          onclick={() => (showInstagram = !showInstagram)}
        >
          Instagram
          <VoidArrowSVG position={null} animation={false} inheritColor={true} />
        </button>
        <span class="flex gap-8 transition" class:hidden={!showInstagram}>
          <a
            class="nohover-link flex-row"
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            @degenerousdao
            <OpenSVG />
          </a>
          <a
            class="nohover-link flex-row"
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            @conexus_stories
            <OpenSVG />
          </a>
        </span>
      </div>
    </li>
    <li>
      <div>
        <button
          class="void-btn flex-row"
          onclick={() => (showTwitter = !showTwitter)}
        >
          X (Twitter)
          <VoidArrowSVG position={null} animation={false} inheritColor={true} />
        </button>
        <span class="flex gap-8 transition" class:hidden={!showTwitter}>
          <a
            class="nohover-link flex-row"
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            @degenerousdao
            <OpenSVG />
          </a>
          <a
            class="nohover-link flex-row"
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            @DGRSLions
            <OpenSVG />
          </a>
        </span>
      </div>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="/community"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok
        <OpenSVG />
      </a>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="/community"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
        <OpenSVG />
      </a>
    </li>
  </ul>
</section>

<section id="links" class="flex full-height">
  <h3 class="auto-width">
    You’ll also find us across key platforms and protocols
  </h3>
  <p class="auto-width">
    Below are verified links to key DGRS and non-DGRS locations, as well as the
    official contract addresses and supported chains relevant to your Potential:
  </p>

  <ul class="links flex-row flex-wrap auto-width">
    <li>
      <a
        class="nohover-link flex-row"
        href="https://magiceden.io/collections/ethereum/potentials-eth"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="flex">
          <h5>Magic Eden</h5>
          <p>(Ethereum &ndash; trading)</p>
        </span>
        <OpenSVG />
      </a>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="https://opensea.io/collection/potentials-eth"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="flex">
          <h5>OpenSea</h5>
          <p>(Ethereum &ndash; trading)</p>
        </span>
        <OpenSVG />
      </a>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="https://singular.app/collectibles/base/0x111e0861baa9d479cff55d542e5a9e4205012bbe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="flex">
          <h5>Singular</h5>
          <p>(Base &ndash; customizing)</p>
        </span>
        <OpenSVG />
      </a>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="https://conexus.degenerousdao.com/dashboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="flex">
          <h5>OmniHub</h5>
          <p>(Base &amp; more &ndash; no gas, asset management)</p>
        </span>
        <OpenSVG />
      </a>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="https://governance.degenerousdao.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="flex">
          <h5>Governance Hub</h5>
          <p>(Base &ndash; franchise voting)</p>
        </span>
        <OpenSVG />
      </a>
    </li>
    <li>
      <a
        class="nohover-link flex-row"
        href="https://conexus.degenerousdao.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="flex">
          <h5>CoNexus</h5>
          <p>(Base &amp; more &ndash; no gas, storytelling)</p>
        </span>
        <OpenSVG />
      </a>
    </li>
  </ul>

  <div class="contracts container">
    <h4>Verified Contract Addresses</h4>
    <button
      class="void-btn flex-row flex-wrap"
      onclick={() => copyContract("0xFA511D5c4CCe10321e6E86793cC083213c36278E")}
    >
      <h5>Ethereum:</h5>
      <code>0xFA511D5c4CCe10321e6E86793cC083213c36278E</code>
      <CopySVG inheritColor={true} />
    </button>
    <button
      class="void-btn flex-row flex-wrap"
      onclick={() => copyContract("0x111e0861BaA9D479cff55D542E5A9e4205012bBe")}
    >
      <h5>Base:</h5>
      <code>0x111e0861BaA9D479cff55D542E5A9e4205012bBe</code>
      <CopySVG inheritColor={true} />
    </button>
    <article>
      Avoid completing any transactions on unsupported chains or apps. For
      example, a known scam Potentials collection is circulating on Polygon.
      Only interact with the links and addresses listed above &mdash;
      we&rsquo;ll never contact you to interact with contracts elsewhere.
    </article>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .discord {
    @include font(h5);
  }

  .socials {
    padding-top: 4rem;
    gap: 4rem;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      min-width: 75%;
      @include font(h5);

      a,
      button {
        width: 100%;
        justify-content: space-between;
        gap: 0;
        font-size: inherit;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        stroke: $dark-blue;
        @include light-blue(0.1);
        @include dark-blue(1, text);
        @include gray-border;

        &:hover,
        &:active,
        &:focus {
          stroke: $blue;
          @include light-blue(0.25);
          @include blue(1, text);
        }
      }

      div {
        position: relative;
        width: 100%;

        button {
          background-color: transparent;
          @include dark-blue(1, text);

          &:hover,
          &:active,
          &:focus {
            @include light-blue(0.1);
          }
        }

        span {
          width: 100%;
          z-index: 1;
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          opacity: 1;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background-color: white;
          @include box-shadow;

          &.hidden {
            top: -100%;
            opacity: 0;
            pointer-events: none;
          }

          a {
            padding-inline: 0.5rem;
          }
        }
      }
    }

    @include respond-up(tablet) {
      padding-top: 0;
      gap: 1rem;

      > li {
        min-width: 15rem;
      }
    }
  }

  .contracts {
    @include respond-up(tablet) {
      align-items: flex-start;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: white;
      stroke: $dark-blue;
      @include gray-border;

      h5 {
        color: inherit;
      }

      code {
        max-width: 75vw;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &,
      & * {
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }

      &:hover,
      &:active,
      &:focus {
        stroke: $light-blue;
        @include light-blue(1, text);
      }
    }

    article {
      text-align: left;
      opacity: 0.5;
      @include font(caption);
    }
  }

  .links {
    margin-block: 2rem;

    li {
      width: 100%;

      a {
        align-items: flex-start;
        justify-content: space-between;
        padding: 0.5rem;
        border-radius: 0.5rem;
        stroke: $dark-blue;
        @include gray-border;

        h5 {
          color: inherit;
        }

        span {
          align-items: flex-start;
          gap: 0.5rem;

          p {
            opacity: 0.5;
            text-align: left;
          }
        }

        &:hover,
        &:active,
        &:focus {
          stroke: $blue;
          @include blue(1, text);
          @include light-blue(0.1);
        }
      }

      @include respond-up(tablet) {
        width: calc(50% - 1rem);
      }

      @include respond-up(small-desktop) {
        width: calc(33% - 1rem);
        max-width: 30rem;
      }
    }
  }

  :global(body.dark) {
    .socials {
      > li {
        a {
          stroke: $cyan;
          @include dark-blue;
          @include cyan(1, text);

          &:hover,
          &:active,
          &:focus {
            stroke: $dark-blue;
            @include cyan;
            @include dark-blue(1, text);
          }
        }

        div {
          button {
            stroke: $white;
            @include white-txt;
            @include dark-blue;

            &:hover,
            &:active,
            &:focus {
              stroke: $cyan;
              @include navy;
              @include cyan(1, text);
            }
          }

          span {
            @include navy;
          }
        }
      }
    }

    .links {
      li {
        a {
          stroke: $white;
          @include dark-blue;

          &:hover,
          &:active,
          &:focus {
            stroke: $cyan;
            @include cyan(1, text);
            @include navy;
          }
        }
      }
    }

    .contracts {
      button {
        background-color: transparent;
        stroke: $white;

        &:hover,
        &:active,
        &:focus {
          stroke: $cyan;
          @include cyan(1, text);
        }
      }
    }
  }
</style>
