<script lang="ts">
  import { onMount } from "svelte";

  import observeElement from "@utils/observer";
  import typeWrite from "@utils/typewriter";

  let section = $state<HTMLElement>();
  let tagline = $state<HTMLHeadingElement>();

  const resetTitle = () => (tagline!.style.opacity = "0");

  onMount(() => {
    resetTitle();
    observeElement(
      section!,
      "visible",
      () => typeWrite(tagline!, "Bug bounty"),
      resetTitle,
      undefined,
      true // animate once and keep visible
    );
  });
</script>

<section id="bounties" class="flex appear-left-observer" bind:this={section}>
  <h2 bind:this={tagline}>Bug bounty</h2>

  <article class="container">
    <p>
      CoNexus hosts thousands of user-generated stories and games, and we take the security of our
      platform and community seriously. We offer bounties ranging from
      <b>250–5,000&nbsp;USDC</b> for the responsible disclosure of vulnerabilities that pose risks.
    </p>

    <p>
      We’re especially interested in issues that could allow unauthorized access to or deletion of
      another user’s content, exposure of private drafts or personal data, manipulation of model
      responses, or account privilege escalation. We also welcome reports that reveal
      denial-of-service vectors, inference crashes, or persistent injection of rogue content into
      public areas of the platform.
    </p>

    <p>
      A vulnerability is considered critical if it enables remote code execution, arbitrary file
      reads outside the user sandbox, access to sensitive user information, or system instability
      caused by a single crafted request.
    </p>

    <p>
      To submit a report, email
      <a href="mailto:security@dgrslabs.ink"> our security team </a> with a reproducible proof-of-concept.
      Please allow us 30 days to patch the issue before disclosing it publicly.
    </p>

    <p>
      Reports related to third-party vendors, minor interface bugs, or certificates that auto-renew
      within 24 hours fall outside the bounty scope but are still appreciated. Thank you for helping
      us keep CoNexus safe.
    </p>
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  article {
    align-items: flex-start;
    text-align: left;
  }

  :global(#bounties.visible .container) {
    opacity: 1;
    transform: none;
    filter: none;
  }
</style>
