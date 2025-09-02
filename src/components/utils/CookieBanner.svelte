<script>
  import { onMount } from "svelte";

  let showBanner = $state(false);
  let analyticsEnabled = false;

  onMount(() => {
    const cachedConsent = localStorage.getItem("cookie_consent");
    if (!cachedConsent) {
      showBanner = true;
    } else {
      analyticsEnabled = cachedConsent === "full";
      if (analyticsEnabled) loadAnalytics();
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
    if (!document.getElementById("google-analytics")) {
      let script = document.createElement("script");
      script.id = "google-analytics";
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-YSHBY9F7FY";
      document.head.appendChild(script);

      script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-YSHBY9F7FY", { anonymize_ip: true });
      };
    }
  }

  function disableAnalytics() {
    window["ga-disable-G-YSHBY9F7FY"] = true;
  }
</script>

{#if showBanner}
  <div class="container fade-in">
    <h4>We use cookies to provide you with a better service.</h4>
    <p>
      By continuing to use this website, you consent to the use of cookies as
      described in our
      <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
    </p>
    <div class="flex-row">
      <button class="primary" onclick={() => acceptCookies(true)}>
        Accept all
      </button>
      <button class="secondary" onclick={() => acceptCookies(false)}>
        Essential only
      </button>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "/src/styles/mixins" as *;

  .container {
    width: 90%;
    position: fixed;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);

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
