const positions: string[] = [
  `
  <article class="job-description" >
    <header aria-labelledby="senior-ai-engineer-title">
      <h3 id="senior-ai-engineer-title">Senior AI Engineer</h3>
    </header>

    <section aria-labelledby="senior-ai-engineer-summary">
      <h4 id="senior-ai-engineer-summary">Role Summary</h4>
      <p>
        Drive the core text-to-story engine that powers our AI-first storytelling platform. You will combine deep large-language-model expertise with high-performance Go engineering to expand narrative branching, finetune models to improve quality, manage services to optimize costs, design safe prompt libraries, and build cross-modal workflows (text2novel, text2film, and beyond). Your primary mandate: cut milliseconds from inference-heavy Go micro-services while unlocking richer and more scalable storytelling experiences.
      </p>
    </section>

    <section aria-labelledby="senior-ai-engineer-responsibilities">
      <h4 id="senior-ai-engineer-responsibilities">Key Responsibilities</h4>
      <ul role="list">
        <li>
          <strong>Performance &amp; Reliability.</strong> Profile, optimize, and refactor Go micro-services to minimize latency and maximize throughput in production.
        </li>
        <li>
          <strong>LLM Engineering.</strong> Own end-to-end inference and fine-tuning pipelines; design evaluation harnesses that balance creativity with safety.
        </li>
        <li>
          <strong>Prompt Architecture.</strong> Build and maintain reusable, policy-aligned prompt libraries that support branching narratives and content safeguards.
        </li>
        <li>
          <strong>Workflow Orchestration.</strong> Stitch together internal and third-party tools to deliver seamless text2story derivatives (text2novel, text2film, text2game, etc.).
        </li>
      </ul>
    </section>

    <section aria-labelledby="senior-ai-engineer-qualifications">
      <h4 id="senior-ai-engineer-qualifications">Required Qualifications</h4>
      <ul role="list">
        <li>5+ years professional Go development, with a record of low-latency service design and deployment.</li>
        <li>Hands-on experience with large-language-model inference, fine-tuning (LoRA/QLoRA, PEFT), and prompt engineering.</li>
        <li>Proficiency in containerization and cloud-native DevOps (Docker/K8s, CI/CD, observability).</li>
        <li>Solid grounding in distributed systems, performance profiling, and safe/ethical AI guidelines.</li>
        <li>Demonstrated success shipping ML features in a live product environment.</li>
      </ul>
    </section>

    <section aria-labelledby="senior-ai-engineer-bonus">
      <h4 id="senior-ai-engineer-bonus">Bonus Points</h4>
      <ul role="list">
        <li>Experience generating interactive content.</li>
        <li>Familiarity with multimodal generative stacks (text-to-image, TTS, video synthesis).</li>
        <li>Contributions to open-source Go or ML tooling communities.</li>
      </ul>
    </section>
  </article>
  `,
  `
  <article class="job-description" aria-labelledby="senior-bdm-title">
    <header>
      <h3 id="senior-bdm-title">Senior Business Development Manager</h3>
    </header>

    <section aria-labelledby="senior-bdm-summary">
      <h4 id="senior-bdm-summary">Role Summary</h4>
      <p>
        Spearhead revenue and partnership growth for our AI storytelling platform by securing strategic alliances with publishers, universities, consumer brands, entertainment studios, and ed-tech firms. You will own the full enterprise SaaS sales cycle while shaping go-to-market strategy in the fast-evolving creative-technology landscape.
      </p>
    </section>

    <section aria-labelledby="senior-bdm-responsibilities">
      <h4 id="senior-bdm-responsibilities">Key Responsibilities</h4>
      <ul role="list">
        <li>
          <strong>Pipeline Generation &amp; Qualification.</strong> Identify high-value targets across publishing, media, higher-education, and ed-tech; build and maintain a 2&ndash;3&times; quota pipeline.
        </li>
        <li>
          <strong>Enterprise Deal Closing.</strong> Lead discovery, solution mapping, ROI modeling, and contract negotiation to land six-figure annual-recurring-revenue deals.
        </li>
        <li>
          <strong>Partnership Design.</strong> Structure co-development, licensing, and distribution agreements that expand our text2story ecosystem (text2novel, text2film, text2game, etc.).
        </li>
        <li>
          <strong>Market Intelligence.</strong> Track trends in generative AI, interactive storytelling, and creative SaaS; translate insights into product and pricing feedback.
        </li>
      </ul>
    </section>

    <section aria-labelledby="senior-bdm-qualifications">
      <h4 id="senior-bdm-qualifications">Required Qualifications</h4>
      <ul role="list">
        <li>5+ years of quota-carrying SaaS sales or business-development experience.</li>
        <li>Demonstrated record of closing multiple six-figure ACV deals with enterprise or institutional clients.</li>
        <li>Deep familiarity with creative-tech or media SaaS markets (e.g., publishing platforms, ed-tech content solutions, digital production tools).</li>
        <li>Skilled in consultative selling, contract structuring, and C-suite relationship management.</li>
        <li>Proficiency with modern CRM systems and data-driven sales methodologies.</li>
      </ul>
    </section>

    <section aria-labelledby="senior-bdm-bonus-points">
      <h4 id="senior-bdm-bonus-points">Bonus Points</h4>
      <ul role="list">
        <li>Existing network within trade-book or academic publishers, film/TV studios, or ed-tech buyers.</li>
        <li>Experience with AI-powered or content-creation SaaS products.</li>
        <li>Background in licensing, IP management, or platform partnerships.</li>
      </ul>
    </section>
  </article>
  `,
  `
  <article class="job-description" aria-labelledby="growth-marketing-specialist-title">
    <header>
      <h3 id="growth-marketing-specialist-title">Growth Marketing Specialist</h3>
    </header>

    <section aria-labelledby="growth-marketing-specialist-summary">
      <h4 id="growth-marketing-specialist-summary">Role Summary</h4>
      <p>
        Own user-acquisition growth for CoNexus by designing and executing paid + organic campaigns that turn curious audiences into active players. You will manage full-funnel programs across TikTok, Instagram, Reddit, and emerging channels, and build high-leverage referral loops that continuously deliver new storytellers to the platform.
      </p>
    </section>

    <section aria-labelledby="growth-marketing-specialist-responsibilities">
      <h4 id="growth-marketing-specialist-responsibilities">Key Responsibilities</h4>
      <ul role="list">
        <li>
          <strong>Paid Social Execution.</strong> Plan, launch, and optimize performance campaigns (TikTok Ads Manager, Meta Ads, Reddit Ads) to hit CPA/CPI targets.
        </li>
        <li>
          <strong>Organic &amp; Community Growth.</strong> Craft platform-native content (short-form video, memes, AMAs) that drives reach, engagement, and follower growth.
        </li>
        <li>
          <strong>Referral &amp; Ambassador Programs.</strong> Design and iterate incentive-based funnels, affiliate links, and in-product share features that amplify word-of-mouth.
        </li>
        <li>
          <strong>Creative Production &amp; Testing.</strong> Brief and iterate ad creatives; run A/B and multivariate tests on copy, hooks, and CTAs for continuous lift.
        </li>
        <li>
          <strong>Data &amp; Attribution.</strong> Build dashboards, analyze cohort metrics, and present insights that guide budget allocation, product tweaks, viral features, and co-marketing launches.
        </li>
      </ul>
    </section>

    <section aria-labelledby="growth-marketing-specialist-qualifications">
      <h4 id="growth-marketing-specialist-qualifications">Required Qualifications</h4>
      <ul role="list">
        <li>3&ndash;5 years hands-on growth or performance marketing for a consumer app or gaming/creative-tech product.</li>
        <li>Proven track record hitting aggressive acquisition goals using TikTok, Instagram, Reddit, and at least one additional emerging channel (e.g., Discord, Twitch).</li>
        <li>Experience building and optimizing referral or ambassador programs that materially lift new-user volume.</li>
        <li>Proficiency with ad-tech and analytics stacks (e.g., TikTok/Meta Ads Manager, Google Analytics, AppsFlyer/Branch, Looker/Tableau).</li>
      </ul>
    </section>

    <section aria-labelledby="growth-marketing-specialist-bonus-points">
      <h4 id="growth-marketing-specialist-bonus-points">Bonus Points</h4>
      <ul role="list">
        <li>Familiarity with UGC storytelling platforms, gaming communities, or fandom culture.</li>
        <li>Experience collaborating with influencers or creators on sponsored content.</li>
      </ul>
    </section>
  </article>
  `,
];

export default positions;
