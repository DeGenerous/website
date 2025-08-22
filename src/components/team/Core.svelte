<script lang="ts">
</script>

<section aria-labelledby="core-team-title">
  <header>
    <h2 id="core-team-title">
      Core&nbsp;Team &ndash; Interactive Slider Layout
    </h2>
  </header>

  <!-- Slider region (no JS/CSS included) -->
  <div
    role="region"
    aria-roledescription="carousel"
    aria-label="Core Team slider"
  >
    <!-- Frame 1 -->
    <div
      role="group"
      aria-roledescription="slide"
      aria-label="Frame 1 • Engineering"
      id="slide-engineering"
    >
      <h3>Frame&nbsp;1 &bull; Engineering</h3>
      <ul>
        <li>
          <article aria-labelledby="name-john-franklin">
            <h4 id="name-john-franklin">Anusiem&nbsp;John-Franklin</h4>
            <p><em>Lead Full-Stack Engineer</em></p>
            <p>
              Built high-throughput services in Rust, Go, and Python. Scaled
              fintech systems to 16M users; deep Azure, Kubernetes, and AI
              expertise.
            </p>
          </article>
        </li>
        <li>
          <article aria-labelledby="name-vani">
            <h4 id="name-vani">Vani</h4>
            <p><em>Web3 Engineer</em></p>
            <p>
              Hardware-to-Solidity polymath and multiple Ethereum Foundation
              hackathon winner. Designs secure, composable smart contracts.
            </p>
          </article>
        </li>
        <li>
          <article aria-labelledby="name-dmytro">
            <h4 id="name-dmytro">Dmytro&nbsp;Bula</h4>
            <p><em>Senior Front-End &amp; UX Engineer</em></p>
            <p>
              Fluent in Astro, Svelte, React, Vue, Node, Go, and Solidity.
              Crafts pixel-perfect interfaces and back-end links for
              lightning-fast user experiences.
            </p>
          </article>
        </li>
      </ul>
    </div>

    <!-- Frame 2 -->
    <div
      role="group"
      aria-roledescription="slide"
      aria-label="Frame 2 • Creative"
      id="slide-creative"
    >
      <h3>Frame&nbsp;2 &bull; Creative</h3>
      <ul>
        <li>
          <article aria-labelledby="name-cryptok">
            <h4 id="name-cryptok">Sean “Cryptok”&nbsp;Dugan</h4>
            <p><em>Cinematics Director &amp; Producer</em></p>
            <p>
              Traditional and AI-film veteran. Produces and edits work from
              short ads to feature-length films viewed tens of millions of
              times, and has raised multi-million-dollar funding.
            </p>
          </article>
        </li>
        <li>
          <article aria-labelledby="name-kit">
            <h4 id="name-kit">Kit</h4>
            <p><em>Art Director</em></p>
            <p>
              Global illustrator with more than ten years of professional craft,
              officially backed by top Web3 orgs, marketplaces, and curators.
            </p>
          </article>
        </li>
      </ul>
    </div>

    <!-- Frame 3 -->
    <div
      role="group"
      aria-roledescription="slide"
      aria-label="Frame 3 • Growth"
      id="slide-growth"
    >
      <h3>Frame&nbsp;3 &bull; Growth</h3>
      <ul>
        <li>
          <article aria-labelledby="name-kyt">
            <h4 id="name-kyt">Kyt</h4>
            <p><em>Lead Ambassador</em></p>
            <p>
              Twenty years in community building, content production, and
              strategy. Forges partnerships and empowers new voices on-chain.
            </p>
          </article>
        </li>
      </ul>
      <p>
        <em
          >Two contributors work under verified pseudonyms for security and
          competitive edge. Details are available to investors under NDA.</em
        >
      </p>
    </div>

    <!-- Slide controls (hook up in your Svelte/JS) -->
    <nav aria-label="Slide controls">
      <ul>
        <li>
          <button
            type="button"
            aria-controls="slide-engineering"
            aria-label="Show Engineering slide">Engineering</button
          >
        </li>
        <li>
          <button
            type="button"
            aria-controls="slide-creative"
            aria-label="Show Creative slide">Creative</button
          >
        </li>
        <li>
          <button
            type="button"
            aria-controls="slide-growth"
            aria-label="Show Growth slide">Growth</button
          >
        </li>
      </ul>
    </nav>
  </div>

  <footer>
    <p>
      <strong>We’re not alone.</strong>
      Every week, we draw on the expertise of contractors, agencies, and advisors—from
      Web3 founders and legal counsel to branding specialists, storytellers, and
      AI engineers—who share our vision of community-owned storytelling.
    </p>
  </footer>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
