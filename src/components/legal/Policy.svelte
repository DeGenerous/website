<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () =>
    setTimeout(() => typeWrite(tagline!, "DGRS Labs Privacy Policy"), 1500);

  onMount(startTyping);
</script>

<section class="flex">
  <h1 bind:this={tagline}>DGRS Labs Privacy Policy</h1>
  <article>
    Effective Date: 12 August 2024
    <br />
    <br />
    DeGenerous Society respects your right to privacy. This Privacy Policy describes
    who we are, what information we might collect about you, how we might use that
    information, who may access that information, and how you can manage your preferences.
    <br />
    <br />
    This Privacy Policy applies to all the products, services, websites, and applications
    offered by DeGenerous Society and their affiliates (collectively “DeGenerous
    Society”), except where otherwise noted. We refer to those products, services,
    websites, and apps collectively as the “services” in this policy.
    <br />
    <br />
    References to "data" in this Privacy Policy will refer to whatever data you insert
    or create using our services, whether it be data collected in a form, data inserted
    on a site hosted by us, or results derived from using our product or service.
    Reference to personal information or just information, means information about
    you personally that we collect or for which we act as custodian.
  </article>

  <h4>A. WHO WE ARE AND HOW TO CONTACT US</h4>
  <article>
    DeGenerous Society is a company developing AI and blockchain-powered
    storytelling and gaming products, creating shared and personalized
    experiences, and fostering charity.
    <br />
    <br />
    If you have questions about this Privacy Policy, please email us at contact@degenerousdao.com
    or mail us at DeGenerous Society, 8 The Green, STE B, Dover County of Kent, Delaware,
    USA.
  </article>

  <h4>B. PERSONAL DATA WE COLLECT</h4>
  <article>
    We collect your personal information to provide and improve our products and
    services, and to communicate with you about DeGenerous Society and our
    services. Here are the types of information we gather:
    <br />
    <br />
    <ul>
      <li>
        <i>Information You Give Us:</i> In the course of subscribing to any
        newsletter or web signup and other forms (e.g. via our websites
        <a href="https://degenerousdao.com/">https://degenerousdao.com/</a>
        or an application we digitally enable), you may provide to us and we may
        collect from you personal information potentially including: name, title,
        organization, email address, etc. In case of any billing, we also store your
        billing information. We are also custodians of data that you insert to use
        our DeGenerous Society website or other applications and services, as well
        as of derived results.
      </li>
      <li>
        <i>Automatic Information:</i> In the process of browsing our websites listed
        above, opening and clicking links in emails from us, and other activities,
        we automatically receive and store information that helps us improve our
        content, products, and services, such as whether you’ve opened an email,
        which links you may have clicked in that email, and which pages of our website
        are most popular.
      </li>
      <li>
        <i>Information From Other Sources:</i> We might receive information about
        you from other sources, similar in nature to the basic types of personal
        information outlined above in the Information You Give Us section.
      </li>
    </ul>
    <br />
    Our services are not intended for and may not be used by minors. “Minors” are
    individuals under the age of 13 (or under a higher age if permitted by the laws
    of their residence). DeGenerous Society does not knowingly collect personal data
    from Minors or allow them to register. If it comes to our attention that we have
    collected personal data from a Minor, we may delete this information without
    notice. If you have reason to believe that this has occurred, please contact
    us.
  </article>

  <h4>C. WHO HAS ACCESS TO YOUR INFORMATION</h4>
  <article>
    <b>
      We will never sell, lease, or otherwise share your personal information
      with unaffiliated, third-party individuals and organizations.
    </b>
    <br />
    <br />
    Your personal information will only be used:
    <br />
    <ol class="lettered">
      <li>
        Across the DeGenerous Society team to deliver services and
        communications,
      </li>
      <li>
        With vendors (e.g., MailChimp) only as necessary to deliver DeGenerous
        Society services and communications and to perform the functions
        described above, and
      </li>
      <li>
        Any third party that you directly authorize through another agreement,
        such as a payment provider.
      </li>
    </ol>
    <br />
    We enter into confidentiality and data processing terms with partners and parties
    that contract our service to ensure they comply with high levels of confidentiality
    and best practice in privacy and security standards and we regularly review these
    standards and practices. The cloud computing services we use operate data servers
    located in the European Union.
    <br />
    <br />
    If you are using the DeGenerous Society service as a member of an organisation,
    your account information and data may be shared with the primary administrator(s)
    and your data may also be visible to other members in your team or organisation
    with whom you share your data and/or results or with whom you collaborate. Your
    administrator(s) may be able to view your account data, change your passwords,
    suspend, transfer or terminate your account or restrict your settings. Please
    refer to your organisation’s internal policies if you have questions about this.
    Notably, as a user of DeGenerous Society service and creator of content you are
    the responsible data controller as defined by the European Union’s General Data
    Protection Regulation (GDPR) and similar legislation.
  </article>

  <h4>D. HOW WE USE YOUR INFORMATION</h4>
  <article>
    Your information will be used to provide and improve DeGenerous Society
    products, services, and communications, and to offer a more tailored and
    engaging experience with DeGenerous Society, potentially including:
    <br />
    <br />
    <ul>
      <li>
        Delivery of DeGenerous Society services, in line with our
        <a href="/legal/terms-of-service">Terms of Service</a>.
      </li>
      <li>
        Delivery of a newsletter and/or other email announcements to which you
        directly subscribed
      </li>
      <li>
        Delivery of targeted DeGenerous Society content from other platforms
        (e.g. embedded DeGenerous Society YouTube videos)
      </li>
      <li>
        Improvement of DeGenerous Society Service to create an improved user
        experience, including but not limited to functionality improvements and
        creation of anonymous, template library content.
      </li>
    </ul>
    <br />
    DeGenerous Society Services use tools like Smartlook, an analytics tool that
    provides session replay, heatmaps, funnels, form analytics, feedback campaigns,
    and similar functionalities. Smartlook is GDPR compliant and provides DeGenerous
    Society with aggregate anonymized data. For more information, see Smartlook's
    Privacy Policy
    <a href="https://help.smartlook.com/docs/privacy-policy" target="_blank"
      >here</a
    >.
  </article>

  <h4>E. OPTIONS FOR MANAGING YOUR PERSONAL INFORMATION</h4>
  <article>
    You can manage your email subscription preferences, unsubscribe,
    resubscribe, etc. at any time by following the links contained in any email
    communication from us. You can also contact us in writing at the email
    and/or mailing address above to update your preferences or to be removed
    from our system.
  </article>

  <h4>F. CHANGES TO OUR PRIVACY POLICY</h4>
  <article>
    We can make changes to this Privacy Policy from time to time. In
    circumstances where a change will materially change the way in which we
    collect or use your personal information or data, we will send a notice of
    this change to all our account holders.
  </article>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    padding-top: 5rem;

    article,
    h4 {
      @include auto-width;
    }

    article {
      text-align: left;
    }
  }
</style>
