export const metadata = {
  title: "Privacy Policy | Mobile Tyre Fitting United Kingdom",
  description: "Privacy Policy for Mobile Tyre Fitting - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="width-fixed" style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
      <h1 className="text-50 highlight-text text-center mb-4">Privacy Policy</h1>
      <p className="text-16" style={{ color: "#666", textAlign: "center", marginBottom: 40 }}>
        Last updated: April 2026
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">1. Introduction</h2>
        <p className="text-16">
          Mobile Tyre Fitting (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
          website or use our mobile tyre fitting services across the United Kingdom.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">2. Information We Collect</h2>
        <p className="text-16">We may collect the following types of information:</p>
        <ul className="text-16" style={{ paddingLeft: 24 }}>
          <li><strong>Personal Information:</strong> Name, phone number, email address, and location when you contact us or request a service.</li>
          <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve your experience on our website.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">3. How We Use Your Information</h2>
        <p className="text-16">We use the information we collect to:</p>
        <ul className="text-16" style={{ paddingLeft: 24 }}>
          <li>Provide, operate, and maintain our tyre fitting services</li>
          <li>Communicate with you regarding your service requests</li>
          <li>Send appointment confirmations and follow-up messages</li>
          <li>Improve our website and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">4. Information Sharing</h2>
        <p className="text-16">
          We do not sell, trade, or rent your personal information to third parties. We may share your information only
          with trusted service providers who assist us in operating our business, provided they agree to keep your
          information confidential.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">5. Data Security</h2>
        <p className="text-16">
          We implement appropriate technical and organisational security measures to protect your personal information
          against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over
          the Internet is 100% secure.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">6. Your Rights</h2>
        <p className="text-16">Under applicable data protection laws, you have the right to:</p>
        <ul className="text-16" style={{ paddingLeft: 24 }}>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">7. Cookies</h2>
        <p className="text-16">
          Our website uses cookies to enhance your browsing experience. You can control cookies through your browser
          settings. Disabling cookies may affect certain features of our website.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">8. Third-Party Links</h2>
        <p className="text-16">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or
          content of those sites. We encourage you to review their privacy policies.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">9. Changes to This Policy</h2>
        <p className="text-16">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          revision date. We encourage you to review this page periodically.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">10. Contact Us</h2>
        <p className="text-16">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="tel:03300438437" className="highlight-text" style={{ textDecoration: "none" }}>
            0330 043 8437
          </a>.
        </p>
      </section>
    </div>
  );
}
