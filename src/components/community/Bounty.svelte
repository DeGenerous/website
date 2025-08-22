<script lang="ts">
</script>

<section aria-labelledby="bug-bounty-title">
  <header>
    <h2 id="bug-bounty-title">Bug bounty</h2>
  </header>

  <p>
    CoNexus hosts thousands of user-generated stories and games, and we take the
    security of our platform and community seriously. We offer bounties ranging
    from
    <span>250–5,000&nbsp;USDC</span> for the responsible disclosure of vulnerabilities
    that pose risks.
  </p>

  <h3 id="focus-areas">What we’re looking for</h3>
  <ul aria-labelledby="focus-areas">
    <li>Unauthorized access to or deletion of another user’s content</li>
    <li>Exposure of private drafts or personal data</li>
    <li>Manipulation of model responses</li>
    <li>Account privilege escalation</li>
    <li>Denial-of-service vectors</li>
    <li>Inference crashes</li>
    <li>Persistent injection of rogue content into public areas</li>
  </ul>

  <h3 id="critical-severity">What counts as critical</h3>
  <ul aria-labelledby="critical-severity">
    <li>Remote code execution</li>
    <li>Arbitrary file reads outside the user sandbox</li>
    <li>Access to sensitive user information</li>
    <li>System instability caused by a single crafted request</li>
  </ul>

  <h3 id="reporting">How to report</h3>
  <p>
    Send a reproducible proof-of-concept to
    <a href="mailto:security@dgrs.ink">security@dgrs.ink</a>. Please allow us
    <strong>30 days</strong> to patch the issue before disclosing it publicly.
  </p>

  <aside aria-labelledby="out-of-scope-title">
    <h3 id="out-of-scope-title">Out of scope (still appreciated)</h3>
    <ul>
      <li>Reports related to third-party vendors</li>
      <li>Minor interface bugs</li>
      <li>Certificates that auto-renew within 24 hours</li>
    </ul>
    <p>Thank you for helping us keep CoNexus safe.</p>
  </aside>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
