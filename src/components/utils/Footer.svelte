<script lang="ts">
  import { showScramble, hideScramble } from "@stores/scramble.svelte";
  import { socials, links } from "@constants/footer";
  import { toastStore } from "@stores/toast.svelte";
  import { regexpEmail } from "@constants/regexp";

  import LogoSVG from "@components/icons/Logo.svelte";

  let email = $state("");
  let lang = $state("en");

  const subscribeToNewsletter = () => {
    if (!email || !regexpEmail.test(email)) {
      toastStore.show("Please enter a valid email address.", "error");
      return;
    }

    // Here you would typically send the email to your backend or a service
    // For demonstration, we'll just log it
    console.log("Subscribed email:", email);

    // Show a success message
    toastStore.show("Thank you for subscribing to our newsletter!");

    // Reset the input field after subscription
    email = "";
  };

  const resetCookieConsent = (event: Event) => {
    event.preventDefault();
    // This function would reset cookie consent preferences
  };
</script>

<div class="newsletter flex pad pc-narrow">
  <h4>Join the Future of Storytelling</h4>
  <p>
    Get the latest updates on DGRS, exclusive access to new features, and
    insights into the AI storytelling revolution.
  </p>
  <span class="flex-row flex-wrap">
    <input
      type="email"
      placeholder="Enter your email"
      aria-label="Subscribe to newsletter"
      bind:value={email}
    />
    <button onclick={subscribeToNewsletter}> Subscribe </button>
  </span>
</div>

<footer class="pad flex fade-in pc-narrow">
  <section class="flex gap">
    <LogoSVG big={true} branding={true} />
    <p>
      Building the GenAI ecosystem for storytelling. License, produce, consume,
      and monetize stories at scale with Text-To-Story & on-chain ownership.
    </p>

    <ul class="socials flex-row">
      {#each socials as { icon, href, alt }}
        <li>
          <a class="nohover-link" {href} target="_blank">
            <img src={icon} {alt} />
          </a>
        </li>
      {/each}
    </ul>

    <div class="lang flex-row gap-8 flex-wrap">
      <label for="lang">🌐 Language:</label>
      <select id="lang" bind:value={lang}>
        <option value="en" selected>English</option>
      </select>
    </div>

    <div class="flex-row">
      <a href="/" onclick={resetCookieConsent}> Cookie Policy </a>
      <span> • </span>
      <a href="mailto:contact@dgrs.ink" target="_blank"> contact@dgrs.ink </a>
    </div>

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

  <div class="footer-links flex-row flex-wrap">
    {#each links as { title, anchors }}
      <ul class="links">
        <li>
          <h5>{title}</h5>
        </li>
        {#each anchors as { label, href, target }}
          <li>
            <a
              {href}
              {target}
              rel="noopener noreferrer"
              onclick={() => {
                showScramble();
                setTimeout(hideScramble, 1500);
              }}
            >
              {label}
            </a>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</footer>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  .newsletter {
    border-top: 1px solid rgba(150, 150, 150, 0.25);
    @include light-blue(0.1);
  }

  footer {
    gap: 2rem;
    border-top: 1px solid rgba(150, 150, 150, 0.25);
    @include light-blue(0.1);

    hr {
      width: 100vw;
    }

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

    .footer-links {
      font-family: $font-serif;
      align-items: flex-start;
      gap: 2rem;

      .links {
        text-align: left;
        width: calc((100% - 2rem * 2) / 2);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;

        h5 {
          font-family: $font-sans;
          @include font(body);
        }

        a {
          white-space: wrap;
          color: $dark-blue;
          opacity: 0.5;
          @include font(caption);

          &:hover,
          &:active,
          &:focus {
            opacity: 1;
          }
        }

        @include respond-up("tablet") {
          width: calc((100% - 2rem * 4) / 4);
        }

        @include respond-up("small-desktop") {
          width: calc((100% - 2rem * 8) / 8);
        }
      }
    }

    @include respond-up("full-hd") {
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
    footer,
    .newsletter {
      @include dark-blue;
    }

    .footer-links a {
      opacity: 1;
      color: $gray;

      &:hover,
      &:active,
      &:focus {
        color: $cyan;
      }
    }
  }
</style>
