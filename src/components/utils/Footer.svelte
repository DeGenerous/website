<script lang="ts">
  import { showScramble, hideScramble } from "@stores/scramble.svelte";
  import { socials, links } from "@constants/footer";
  import { toastStore } from "@stores/toast.svelte";
  import { regexpEmail } from "@constants/regexp";

  import LogoSVG from "@components/icons/Logo.svelte";

  let email = $state<string>("");

  const subscribeToNewsletter = async (event: Event) => {
    event.preventDefault();
    if (!email || !regexpEmail.test(email)) {
      toastStore.show("Please enter a valid email address.", "error");
      return;
    }

    const response = await fetch(`https://dgrslabs.ink/api/account/subscribe-newsletter-open?email=${email}`);
    const data = await response.json();
    if (!response.ok) {
      toastStore.show(data.message || "Subscription failed. Please try again later.", "error");
      return;
    }

    // Show a success message
    toastStore.show("Thank you for subscribing to our newsletter!");

    // Reset the input field after subscription
    email = "";
  };

  const resetCookieConsent = (event: Event) => {
    event.preventDefault();
    localStorage.removeItem("cookie_consent");
    window.location.reload();
  };
</script>

<form class="newsletter flex pad pc-narrow blur" onsubmit={subscribeToNewsletter}>
  <h4>Join the Future of Storytelling</h4>
  <p>
    Get the latest updates on DGRS, exclusive access to new features, and insights into the AI
    storytelling revolution.
  </p>
  <span class="flex-row flex-wrap">
    <label class="sr-only" for="newsletter-email">Email address</label>
    <input
      id="newsletter-email"
      name="email"
      type="email"
      placeholder="Enter your email"
      autocomplete="email"
      aria-required="true"
      bind:value={email}
      required
    />
    <button type="submit"> Subscribe </button>
  </span>
</form>

<footer class="pad flex fade-in pc-narrow blur">
  <section class="flex gap">
    <LogoSVG href="/" big={true} branding={true} />
    <p>
      Building the GenAI ecosystem for storytelling.
      <br />
      License, produce, consume, and monetize stories at scale with Text-To-Story & on-chain ownership.
    </p>

    <ul class="socials flex-row">
      {#each socials as { icon, href, alt }}
        <li>
          <a class="nohover-link" {href} target="_blank" rel="noopener noreferrer">
            <img src={icon} {alt} />
          </a>
        </li>
      {/each}
    </ul>

    <a href="mailto:contact@dgrslabs.ink" target="_blank">Contact Us</a>

    <a href="/" onclick={resetCookieConsent}>Cookie Settings</a>

    <span class="flex gap-8">
      <p>©2025 DGRS Labs Pte. Ltd.</p>
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
    padding-block: 2rem;
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

      @include respond-up("quad-hd") {
        min-width: 1500px;
      }
    }

    @include respond-up("full-hd") {
      flex-direction: row;
      align-items: flex-start;
      padding-block: 2rem;

      section {
        width: 360px;
        align-items: flex-start;

        p {
          text-align: left;
          max-width: 280px;
        }

        span {
          align-items: flex-start;
        }
      }

      hr {
        display: none;
      }
    }

    @include respond-up("quad-hd") {
      section {
        width: 420px;
        min-width: 15%;

        p {
          max-width: 300px;
        }
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
