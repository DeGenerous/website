<script lang="ts">
  import { toastStore } from "@stores/toast.svelte";
  import { regexpEmail } from "@constants/regexp";

  let email = $state<string>("");

  const subscribeToNewsletter = async (event: Event) => {
    event.preventDefault();
    if (!email || !regexpEmail.test(email)) {
      toastStore.show("Please enter a valid email address.", "error");
      return;
    }

    try {
      const response = await fetch(
        `https://dgrslabs.ink/api/account/subscribe-newsletter-open?email=${email}`
      );
      const data = await response.json();
      if (!response.ok) {
        toastStore.show(data.message || "Subscription failed. Please try again later.", "error");
      }
    } catch (error) {
      toastStore.show("An error occurred. Please try again later.", "error");
      return;
    }

    toastStore.show("Thank you for subscribing to our newsletter!");
    email = "";
  };
</script>

<section class="newsletter-page container flex pad pc-narrow blur">
  <h1>Join the Future of Storytelling</h1>
  <p>
    Get the latest updates on DGRS, exclusive access to new features, and insights into the AI
    storytelling revolution.
  </p>
  <form class="flex-row flex-wrap" onsubmit={subscribeToNewsletter}>
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
    <button type="submit">Subscribe</button>
  </form>
</section>

<style lang="scss">
  @use "/src/styles/mixins/" as *;

  .newsletter-page {
    margin-top: 10rem;
    justify-content: center;
    padding-block: 4rem;

    h1 {
      @include font(h2);
    }

    p {
      max-width: 32rem;
      opacity: 0.8;
    }

    form {
      margin-top: 0.5rem;
    }
  }

  :global(body.dark) .newsletter-page {
    @include dark-blue;
  }
</style>
