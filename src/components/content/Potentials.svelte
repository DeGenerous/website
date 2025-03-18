<script lang="ts">
  import { onMount } from "svelte";

  let bg: HTMLImageElement;
  let back: HTMLImageElement;
  let arms: HTMLImageElement;
  let mask: HTMLImageElement;
  let weapon: HTMLImageElement;
  let badge1: HTMLImageElement;
  let badge2: HTMLImageElement;
  let badge3: HTMLImageElement;

  onMount(() => {
    setInterval(animatePotential, 5000);
  });

  const animatePotential = () => {
    switchItem(arms, "arms", 4);
    switchItem(back, "back", 4);
    switchItem(bg, "bg", 5);
    switchItem(mask, "mask", 4);
    switchItem(weapon, "weapon", 5);
    switchItem(badge1, "badges/first");
    switchItem(badge2, "badges/second");
    switchItem(badge3, "badges/third");
  };

  function switchItem(
    element: HTMLImageElement,
    folder: string = "weapon",
    max: number = 2
  ) {
    setTimeout(
      () => {
        element.style.opacity = "0";
        setTimeout(
          () => {
            element.src = `/potential/${folder}/${getRandomNumber(max + 1)}.webp`;
            element.style.opacity = "1";
          },
          getRandomNumber(15, 20) * 50
        );
      },
      getRandomNumber(15, 20) * 50
    );
  }

  function getRandomNumber(min: number = 1, max: number = 3) {
    min = Math.ceil(1);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
</script>

<section class="flex-box blur">
  <img class="potentials-banner" src="/potentials.webp" alt="Potentials" />

  <hr />

  <div class="flex-box potential-wrapper">
    <div class="potential">
      <img bind:this={bg} src="/potential/bg/1.webp" alt="Background" />
      <img bind:this={back} src="/potential/back/1.webp" alt="Back Accessory" />
      <img src="/potential/static/body.webp" alt="Body" />
      <img bind:this={arms} src="/potential/arms/1.webp" alt="Arm Accessory" />
      <img bind:this={mask} src="/potential/mask/1.webp" alt="Mask" />
      <img bind:this={weapon} src="/potential/weapon/1.webp" alt="Weapon" />
      <img src="/potential/static/frame.webp" alt="Frame" />
      <img
        bind:this={badge1}
        src="/potential/badges/first/1.webp"
        alt="First Badge"
      />
      <img
        bind:this={badge2}
        src="/potential/badges/second/1.webp"
        alt="Second Badge"
      />
      <img
        bind:this={badge3}
        src="/potential/badges/third/1.webp"
        alt="Third Badge"
      />
    </div>
    <article class="flex-box">
      <h2>The evolutionary NFT collection</h2>
      <h3>
        <strong>Potentials</strong> are 1,000 dynamic avatars that
        <strong>evolve on-chain</strong> through community participation. As a
        Potential owner, you are at the core of all our products, playing an
        active role in shaping your avatar’s
        <strong>traits, attributes, and features</strong>
        through your decisions. This isn’t just a static NFT —
        <strong>your avatar grows with you</strong>. The art itself transforms,
        reflecting your unique personality, embedding your choices and
        experiences, and telling a story that is uniquely yours. Through
        trait-gated storytelling, your evolving digital persona unlocks
        <strong>exclusive narratives, interactions, and opportunities</strong>,
        making every journey personal and meaningful.
      </h3>
      <div class="flex-box nft-links">
        <a
          href="https://magiceden.io/collections/ethereum/0xfa511d5c4cce10321e6e86793cc083213c36278e"
        >
          <img src="/icons/magiceden.png" alt="MagicEden" />
        </a>
        <h2>JOIN US</h2>
        <a href="https://opensea.io/collection/potentials-eth">
          <img src="/icons/opensea.png" alt="OpenSea" />
        </a>
      </div>
    </article>
  </div>
</section>

<style>
  section {
    gap: 1vw;
    background-color: rgba(22, 30, 95, 0.25);
    box-shadow: 0 0 0.5vw #010020;
  }

  .potentials-banner {
    width: 100vw;
    box-shadow: 0 0 0.5vw #010020;
  }

  .potential-wrapper {
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    gap: 2vw;
    padding-bottom: 2vw;
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

  .potential img {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease-out;
  }

  .potential:hover,
  .potential:active {
    transform: scale(1.1);
    box-shadow: 0 0 1vw black;
  }

  .nft-links {
    flex-direction: row;
    gap: 2vw;
  }

  .nft-links a {
    width: 3vw;
    height: 3vw;
  }

  .nft-links a:hover,
  .nft-links a:active {
    transform: scale(1.1);
    filter: brightness(125%);
  }

  .nft-links img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    hr {
      display: none;
    }

    .potentials-banner {
      display: none;
    }

    .potential-wrapper {
      flex-direction: column;
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

    .nft-links {
      gap: 1em;
    }

    .nft-links a {
      width: 2em;
      height: 2em;
    }
  }
</style>
