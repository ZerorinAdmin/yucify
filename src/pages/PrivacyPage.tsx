import { Link } from "react-router-dom";

export function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>
      <article className="prose prose-neutral max-w-none space-y-6">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: March 2025</p>

        <p>
          This privacy notice for Yucify ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you visit our website at https://yucify.com, or any website of ours that links to this privacy notice, or engage with us in other related ways, including any sales, marketing, or events.
        </p>
        <p>
          Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at madan1baral@gmail.com.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">Summary of Key Points</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services.</li>
          <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
          <li><strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources.</li>
          <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-12 mb-4">1. What Information Do We Collect?</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p>
          The personal information we collect may include: email addresses, names, and phone numbers. We do not process sensitive information. Payment data is handled and stored by Stripe. You may find their privacy notice at: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">https://stripe.com/privacy</a>.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">2. How Do We Process Your Information?</h2>
        <p>
          We process your personal information to: facilitate account creation and authentication; respond to user inquiries and offer support; fulfill and manage your orders, payments, returns, and exchanges.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">4. When and With Whom Do We Share Your Personal Information?</h2>
        <p>
          We do not share your information with third parties.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">5. Do We Use Cookies and Other Tracking Technologies?</h2>
        <p>
          We may use cookies and other tracking technologies to collect and store your information.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">7. How Long Do We Keep Your Information?</h2>
        <p>
          We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">8. How Do We Keep Your Information Safe?</h2>
        <p>
          We aim to protect your personal information through a system of organizational and technical security measures.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">9. What Are Your Privacy Rights?</h2>
        <p>
          You may review, change, or terminate your account at any time. If you want to terminate or delete your account, please contact us at madan1baral@gmail.com.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">12. Do We Make Updates to This Notice?</h2>
        <p>
          Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">13. How Can You Contact Us About This Notice?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at <a href="mailto:madan1baral@gmail.com" className="text-primary underline hover:no-underline">madan1baral@gmail.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">14. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
        <p>
          Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please write to us at: madan1baral@gmail.com.
        </p>
      </article>
    </div>
  );
}
