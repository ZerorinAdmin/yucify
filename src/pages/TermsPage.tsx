import { Link } from "react-router-dom";

export function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>
      <article className="prose prose-neutral max-w-none space-y-6">
        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-muted-foreground text-sm">Last updated: March 2025</p>

        <p>
          We are Yucify, ("Company," "we," "us," "our"). We operate the website https://yucify.com/ (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services"). You can contact us by email at madan1baral@gmail.com.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Yucify, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services. We recommend that you print a copy of these Legal Terms for your records.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">1. OUR SERVICES</h2>
        <p>
          The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
        </p>
        <p>
          The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>
          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"). Our Content and Marks are protected by copyright and trademark laws. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
        </p>
        <p>
          Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">3. USER REPRESENTATIONS</h2>
        <p>
          By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">4. USER REGISTRATION</h2>
        <p>
          You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">5. PURCHASES AND PAYMENT</h2>
        <p>
          We accept Stripe as a form of payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">6. SUBSCRIPTIONS</h2>
        <p>
          Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis. The length of your billing cycle is monthly. We offer a 7-days free trial to new users. You can cancel your subscription at any time by logging into your account.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">7. PROHIBITED ACTIVITIES</h2>
        <p>
          You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. You agree not to: systematically retrieve data to create a database without permission; trick, defraud, or mislead us; circumvent security features; disparage us or the Services; harass or harm others; use the Services inconsistently with applicable laws; engage in unauthorized framing or linking; upload viruses or malicious material; use automated systems or data mining tools; impersonate others; or use the Services to compete with us.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">12. PRIVACY POLICY</h2>
        <p>
          We care about data privacy and security. By using the Services, you agree to be bound by our <Link to="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link> posted on the Services, which is incorporated into these Legal Terms. The Services are hosted in the United States.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">13. TERM AND TERMINATION</h2>
        <p>
          These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to deny access to and use of the Services to any person for any reason or for no reason, including for breach of these Legal Terms.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">18. DISCLAIMER</h2>
        <p>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">19. LIMITATIONS OF LIABILITY</h2>
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES. OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
        </p>

        <h2 className="text-xl font-semibold mt-12 mb-4">25. CONTACT US</h2>
        <p>
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at: <a href="mailto:madan1baral@gmail.com" className="text-primary underline hover:no-underline">madan1baral@gmail.com</a>.
        </p>
      </article>
    </div>
  );
}
