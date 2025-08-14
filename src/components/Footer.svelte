<script lang="ts">
  import { onMount } from "svelte";

  import LogoSVG from "@components/icons/Logo.svelte";

  import { socials, links } from "@constants/footer";

  onMount(() => {
    // Any initialization logic for the footer can go here
  });
</script>

<footer class="pad flex fade-in">
  <section class="flex gap">
    <LogoSVG big={true} branding={true} />
    <p>
      Building the GenAI ecosystem for storytelling. License, produce, consume,
      and monetize stories at scale with Text-To-Story & on-chain ownership.
    </p>

    <ul class="socials flex-row">
      {#each socials as { icon, href, alt }}
        <li>
          <a {href} target="_blank">
            <img src={icon} {alt} />
          </a>
        </li>
      {/each}
    </ul>

    <span class="flex gap-8">
      <p>© DGRS Labs Pte. Ltd.</p>
      <p>Registered in Singapore - UEN: 202534215D</p>
      <p>20 Collyer Quay, #11-07, Singapore 049319</p>
      <span class="flex-row gap-8">
        <img src="/icons/gdpr.png" alt="GDPR Badge" />
        <p>All rights reserved.</p>
      </span>
    </span>
  </section>

  <hr />

  <div class="flex-row flex-wrap">
    {#each links as { title, anchors }}
      <ul>
        <li>
          <h5>{title}</h5>
        </li>
        {#each anchors as { label, href }}
          <li>
            <a {href} rel="noopener noreferrer">{label}</a>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</footer>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  footer {
    gap: 2rem;
    border-top: 1px solid rgba(150, 150, 150, 0.25);
    @include light-blue(0.1);

    section {
      .socials {
        margin-block: 0.5rem;

        li {
          width: 2rem;
          border-radius: 20%;

          a,
          img {
            border-radius: inherit;
          }

          a:hover img,
          a:active img,
          a:focus img {
            @include scale;
            @include bright;
          }
        }
      }

      span {
        @include gray(1, text);

        p {
          white-space: nowrap;
          @include font(caption);
        }

        span {
          align-items: center;

          img {
            width: 2rem;
          }
        }
      }
    }

    div {
      font-family: $font-serif;
      align-items: flex-start;
      gap: 2rem;

      ul {
        text-align: left;
        width: calc((100% - 2rem * 2) / 2);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;

        h5 {
          font-family: $font-sans;
          font-weight: 600;
          @include font(body);
        }

        a {
          font-weight: 300;
          @include font(caption);
        }

        @include respond-up("tablet") {
          width: calc((100% - 2rem * 4) / 4);
        }

        @include respond-up("small-desktop") {
          width: calc((100% - 2rem * 8) / 8);
        }
      }
    }

    @include respond-up("large-desktop") {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;

      section {
        width: 30%;
        align-items: flex-start;

        p {
          text-align: left;
        }

        span {
          align-items: flex-start;
        }
      }

      hr {
        display: none;
      }
    }
  }

  :global(body.dark) {
    footer {
      @include dark-blue;
    }
  }
</style>
