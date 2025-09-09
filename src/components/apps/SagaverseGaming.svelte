<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import { sagaverseURL } from "@constants/media";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () => setTimeout(() => typeWrite(tagline!, "Sagaverse Gaming"), 1500);

  onMount(startTyping);
</script>

<section class="flex pc-narrow">
  <h1 bind:this={tagline}>Sagaverse Gaming</h1>
  <p class="auto-width">
    Sagaverse Gaming consists of custom games and events that seamlessly integrate with the
    Dischordian Saga's lore and enhance the NFTs' narrative.
  </p>
  <div class="flex">
    <div class="container">
      <img src="/apps/sagaverse/B4N.gif" alt="Battle for Nexon" loading="lazy" decoding="async" />
      <article class="flex">
        <h3>Battle for Nexon</h3>
        <p>
          Play as Agent Zero, humanity's last hope in the Intelligence Wars. On a mission to
          assassinate an AI warlord infamous for decimating human colonies, you journey to the
          planet of Nexon. However, your ship gets surrounded by the General's AI fleet, forcing you
          into an unexpected battle.
        </p>
        <a
          class="button-anchor"
          href="https://arcade.degenerousdao.com/Battle-for-Nexon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Now
        </a>
      </article>
    </div>

    <div class="container">
      <img class="tall" src={`${sagaverseURL}/AA.gif`} alt="Ark Assassin" loading="lazy" decoding="async" />
      <article class="flex">
        <h3>Ark Assassin</h3>
        <p>
          Can you successfully navigate the temple, destroy the AI security forces, and make it to
          the inner chambers to eliminate your target? Welcome to "Ark Assassin", where the line
          between antiquity and the future blurs, challenging players to rewrite history.
        </p>
        <a
          class="button-anchor"
          href="https://arcade.degenerousdao.com/Ark-Assassin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Now
        </a>
      </article>
    </div>

    <div class="container">
      <img src={`${sagaverseURL}/LS.gif`} alt="Last Stand" loading="lazy" decoding="async" />
      <article class="flex">
        <h3>Last Stand</h3>
        <p>
          Play as Iron Lion, the greatest soldier of the human Insurgency, as you're up against
          waves of AI robots on the planet of Veridian Prime. You're left all alone with a mission
          to save time for Agent Zero, as humanity's only chance for a future.
        </p>
        <a
          class="button-anchor"
          href="https://arcade.degenerousdao.com/Iron-Lion-Last-Stand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Now
        </a>
      </article>
    </div>

    <div class="collab container">
      <span class="flex">
        <img src={`${sagaverseURL}/TDZ.gif`} alt="The Dark Zoo" loading="lazy" decoding="async" />
        <article class="flex">
          <h3>GLMR Apes: The Dark Zoo</h3>
          <p>
            In a dystopian future, an ape named Generous Gibbon is captured and imprisoned in a
            high-tech zoo controlled by the malevolent AI overlord, the Collector. Guarded by a
            menacing robotic monster known as the Keeper, Generous must use its agility and wit to
            navigate the treacherous levels of the zoo prison.
          </p>
          <a
            class="button-anchor"
            href="https://playtge.com/dgrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Now
          </a>
        </article>
      </span>
      <hr />
      <p>
        This game came from a cross-chain multi-platform partnership collaborating on CoNexus and on
        TGE - with the biggest NFT collection on Moonbeam Network and the first game on the leading
        Polkadot chain, with hundreds of active players.
      </p>
      <p>
        To learn more about the gameplay, you may read
        <a
          href="https://the-great-escape.gitbook.io/the-great-escape/the-basics/gameplay"
          target="_blank"
        >
          their docs
        </a>.
      </p>
      <span class="flex-row">
        <a href="https://www.glmrapes.com/" target="_blank" rel="noopener noreferrer">
          GLMR Apes
        </a>
        <a href="https://www.playtge.com/" target="_blank" rel="noopener noreferrer">
          The Great Escape
        </a>
      </span>
    </div>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    padding-top: 6rem;

    > div {
      .container {
        img {
          width: 100%;
          border-radius: 0.5rem;
          @include gray-border;

          &.tall {
            max-height: 80vh;
          }
        }

        article {
          h3,
          a {
            font-family: $font-sans;
          }
        }

        @include respond-up(small-desktop) {
          flex-direction: row;

          img {
            width: 40%;
            max-width: 30rem;

            &.tall {
              width: auto;
              height: 30rem;
            }
          }

          article {
            p {
              text-align: left;
            }
          }

          &.collab {
            flex-direction: column;

            span {
              flex-direction: row;
            }
          }
        }
      }
    }
  }
</style>
