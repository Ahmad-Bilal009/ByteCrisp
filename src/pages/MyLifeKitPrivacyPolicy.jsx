import Reveal from '../components/Reveal'

function MyLifeKitPrivacyPolicy() {
  return (
    <section className="page-section my-life-kit-page">
      <Reveal className="page-intro">
        <span className="eyebrow">My Life Kit</span>
        <h1>Privacy Policy</h1>
        <p>Last updated: September 17, 2026</p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={60}>
        <p>
          This Privacy Policy explains how My Life Kit (&quot;the App&quot;), developed by ByteCrisp, handles
          information when you use our currency &amp; gold rate, bill splitter, and age calculator tools.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={90}>
        <h2>Information We Collect</h2>
        <p>
          My Life Kit is designed to work without requiring an account. Inputs you enter into the app&apos;s tools
          &mdash; including calculators, converters, time tools, QR &amp; barcode, documents, and security features
          &mdash; are processed and stored only on your device. Gold, silver, and currency rate figures are fetched
          from third-party rate providers and are not linked to any personal information.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={120}>
        <h2>How We Use Information</h2>
        <p>
          Any data entered into the App is used solely to perform the action you requested (such as a calculation,
          conversion, or scan) and is not sold, shared, or used for advertising.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={150}>
        <h2>Third-Party Services</h2>
        <p>
          The App may use third-party APIs to fetch live currency and gold rates. These requests do not include any
          personally identifiable information about you.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={180}>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect any information processed by the App. Since most data stays on your
          device, you remain in control of it at all times.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={210}>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
          revision date.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={240}>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:info@bytecrisp.com">info@bytecrisp.com</a>.
        </p>
      </Reveal>
    </section>
  )
}

export default MyLifeKitPrivacyPolicy
