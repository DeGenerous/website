<script lang="ts">
  import { onMount } from "svelte";
  import observeElement from "@utils/observer";

  let potential: HTMLDivElement;
  let interval: number;

  let bg: HTMLDivElement;
  let back: HTMLDivElement;
  let outfit: HTMLDivElement;
  let arms: HTMLDivElement;
  let mask: HTMLDivElement;
  let weapon: HTMLDivElement;
  let badge1: HTMLDivElement;
  let badge2: HTMLDivElement;
  let badge3: HTMLDivElement;

  onMount(() => {
    animatePotential();
    observeElement(potential, null, setAnimation, resetAnimation);
  });

  const setAnimation = () => {
    interval = setInterval(animatePotential, 1500);
  };

  const resetAnimation = () => {
    clearInterval(interval);
  };

  const animatePotential = () => {
    console.log("animation");
    switchItem(outfit, 4);
    switchItem(arms, 4);
    switchItem(back, 4);
    switchItem(bg, 5);
    switchItem(mask, 4);
    switchItem(weapon, 5);
    switchItem(badge1);
    switchItem(badge2);
    switchItem(badge3);
  };

  function switchItem(container: HTMLDivElement, max: number = 3) {
    Array.from(container.children).map((node) => {
      const image = node as HTMLImageElement;
      image!.style.opacity = "0";
    });

    const element = container.children[
      getRandomNumber(0, max - 1)
    ] as HTMLImageElement;

    element.style.opacity = "1";
  }

  function getRandomNumber(min: number = 0, max: number = 3) {
    min = Math.ceil(1);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let showText: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-to-interactive-role -->
<section class="flex-box blur">
  <img class="potentials-banner" src="/potentials.webp" alt="Potentials" />

  <hr />

  <div class="flex-box potential-wrapper">
    <div class="potential" bind:this={potential} role="button" tabindex="0">
      <div bind:this={bg}>
        <img src="/potential/bg/1.webp" alt="Background" />
        <img src="/potential/bg/2.webp" alt="Background" />
        <img src="/potential/bg/3.webp" alt="Background" />
        <img src="/potential/bg/4.webp" alt="Background" />
        <img src="/potential/bg/5.webp" alt="Background" />
      </div>

      <div bind:this={back}>
        <img src="/potential/back/1.webp" alt="Back Accessory" />
        <img src="/potential/back/2.webp" alt="Back Accessory" />
        <img src="/potential/back/3.webp" alt="Back Accessory" />
        <img src="/potential/back/4.webp" alt="Back Accessory" />
      </div>

      <img style:opacity={"1"} src="/potential/static/body.webp" alt="Body" />

      <div bind:this={outfit}>
        <img src="/potential/outfit/1.webp" alt="Outfit" />
        <img src="/potential/outfit/2.webp" alt="Outfit" />
        <img src="/potential/outfit/3.webp" alt="Outfit" />
        <img src="/potential/outfit/4.webp" alt="Outfit" />
      </div>

      <div bind:this={arms}>
        <img src="/potential/arms/1.webp" alt="Arm Accessory" />
        <img src="/potential/arms/2.webp" alt="Arm Accessory" />
        <img src="/potential/arms/3.webp" alt="Arm Accessory" />
        <img src="/potential/arms/4.webp" alt="Arm Accessory" />
      </div>

      <div bind:this={mask}>
        <img src="/potential/mask/1.webp" alt="Mask" />
        <img src="/potential/mask/2.webp" alt="Mask" />
        <img src="/potential/mask/3.webp" alt="Mask" />
        <img src="/potential/mask/4.webp" alt="Mask" />
      </div>

      <div bind:this={weapon}>
        <img src="/potential/weapon/1.webp" alt="Weapon" />
        <img src="/potential/weapon/2.webp" alt="Weapon" />
        <img src="/potential/weapon/3.webp" alt="Weapon" />
        <img src="/potential/weapon/4.webp" alt="Weapon" />
        <img src="/potential/weapon/5.webp" alt="Weapon" />
      </div>

      <img style:opacity={"1"} src="/potential/static/frame.webp" alt="Frame" />

      <div bind:this={badge1}>
        <img src="/potential/badges/first/1.webp" alt="First Badge" />
        <img src="/potential/badges/first/2.webp" alt="First Badge" />
        <img src="/potential/badges/first/3.webp" alt="First Badge" />
      </div>

      <div bind:this={badge2}>
        <img src="/potential/badges/second/1.webp" alt="First Badge" />
        <img src="/potential/badges/second/2.webp" alt="First Badge" />
        <img src="/potential/badges/second/3.webp" alt="First Badge" />
      </div>

      <div bind:this={badge3}>
        <img src="/potential/badges/third/1.webp" alt="First Badge" />
        <img src="/potential/badges/third/2.webp" alt="First Badge" />
        <img src="/potential/badges/third/3.webp" alt="First Badge" />
      </div>
    </div>

    <article class="flex-box">
      <h2>The evolutionary NFT collection</h2>
      <h3>
        Potentials are 1,000 dynamic avatars that evolve on-chain through
        community participation.
        {#if showText}
          As a Potential owner, you are at the core of all our products, playing
          an active role in shaping your avatar’s traits, attributes, and
          features through your decisions. This isn’t just a static NFT — your
          avatar grows with you. The art itself transforms, reflecting your
          unique personality, embedding your choices and experiences, and
          telling a story that is uniquely yours. Through trait-gated
          storytelling, your evolving digital persona unlocks exclusive
          narratives, interactions, and opportunities, making every journey
          personal and meaningful.
        {:else}
          <span
            class="more-text"
            on:click={() => (showText = true)}
            role="button"
            tabindex="0"
          >
            See more...
          </span>
        {/if}
      </h3>
      <div class="flex-box nft-links">
        <a
          class="flex-box scaled-down"
          href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
          target="_blank"
        >
          <img src="/icons/magiceden.png" alt="MagicEden" />
        </a>
        <h2>Forge Your Legacy</h2>
        <a
          class="flex-box scaled-down"
          href="https://opensea.io/collection/potentials-eth"
          target="_blank"
        >
          <img src="/icons/opensea.png" alt="OpenSea" />
        </a>
      </div>
    </article>
  </div>
</section>

<style>
  section {
    padding: 2vw;
    gap: 1vw;
    background-color: rgba(22, 30, 95, 0.25);
    box-shadow: 0 0 0.5vw #010020;
  }

  .potentials-banner {
    width: 100%;
    box-shadow: 0 0.25vw 0.5vw #010020;
    border-radius: 0.5vw;
  }

  .potential-wrapper {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 2vw;
  }

  article {
    gap: 2vw;
  }

  .potential {
    position: relative;
    width: 21.6vw;
    height: 30vw;
    flex: none;
    background-color: rgba(51, 226, 230, 0.05);
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  .potential div {
    position: absolute;
    width: inherit;
    height: inherit;
  }

  .potential img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    cursor: inherit;
    border-radius: 0.5vw;
  }

  .potential:hover,
  .potential:active {
    transform: scale(1.1);
    box-shadow: 0 0 1vw black;
  }

  .nft-links {
    flex-direction: row;
    gap: 2vw;
    width: 100%;
  }

  .nft-links a:hover,
  .nft-links a:active {
    transform: scale(1.1);
    filter: brightness(125%);
  }

  .nft-links img {
    width: 3vw;
    height: 3vw;
  }

  @media only screen and (max-width: 600px) {
    hr {
      display: none;
    }

    .potentials-banner {
      display: none;
    }

    .potential-wrapper {
      flex-direction: column-reverse;
      gap: 1em;
      padding: 1em;
    }

    article {
      gap: 1em;
    }

    .potential {
      width: 90vw;
      height: 125vw;
      transform: none;
    }

    .potential:hover,
    .potential:active {
      transform: scale(1.05);
    }

    .nft-links {
      gap: 0;
    }

    .nft-links img {
      min-width: 2.5em;
      width: 2.5em;
      height: 2.5em;
    }
  }
</style>
