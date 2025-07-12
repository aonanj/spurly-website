import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spurly – Token Usage Disclaimer',
  description: 'Token-based subscription usage disclaimer for Spurly by Phaethon Order LLC',
}

export default function TokenDisclaimer() {
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
          Spurly Token Usage Disclaimer
        </h2>

        <section className="animate-slide-up">
          <p className="leading-relaxed text-[#102A43]/90 mb-6">
            Spurly subscriptions provide a weekly allotment of tokens, which are required for various functionality of the app (e.g., generating spurs, extracting data from screenshots).
            The number of tokens consumed per spur can vary significantly based on several factors — including 
            whether the user has provided a conversation, the format of that conversation (e.g., screenshot vs. text), 
            and the amount and type of contextual information supplied about yourself and a connection.
          </p>

          <p className="leading-relaxed text-[#102A43]/90 mb-6">
            Due to these variations, Spurly can only offer an <strong className="text-[#3A506B]">approximate estimate</strong> of how many spurs each 
            subscription level might support. The actual number of spurs a user can generate in a given week 
            may differ substantially from these estimates.
          </p>

          <p className="leading-relaxed text-[#102A43]/90 mb-6">
            Spurly does not guarantee a fixed number of spurs per subscription period. By subscribing, 
            you acknowledge and accept that token consumption is dynamic and that your actual usage outcomes 
            may vary.
          </p>
        </section>
        <br />
        <p className="text-[#3A506B] mb-4">Questions and concerns may be directed to:</p>
        <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
          <p className="font-semibold">Phaethon Order LLC</p>
          <p>App Contact: <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">admin@spurly.io</a></p>
          <p>Support Contact: <a href="mailto:support@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">support@spurly.io</a></p>
          <p>Corporate Contact: <a href="mailto:phaethon@phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">phaethon@phaethon.llc</a></p>
        </div>
        <br />
        <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
          <p className="font-semibold">Effective Dates</p>
          <p>Original Effective Date: July 12, 2025</p>
          <p>Last Updated: July 12, 2025</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#BCCCDC] flex flex-col items-center justify-center p-4 text-[#627D98]">
        <div className="mb-4">
          <Link href="/terms-of-use" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Terms of Use</Link>
          <Link href="/privacy-policy" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Privacy Policy</Link>
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
