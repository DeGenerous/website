<script lang="ts">
</script>

<section aria-labelledby="careers-title">
  <header>
    <h2 id="careers-title">Careers</h2>
    <p>
      If you're passionate about building category-defining technology and
      joining a visionary team early, this is your moment.
    </p>
  </header>

  <h3 id="open-positions-title">Open positions</h3>

  <!-- Tile group (layout to be handled by your utilities) -->
  <ul aria-labelledby="open-positions-title">
    <!-- Tile 1 -->
    <li>
      <article aria-labelledby="job-ai-engineer">
        <header>
          <h4 id="job-ai-engineer">
            AI Engineer <span aria-label="two openings">(x2)</span>
          </h4>
        </header>
        <nav aria-label="AI Engineer actions">
          <a href="#" role="button" aria-label="Read more about AI Engineer"
            >Read more</a
          >

          <!-- Attach CV: label triggers hidden file input without JS -->
          <form
            action="/careers/apply"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="position" value="AI Engineer" />
            <input
              id="cv-ai"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              hidden
            />
            <label for="cv-ai" role="button" aria-controls="cv-ai"
              >Attach CV</label
            >
          </form>
        </nav>
      </article>
    </li>

    <!-- Tile 2 -->
    <li>
      <article aria-labelledby="job-business-developer">
        <header>
          <h4 id="job-business-developer">Business Developer</h4>
        </header>
        <nav aria-label="Business Developer actions">
          <a
            href="#"
            role="button"
            aria-label="Read more about Business Developer">Read more</a
          >

          <form
            action="/careers/apply"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="position" value="Business Developer" />
            <input
              id="cv-bizdev"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              hidden
            />
            <label for="cv-bizdev" role="button" aria-controls="cv-bizdev"
              >Attach CV</label
            >
          </form>
        </nav>
      </article>
    </li>

    <!-- Tile 3 -->
    <li>
      <article aria-labelledby="job-marketing-specialist">
        <header>
          <h4 id="job-marketing-specialist">Marketing Specialist</h4>
        </header>
        <nav aria-label="Marketing Specialist actions">
          <a
            href="#"
            role="button"
            aria-label="Read more about Marketing Specialist">Read more</a
          >

          <form
            action="/careers/apply"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="position" value="Marketing Specialist" />
            <input
              id="cv-marketing"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              hidden
            />
            <label for="cv-marketing" role="button" aria-controls="cv-marketing"
              >Attach CV</label
            >
          </form>
        </nav>
      </article>
    </li>
  </ul>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;
</style>
