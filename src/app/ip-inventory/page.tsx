import Image from 'next/image'
import Link from 'next/link'

export default function SpurlyIP() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="max-w-[450px] mx-auto">
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
      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
        <h2 className="text-[#3A506B] text-center text-3xl font-bold mb-6">
          Spurly – Intellectual Property Inventory
        </h2>

        <p className="text-[#3A506B] mb-6 text-center">
          This page outlines the various components of the Spurly application that may be subject to intellectual property protection. These are grouped by category for clarity and completeness.
        </p>

        {/* Trademarks */}
        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Trademarks</h3>
        <ul className="list-disc pl-6 text-[#3A506B] space-y-2">
          <li>Spurly™ (app name)</li>
          <li>Spurly.ai™ (app display name)</li>
          <li>Spurly.io™ (app domain name)</li>
          <li>Main Spur™; Warm Spur™; Cool Spur™; Banter Spur™ (phrases)</li>
          <li>Spur™ (in the context of message suggestions)</li>
          <li>Less guessing, more connecting.™ (slogan)</li>
          <li>Stop guessing, start connecting.™ (slogan)</li>
          <li>Find your own words, faster.™ (slogan)</li>
          <li>App icon design and color palette</li>
          <li>Spurly wordmark (custom stylized typography)</li>
          <li>Distinctive UI/UX elements recognizable to consumers (e.g., liquid glass button styles)</li>
        </ul>

        {/* Copyrights */}
        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Copyrights</h3>
        <ul className="list-disc pl-6 text-[#3A506B] space-y-2">
          <li>UI/UX design and layout (SwiftUI source code)</li>
          <li>Logo and visual assets (e.g., SpurlyBanner.png, SpurlyAppIcon.png)</li>
          <li>System prompts and model directives stored in resource files</li>
          <li>Marketing copy and in-app language</li>
          <li>Animations, tooltips, and onboarding guides</li>
          <li>Help center content and legal disclaimers</li>
          <li>Email templates and notification design</li>
          <li>Website content and structure (e.g., spurly.io, page.tsx)</li>
        </ul>

        {/* Trade Secrets */}
        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Trade Secrets</h3>
        <ul className="list-disc pl-6 text-[#3A506B] space-y-2">
          <li>Custom prompt structures optimized for specific tone, formality, and results</li>
          <li>Topic injection logic for fallback message generation</li>
          <li>Thumbs-up/down feedback strategy and message reranking heuristics</li>
          <li>System prompt fallback mechanisms and retry logic</li>
          <li>Internal scoring and filtering mechanisms to determine spur quality</li>
          <li>Design principles for cold-open generation under chaotic user conditions</li>
          <li>LLM provider selection logic and tiered model fallback</li>
          <li>Backend architecture linking SwiftUI frontend, Python middleware, and Firebase/OpenAI APIs</li>
        </ul>

        {/* Patents */}
        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Patents (Pending)</h3>
        <ul className="list-disc pl-6 text-[#3A506B] space-y-2">
          <li>System and method for injecting user profile traits into LLM prompt chains to generate synthetic dating app messages</li>
          <li>Framework for modular AI message generation using structured sketch input and reactive topic routing</li>
          <li>Token budget enforcement for LLM-assisted UI messaging while maintaining tone and formatting fidelity</li>
          <li>Adaptive fallback model cycling based on feedback, prompt failures, or cold-start scenarios</li>
          <li>Interactive message suggestion interface with quality filtering, boost toggles, and token counter</li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-[#BCCCDC] flex flex-col items-center justify-center p-4 text-[#627D98]">
        <div className="mb-4">
          <Link href="/privacy-policy" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Privacy Policy</Link>
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

export const metadata = {
  title: 'Spurly – Intellectual Property Inventory',
  description: 'A categorized inventory of Spurly’s intellectual property including trademarks, copyrights, trade secrets, and patentable systems.'
}
