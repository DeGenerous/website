<script lang="ts">
  export let title: string = "";
  let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<header class="flex-box subpage-header">
  <a class="icon-anchor" href="/" aria-label="Home">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-100 -100 200 200"
      class="circle-icon"
    >
      <path
        class="back-arrow-svg-mask"
        d="
          M -14 -30
          L -14 -64
          L -76 -9
          L -14 48
          L -14 12
          Q 36 14 60 52
          Q 60 -26 -12 -30
          Z
        "
        fill="rgb(51, 226, 230, 0.85)"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </svg>
  </a>
  <h1>{title}</h1>
  <a class="icon-anchor" href="/" aria-label="Home" on:click|preventDefault></a>
</header>

<slot />

<div class="background subpage-bg" style:top={-scroll / 25 + "vh"}></div>
