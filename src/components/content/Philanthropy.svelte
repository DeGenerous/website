<script lang="ts">
  let showText1: boolean = false;
  let showText2: boolean = false;
</script>

<h1>Supercharging Giving</h1>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-to-interactive-role -->
<section class="flex-box blur">
  <div class="flex-box">
    <img class="blurred-image" src="/ball.jpg" alt="Phylanthropy" />
    <article class="flex-box">
      <h2>Proof-Of-Impact: Turning Digital Contributions into Real Change</h2>
      <h3>
        At DeGenerous DAO, we believe that philanthropy should be transparent,
        engaging, and impactful. With our initial NFT sale raising $125K for
        charity, we've already demonstrated the power of Web3 to drive
        real-world change.
        {#if showText1}
          Thanks to our partnership with Lions Clubs International, we ensure
          that 100% of funds raised for charity go directly to those in need
          through well-organized, co-branded global service missions. Our vision
          is to gamify giving, allowing supporters to earn unique NFTs, traits,
          and aesthetics as proof of their contributions—each digital asset
          telling a story of generosity, woven into a larger movement of social
          good.
        {:else}
          <span
            class="more-text"
            on:click={() => (showText1 = true)}
            role="button"
            tabindex="0"
          >
            See more...
          </span>
        {/if}
      </h3>
    </article>
  </div>

  <hr />

  <div class="flex-box">
    <img class="blurred-image" src="/museum.jpg" alt="Phylanthropy" />
    <article class="flex-box">
      <h2>Make the World a Better Place. Unlock Your Potential.</h2>
      <h3>
        Philanthropy isn’t just about donations—it’s about measurable,
        life-changing impact. From funding international service trips to our
        flagship app's daily usage by kids in a leading gaming museum,
        DeGenerous DAO is committed to ensuring that every contribution
        translates into the joy of beneficiaries.
        {#if showText2}
          As humanitarian partners of Lions International, the world’s largest
          service organization with 1.4M members and 50K local clubs, we’ve
          helped ~100k people worldwide by funding several global service
          projects, including a major initiative with Johnson&Johnson in India
          in February 2024, where our community shaped the mission through
          innovative governance systems. True impact isn’t measured in bytes,
          but in smiles, shared stories, and lives forever changed.
        {:else}
          <span
            class="more-text"
            on:click={() => (showText2 = true)}
            role="button"
            tabindex="0"
          >
            See more...
          </span>
        {/if}
      </h3>
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

  div {
    flex-direction: row;
    gap: 2vw;
  }

  article {
    gap: 1vw;
  }

  img {
    width: 21.6vw;
    border-radius: 1vw;
    box-shadow: 0 0.25vw 0.5vw #010020;
  }

  @media only screen and (max-width: 600px) {
    section {
      padding: 1em;
      gap: 1em;
    }

    div {
      flex-direction: column;
      gap: 1em;
    }

    article {
      gap: 1em;
    }

    img {
      width: 90vw;
      border-radius: 1em;
    }
  }
</style>
