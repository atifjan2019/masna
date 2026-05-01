export const metadata = {
  title: "Terms of Service | Mobile Tyre Fitting United Kingdom",
  description: "Terms of Service for Mobile Tyre Fitting - the terms and conditions governing use of our services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="width-fixed" style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
      <h1 className="text-50 highlight-text text-center mb-4">Terms of Service</h1>
      <p className="text-16" style={{ color: "#666", textAlign: "center", marginBottom: 40 }}>
        Last updated: April 2026
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">1. Acceptance of Terms</h2>
        <p className="text-16">
          By accessing our website or using our mobile tyre fitting services, you agree to be bound by these Terms of
          Service. If you do not agree with any part of these terms, please do not use our services.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">2. Services</h2>
        <p className="text-16">
          Mobile Tyre Fitting provides mobile tyre replacement, puncture repair, TPMS sensor replacement, and related
          roadside assistance services across the United Kingdom. Our services are available 24 hours a day, 7 days a
          week, subject to technician availability.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">3. Pricing and Payment</h2>
        <ul className="text-16" style={{ paddingLeft: 24 }}>
          <li>All prices quoted are inclusive of VAT unless otherwise stated.</li>
          <li>A clear breakdown of costs will be provided before any work begins.</li>
          <li>Payment is due upon completion of the service.</li>
          <li>We accept cash, card, and bank transfer payments.</li>
          <li>Prices may vary depending on tyre size, type, and location of service.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">4. Booking and Cancellation</h2>
        <p className="text-16">
          Bookings can be made by phone or WhatsApp. If you need to cancel or reschedule, please notify us as soon as
          possible. We reserve the right to charge a cancellation fee if a technician has already been dispatched to
          your location.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">5. Service Guarantee</h2>
        <p className="text-16">
          We take pride in the quality of our work. All tyres fitted by our technicians come with a manufacturer&apos;s
          warranty. Our workmanship is guaranteed for the lifetime of the tyre under normal driving conditions. If you
          experience any issues related to the fitting, please contact us immediately.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">6. Customer Responsibilities</h2>
        <ul className="text-16" style={{ paddingLeft: 24 }}>
          <li>Ensure the vehicle is in a safe and accessible location for our technician.</li>
          <li>Provide accurate information about your vehicle and tyre requirements.</li>
          <li>Be present (or have an authorised representative) at the time of service.</li>
          <li>Inform us of any known vehicle issues that may affect the tyre fitting.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">7. Limitation of Liability</h2>
        <p className="text-16">
          While we take every precaution to provide safe and professional service, Mobile Tyre Fitting shall not be
          liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total
          liability shall not exceed the amount paid for the specific service in question.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">8. Intellectual Property</h2>
        <p className="text-16">
          All content on this website, including text, images, logos, and design, is the property of Mobile Tyre
          Fitting and is protected by copyright law. You may not reproduce, distribute, or use any content without our
          prior written consent.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">9. Website Use</h2>
        <p className="text-16">
          You agree not to misuse our website or attempt to gain unauthorised access to any part of it. We reserve the
          right to restrict access to our website at any time without notice.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">10. Governing Law</h2>
        <p className="text-16">
          These Terms of Service are governed by the laws of England and Wales. Any disputes arising from the use of
          our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">11. Changes to Terms</h2>
        <p className="text-16">
          We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon
          posting to this page. Continued use of our services constitutes acceptance of any modified terms.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="text-22 blue-text">12. Contact Us</h2>
        <p className="text-16">
          For questions about these Terms of Service, please contact us at{" "}
          <a href="tel:07883288831" className="highlight-text" style={{ textDecoration: "none" }}>
            0788 328 8831
          </a>.
        </p>
      </section>
    </div>
  );
}
