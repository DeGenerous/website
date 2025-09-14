<script>
  import { onMount } from "svelte";

  let showBanner = $state(false);
  let analyticsEnabled = false;
  let bannerEl = $state(null);

  onMount(() => {
    const cachedConsent = localStorage.getItem("cookie_consent");
    if (!cachedConsent) {
      showBanner = true;
    } else {
      analyticsEnabled = cachedConsent === "full";
      if (analyticsEnabled) loadAnalytics();
    }
  });

  $effect(() => {
    if (showBanner && bannerEl) {
      bannerEl.focus();
    }
  });

  function acceptCookies(fullConsent) {
    analyticsEnabled = fullConsent;

    localStorage.setItem("cookie_consent", fullConsent ? "full" : "essential");

    if (fullConsent) {
      loadAnalytics();
    } else {
      disableAnalytics();
    }

    showBanner = false;
  }

  function loadAnalytics() {
    // Google Analytics 4
    if (!document.getElementById("google-analytics")) {
      const script = document.createElement("script");
      script.id = "google-analytics";
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-W57SFSPDH5";
      document.head.appendChild(script);

      script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-W57SFSPDH5", { anonymize_ip: true });
      };
    }

    // Microsoft Clarity
    if (!document.getElementById("ms-clarity")) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
        t = l.createElement(r);
        t.async = 1;
        t.id = "ms-clarity";
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "tafopbvzwy");
    }
  }

  function disableAnalytics() {
    // Disable GA for this property
    window["ga-disable-G-W57SFSPDH5"] = true;
  }
</script>

{#if showBanner}
  <div
    class="container fade-in blur"
    bind:this={bannerEl}
    role="region"
    aria-label="Cookie consent"
    aria-live="polite"
    tabindex="-1"
  >
    <h4>We use cookies to provide you with a better service.</h4>
    <p>
      By continuing to use this website, you consent to the use of cookies as described in our
      <a href="/privacy-policy">Privacy Policy</a>.
    </p>
    <div class="flex-row">
      <button class="primary" type="button" onclick={() => acceptCookies(true)}>
        Accept all
      </button>
      <button class="secondary" type="button" onclick={() => acceptCookies(false)}>
        Essential only
      </button>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    width: calc(100% - 2rem);
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    outline: none;
    padding: 1rem;
    gap: 1rem;

    div {
      gap: 1rem;
    }

    @include respond-up(small-desktop) {
      bottom: 1rem;
      max-width: 75rem;
    }

    button {
      &.primary {
        @include dark-green(0.85, text);
        @include green(0.75);

        &:hover:not(&:disabled),
        &:active:not(&:disabled),
        &:focus:not(&:disabled) {
          @include dark-green(1, text);
          @include green;
        }
      }

      &.secondary {
        @include dark-blue(0.85, text);
        @include gray(0.75);

        &:hover:not(&:disabled),
        &:active:not(&:disabled),
        &:focus:not(&:disabled) {
          @include dark-blue(1, text);
          @include gray;
        }
      }
    }
  }
</style>
