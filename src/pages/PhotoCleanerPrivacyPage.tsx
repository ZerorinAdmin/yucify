export function PhotoCleanerPrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <article className="max-w-none space-y-6 text-foreground">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            <strong>Email Address (optional, if you contact support or create an account):</strong> We may collect and store your email address when you reach out to us, sign up for updates, or purchase Pro features. It is stored locally in our analytics system (no cloud database except for the email itself).
          </p>
          <p>
            <strong>Usage &amp; Analytics Data:</strong> We use analytics tools (e.g., Firebase Analytics, Mixpanel, or similar) to understand how you use the App, what features are popular, and to fix bugs. This includes aggregated data like screen views, button taps, crash reports, and device type (model, OS version). Analytics data does not include your photos, videos, or any personal content.
          </p>
          <p>
            <strong>Advertising ID:</strong> To show relevant ads, we or our ad partners may collect your device&apos;s advertising identifier (IDFA on iOS, AAID on Android). You can reset or limit ad tracking in your device settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. What We DO NOT Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Your photos or videos</strong> – They never leave your device. We do not upload, store, or process them on any server.
            </li>
            <li>
              <strong>Personal identifiers beyond email</strong> – No name, address, phone number, or government ID.
            </li>
            <li>
              <strong>Files from your gallery</strong> – All operations (grouping, duplication detection, deletion) happen locally on your phone.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. How We Use Your Email</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to support inquiries.</li>
            <li>To send important service updates (rare, e.g., security or major feature changes).</li>
            <li>No marketing emails unless you explicitly opt-in.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Data Sharing &amp; Third Parties</h2>
          <p>We do not sell, trade, or rent your email or analytics data to third parties. However:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ad networks (Google AdMob, etc.) receive basic device data and ad interaction data as per their own privacy policies.</li>
            <li>Analytics providers receive anonymized usage data to help us improve the App.</li>
            <li>We may disclose information if required by law.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Data Storage &amp; Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your email is stored securely in our limited database (e.g., Firebase or similar).</li>
            <li>No personal content (photos/videos) is ever saved to our servers.</li>
            <li>We use industry-standard encryption for data in transit (HTTPS) and at rest (database encryption).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You may request deletion of your stored email by contacting{" "}
              <a href="mailto:madan.b@zerorin.com" className="text-primary underline hover:no-underline">
                madan.b@zerorin.com
              </a>
              .
            </li>
            <li>You may opt out of analytics by disabling &quot;Share Analytics&quot; in the App settings (if provided).</li>
            <li>You may reset your advertising ID in your device settings.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Children&apos;s Privacy</h2>
          <p>The App is not intended for children under 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Changes to This Privacy Policy</h2>
          <p>We may update this policy occasionally. The latest version will always be available within the App.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Contact</h2>
          <p>
            For privacy questions or to delete your email:{" "}
            <a href="mailto:madan.b@zerorin.com" className="text-primary underline hover:no-underline">
              madan.b@zerorin.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
