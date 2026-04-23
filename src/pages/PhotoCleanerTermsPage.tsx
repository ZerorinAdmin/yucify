import { Link } from "react-router-dom";

const APP_NAME = "Photo Cleaner";

export function PhotoCleanerTermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>
      <article className="max-w-none space-y-6 text-foreground">
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By downloading, opening, or using {APP_NAME} (&quot;the App&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree, do not use the App.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Description of Service</h2>
          <p>
            {APP_NAME} helps users organize, review, and delete photos and videos from their device based on months, duplicates, and manual selection. The App works entirely offline; no media files are uploaded or stored on our servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are solely responsible for the photos and videos you choose to delete.</li>
            <li>Deleted items may be moved to your device&apos;s recycle bin or permanently removed – confirm your action before proceeding.</li>
            <li>We recommend backing up important media before using the deletion feature.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. In-App Purchases &amp; Pro Version</h2>
          <p>The App may offer a &quot;Pro&quot; subscription or one-time purchase to unlock additional features.</p>
          <p>
            <strong>No Refund Policy:</strong> All payments for Pro access are final. We do not provide refunds for any reason, including accidental purchase, change of mind, or unused subscription period. By purchasing Pro, you waive any right to a refund.
          </p>
          <p>Pro features remain accessible for the duration paid (if subscription) or permanently (if lifetime).</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Advertisements</h2>
          <p>
            The App may display third-party advertisements. Ad networks may use cookies or device identifiers to serve relevant ads, subject to their own privacy policies. We do not control ad content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {APP_NAME} and its developer shall not be liable for any loss of data, device damage, or other damages arising from your use or inability to use the App.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Changes to Terms</h2>
          <p>We may update these Terms at any time. Continued use of the App constitutes acceptance of the revised Terms.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Contact</h2>
          <p>
            For questions or concerns:{" "}
            <a href="mailto:madan.b@zerorin.com" className="text-primary underline hover:no-underline">
              madan.b@zerorin.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
