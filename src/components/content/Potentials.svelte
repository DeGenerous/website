<script lang="ts">
  import { onMount } from "svelte";

  let cape: HTMLImageElement;
  let outfit: HTMLImageElement;
  let arms: HTMLImageElement;
  let mask: HTMLImageElement;
  let weapon: HTMLImageElement;
  let badge0: HTMLImageElement;
  let badge1: HTMLImageElement;
  let badge2: HTMLImageElement;
  let badge3: HTMLImageElement;

  onMount(() => {
    setInterval(animatePotential, 5000);
  });

  const animatePotential = () => {
    hideAllItems();
    setTimeout(showAllItems, 2500);
  };

  const showAllItems = () => {
    showItem(cape);
    showItem(outfit);
    showItem(arms);
    showItem(mask);
    showItem(weapon);
    showItem(badge0);
    showItem(badge1);
    showItem(badge2);
    showItem(badge3);
  };

  function showItem(element: HTMLElement) {
    const delay = Math.random() * 2000;
    return setTimeout(() => (element.style.opacity = "1"), delay);
  }

  const hideAllItems = () => {
    hideItem(cape);
    hideItem(outfit);
    hideItem(arms);
    hideItem(mask);
    hideItem(weapon);
    hideItem(badge0);
    hideItem(badge1);
    hideItem(badge2);
    hideItem(badge3);
  };

  function hideItem(element: HTMLElement) {
    const delay = Math.random() * 2000;
    return setTimeout(() => (element.style.opacity = "0"), delay);
  }
</script>

<section class="flex-box blur">
  <img class="potentials-banner" src="/potentials.webp" alt="Potentials" />

  <hr />

  <div class="flex-box potential-wrapper">
    <div class="potential">
      <img src="/potential/bg.webp" alt="Body" />
      <img bind:this={cape} src="/potential/cape.webp" alt="Frame" />
      <img src="/potential/body.webp" alt="Body" />
      <img bind:this={outfit} src="/potential/outfit.webp" alt="Body" />
      <img bind:this={arms} src="/potential/arms.webp" alt="Body" />
      <img bind:this={mask} src="/potential/mask.webp" alt="Body" />
      <img bind:this={weapon} src="/potential/weapon.webp" alt="Body" />
      <img src="/potential/frame.webp" alt="Frame" />
      <img bind:this={badge0} src="/potential/badge-0.webp" alt="Body" />
      <img bind:this={badge1} src="/potential/badge-1.webp" alt="Body" />
      <img bind:this={badge2} src="/potential/badge-2.webp" alt="Body" />
      <img bind:this={badge3} src="/potential/badge-3.webp" alt="Body" />
    </div>
    <article class="flex-box">
      <h2>The evolutionary NFT collection</h2>
      <h3>
        Potentials are 1,000 dynamic avatars that evolve on-chain through
        community participation. As a Potential owner, you are at the core of
        all of our products and have a say in shaping your avatar’s traits,
        attributes, and features through your decisions. The art develops with
        your digital persona - mirroring your unique personality, embedding your
        experiences, telling your story, and opening up custom trait-gated
        stories.
      </h3>
      <button>JOIN US</button>
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
    padding-bottom: 1vw;
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
    transition: opacity 1s ease-out;
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
    }
  }
</style>
