import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spurly™ – Privacy Policy',
  description: 'Learn how Spurly by Phaethon Order LLC protects your personal information. Our comprehensive privacy policy covers data collection, usage, sharing, security measures, and your rights as a user.',
}

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8] text-[#102A43]">
      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="relative w-full max-w-[450px] h-[174px] mx-auto">
          <Image
            src="/SpurlyBanner.png"
            alt="Spurly banner logo"
            width={450}
            height={174}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 max-w-3xl w-full mx-auto animate-fade-in">
      <h2 className="text-[#3A506B] text-center text-3xl font-bold mb-6">
          Spurly Privacy Policy
        </h2>

        <div className="space-y-8">
          <section className="animate-slide-up">
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Introduction
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
              This Privacy Policy describes how Phaethon Order LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Company&rdquo;) 
              collects, uses, shares, and safeguards your information when you use our 
              mobile application, Spurly™ (&ldquo;App&rdquo;, &ldquo;Service&rdquo;, or &ldquo;Services&rdquo;). By accessing or using our App, you 
              consent to the practices described herein.
            </p>
            <p className="leading-relaxed text-[#102A43]/90">
              We are committed to protecting your privacy and ensuring you have a positive experience 
              when using our App. This policy applies to all users of our Services and forms part of 
              our Terms of Use.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Information We Collect
            </h2>
            <p className="mb-4 text-[#102A43]/90">
              We collect information you provide directly to us, information we collect automatically, 
              and information from third parties:
            </p>
            
            <h3 className="text-xl font-medium text-[#3A506B] mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90 mb-4">
              <li>Account information (name, email address, username, password)</li>
              <li>Profile information (age, bio, preferences)</li>
              <li>User-generated content (prompt content, GPT responses, images, connected persons and related info)</li>
              <li>Communications with us (support requests, feedback)</li>
              <li>Payment information (processed securely by third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-medium text-[#3A506B] mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90 mb-4">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (features used, actions taken, time spent in app)</li>
              <li>Log data (IP address, browser type, access times)</li>
              <li>Location information (with your consent)</li>
              <li>Analytics data (app performance, crash reports)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-medium text-[#3A506B] mb-3">Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Social media account information (when you sign in with Google, Facebook, or Apple)</li>
              <li>GPT model content and responses</li>
              <li>Publicly available information</li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Sign-On with Third Parties
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
              Our App allows registration via Google, Facebook, and Apple. When you choose to sign in 
              using these services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>We access only the information you authorize us to access</li>
              <li>Your information is accessed consistent with your privacy settings on those platforms</li>
              <li>We may receive your name, email address, and unique identifier</li>
              <li>We do not receive or store your third-party account passwords</li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              Please review the privacy policies of{' '}
              <a href="https://policies.google.com/privacy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline" target="_blank" rel="noopener noreferrer">Google</a>,{' '}
              <a href="https://www.facebook.com/privacy/policy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline" target="_blank" rel="noopener noreferrer">Facebook</a>, and{' '}
              <a href="https://www.apple.com/legal/privacy/" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline" target="_blank" rel="noopener noreferrer">Apple</a>{' '}
              for details on their data practices.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Use of Your Information
            </h2>
            <p className="mb-3 text-[#102A43]/90">We do not collect your information for advertising or sale purposes. Your information is not made available outside of our App, apart from what you proactively choose to use to send to OpenAI GPT models (necessary for the core featuers of our App).</p>
            <p className="mb-3 text-[#102A43]/90">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Provide, maintain, and improve the App and our Services</li>
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Communicate about new features, products, or services</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent or illegal activities</li>
              <li>Personalize and improve your experience</li>
              <li>Comply with legal obligations and enforce our terms and policies</li>
              <li>Protect the rights, property, and safety of our users and the public</li>
              <li>Conduct research and development</li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Legal Basis for Processing (EEA/UK Users)
            </h2>
            <p className="mb-3 text-[#102A43]/90">
              If you are in the European Economic Area or United Kingdom, we process your personal 
              data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li><strong className="text-[#617D98]">Contract:</strong> To provide our Services and fulfill our Terms of Use</li>
              <li><strong className="text-[#617D98]">Consent:</strong> When you have given explicit consent (e.g., for marketing communications)</li>
              <li><strong className="text-[#617D98]">Legitimate Interests:</strong> To improve our Services, ensure security, and conduct business operations</li>
              <li><strong className="text-[#617D98]">Legal Obligations:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Third-Party Services
            </h2>
            <p className="mb-3 text-[#102A43]/90">
              We work with trusted third-party service providers to deliver our Services. Your data 
              may be shared with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>
                <strong className="text-[#617D98]">Google Firebase:</strong> Secure cloud storage, authentication, and analytics (
                <a 
                  href="https://firebase.google.com/support/privacy" 
                  className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong className="text-[#617D98]">Google Cloud Platform:</strong> Cloud Vision API, Cloud Run, and infrastructure services (
                <a 
                  href="https://cloud.google.com/terms/cloud-privacy-notice" 
                  className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong className="text-[#617D98]">OpenAI:</strong> AI-powered features and content generation (
                <a 
                  href="https://openai.com/privacy" 
                  className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong className="text-[#617D98]">Analytics Providers:</strong> To understand app usage and improve user experience
              </li>
              <li>
                <strong className="text-[#617D98]">Customer Support Tools:</strong> To provide efficient user support
              </li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              These providers are contractually obligated to protect your information and use it only 
              for the services they provide to us.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Data Sharing and Disclosure
            </h2>
            <p className="mb-3 text-[#102A43]/90">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li><strong className="text-[#617D98]">With Your Consent:</strong> When you explicitly agree to sharing</li>
              <li><strong className="text-[#617D98]">Service Providers:</strong> With vendors who help us operate our business</li>
              <li><strong className="text-[#617D98]">Legal Requirements:</strong> To comply with laws, regulations, or legal processes</li>
              <li><strong className="text-[#617D98]">Protection of Rights:</strong> To protect our rights, property, safety, or that of our users</li>
              <li><strong className="text-[#617D98]">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong className="text-[#617D98]">Aggregated Information:</strong> Non-identifiable data for analytics and research</li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              We do not sell, rent, or trade your personal information to third parties for their 
              marketing purposes.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Data Retention
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
              We retain your information for as long as necessary to provide our Services and fulfill 
              the purposes outlined in this Privacy Policy. Retention periods are determined based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>The length of time you maintain an account with us</li>
              <li>Legal, regulatory, tax, or accounting requirements</li>
              <li>Our legitimate business interests</li>
              <li>Resolution of disputes and enforcement of agreements</li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              When you delete your account, we will delete or anonymize your personal information 
              within 90 days, except as required by law.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Data Security
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
              We implement appropriate technical and organizational measures to protect your personal 
              information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              While we strive to protect your information, no method of transmission over the internet 
              or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              International Data Transfers
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              Your information may be transferred to and processed in countries other than your country 
              of residence, including the United States. These countries may have different data 
              protection laws. By using our App, you consent to the transfer of your information to 
              these countries. We take appropriate safeguards to ensure your information remains 
              protected in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              Our Services are not intended for users under 18 years of age. We do not knowingly 
              collect personal information from children under 18. If we discover that we have 
              inadvertently collected information from a child under 18, we will promptly delete 
              such information. If you believe we have collected information from a child under 18, 
              please contact us immediately.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Your Rights and Choices
            </h2>
            <p className="mb-3 text-[#102A43]/90">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            
            <h3 className="text-xl font-medium text-[#3A506B] mb-3">General Rights</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90 mb-4">
              <li><strong className="text-[#617D98]">Access:</strong> Request a copy of your personal information</li>
              <li><strong className="text-[#617D98]">Update:</strong> Correct inaccurate or incomplete information</li>
              <li><strong className="text-[#617D98]">Delete:</strong> Request deletion of your personal information</li>
              <li><strong className="text-[#617D98]">Download:</strong> Receive your data in a portable format</li>
              <li><strong className="text-[#617D98]">Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h3 className="text-xl font-medium text-[#3A506B] mb-3">Additional Rights for EEA/UK Residents</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90 mb-4">
              <li>Object to processing based on legitimate interests</li>
              <li>Restrict processing of your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>

            <h3 className="text-xl font-medium text-[#3A506B] mb-3">California Residents</h3>
            <p className="text-[#102A43]/90 mb-3">
              Under the California Consumer Privacy Act (CCPA), you have additional rights including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Right to know what personal information we collect, use, and disclose</li>
              <li>Right to delete your personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
            
            <p className="mt-4 text-[#102A43]/90">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">
                privacy@spurly.io
              </a>. We may need to verify your identity before processing your request.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Keep you logged in to your account</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze app usage and performance</li>
              <li>Deliver relevant content and features</li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              You can manage cookie preferences through your device settings. Disabling cookies may 
              limit some features of our App.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.3s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Third-Party Links
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              Our App may contain links to third-party websites, services, or content. We are not 
              responsible for the privacy practices of these third parties. We encourage you to 
              review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.4s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Marketing Communications
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              With your consent, we may send you promotional emails about new features, products, 
              or services. You can opt-out of marketing communications at any time by clicking the 
              &ldquo;unsubscribe&rdquo; link in our emails or updating your preferences in account settings. 
              Note that you will continue to receive transactional and account-related communications.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Requests for Personal Information
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
            Phaethon Order LLC, the owner of Spurly, reviews the legality of all government or law enforcement requests for personal information. We respond only to requests that are legally valid and properly scoped—such as subpoenas, court orders, or other legal processes issued under applicable law.
            </p>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
            All requests found to be legally valid and properly scoped, and that we comply with, are formally documented, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>The identity of the requesting authority</li>
              <li>The specific data requested</li>
              <li>The legal basis for the request</li>
              <li>Our response to the request</li>
              <li>The date of the request</li>
            </ul>
            <p className="mt-3 text-[#102A43]/90">
              Where legally permitted and feasible, we will make a reasonable effort to notify affected users before disclosing any personal information. These records are retained for audit and compliance purposes and are accessible only to authorized personnel.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.6s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Updates to this Privacy Policy
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. We will notify you of material changes 
              by posting the updated policy in the App and updating the &ldquo;Last Updated&rdquo; date. 
              Your continued use of our Services after changes indicates acceptance of the updated 
              Privacy Policy.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1.6s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed text-[#102A43]/90 mb-3">
              If you have questions, concerns, or requests regarding this Privacy Policy or our 
              privacy practices, please contact us at:
            </p>
            <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
              <p className="font-semibold">Phaethon Order LLC</p>
                <p>App Contact: <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">admin@spurly.io</a></p>
                <p>Privacy Contact: <a href="mailto:privacy@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">privacy@spurly.io</a></p>
                <p>Corporate Contact: <a href="mailto:phaethon@phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">phaethon@phaethon.llc</a></p>
            </div>
            <p className="mt-4 text-[#102A43]/90">
              We aim to respond to all privacy-related inquiries within 30 days.
            </p>
          </section>

          <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
            <p className="font-semibold">Effective Dates</p>
            <p>Original Effective Date: May 28, 2025</p>
            <p>Last Updated: July 8, 2025</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#BCCCDC] flex flex-col items-center justify-center p-4 text-[#627D98]">
          <div className="mb-4">
            <Link href="/terms-of-use" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Terms of Use</Link>
            <Link href="/data-deletion" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Data Deletion</Link>
          </div>
          <Image
            src="/SpurlyAppIcon.png"
            alt="Spurly app logo"
            width={64}
            height={64}
            className="object-contain mb-2"
          />
          <span className="text-[#3A506B] text-center">
            &copy; {currentYear} Phaethon Order LLC. All rights reserved.
          </span>
        </footer>
    </div>
  )
}