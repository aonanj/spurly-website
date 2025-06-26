import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'spurly – privacy policy',
  description: 'privacy policy for spurly by phaethon order llc',
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A506B] text-center mb-8">
          Spurly Privacy Policy
        </h1>
        <p className="text-[#102A43]/80 mb-8 text-center text-lg">
          <strong className="text-[#102A43]/80">Effective Date:</strong> May 28, 2025
        </p>

        <div className="space-y-8">
          <section className="animate-slide-up">
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Introduction
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              This Privacy Policy describes how Phaethon Order LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) 
              collects, uses, shares, and safeguards your information when you use our 
              mobile application, spurly (&ldquo;App&rdquo;). By accessing or using our App, you 
              consent to the practices described herein.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Personal identifiers (e.g., name, email address, social media IDs)</li>
              <li>User-generated content and data inputs</li>
              <li>Usage and device information</li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Sign-On with Third Parties
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              Our App allows registration via Google, Facebook, and Apple. Your 
              information is accessed consistent with your privacy settings. Review 
              the privacy policies of Google, Facebook, and Apple for details.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Use of Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Provide, maintain, and improve the App</li>
              <li>Account creation and login facilitation</li>
              <li>Customer service</li>
              <li>Communications about updates and features</li>
              <li>Security and integrity of the App</li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Third-Party Services
            </h2>
            <p className="mb-3 text-[#102A43]/90">Your data may be sent to third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>
                <strong className="text-[#617D98]">Google Firebase:</strong> Secure cloud storage (
                <a 
                  href="https://firebase.google.com/support/privacy" 
                  className="text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                ).
              </li>
              <li>
                <strong className="text-[#617D98]">Google Cloud:</strong> Vision, Run, other cloud services (
                <a 
                  href="https://cloud.google.com/terms/cloud-privacy-notice" 
                  className="text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                ).
              </li>
              <li>
                <strong className="text-[#617D98]">OpenAI (gpt):</strong> Enhanced functionality based on user inputs (
                <a 
                  href="https://openai.com/privacy" 
                  className="text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                ).
              </li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Data Sharing and Disclosure
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#102A43]/90">
              <li>Third-party vendors and service providers</li>
              <li>Legal obligations or response to legal processes</li>
              <li>Protection of rights, property, or safety</li>
            </ul>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Data Security
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              Reasonable measures are implemented to protect data from unauthorized 
              access, though no service is fully secure.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed text-f[#102A43]/90">
              Not intended for users under 18. Personal information of minors will 
              be promptly deleted if discovered.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Your Rights and Choices
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              You can update or delete your account information anytime via account 
              settings or by contacting us.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Updates to this Privacy Policy
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              This policy may be updated periodically. Continued use after updates 
              indicates acceptance of changes.
            </p>
          </section>

          <section className="animate-slide-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl font-semibold text-[#3A506B] mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed text-[#102A43]/90">
              For questions or concerns regarding this Privacy Policy, please contact 
              us at{' '}
              <a 
                href="mailto:admin@spurly.io" 
                className="text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline"
              >
                admin@spurly.io
              </a>
              .
            </p>
          </section>
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
            &copy; {currentYear} phaethon order llc. all rights reserved.
          </span>
        </footer>
    </div>
  )
}