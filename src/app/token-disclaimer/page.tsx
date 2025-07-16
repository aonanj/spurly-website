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
            As described in the <a href="https://www.spurly.io/terms-of-use" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Terms of Use</a>, Spurly uses one or more artificial intelligence (AI) models, large language models (LLMs), and/or multimodal LLMs (MLLMs) that are the exclusive properties of respective third-party providers. The models provided by these third-party providers implement <a href="https://en.wikipedia.org/wiki/Large_language_model#Tokenization" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">tokenization</a> in which inputs are converted into tokens. The number of tokens used to generate spur suggestions, extract profile information from screenshots, infer personality traits from profile pictures, and various other features of Spurly will vary substantially, e.g., depending on the complexity of images, amounts of text, selected &ldquo;creativity level&rdquo; (i.e., model temperature), and numerous other factors that cannot be accurately forecasted. </p>
            <p className="leading-relaxed text-[#102A43]/90 mb-6">
            Spurly subscriptions provide a weekly allotment of tokens, as this arrangement logically aligns with the underlying models. Spurly guarantees that you will be able to use the full number of tokens available at your subscription level, and in most cases, you will be able to exceed that number in order to complete a request for spur suggestions or other Spurly feature. However, Spurly cannot and does not guarantee any amount and/or quality of model-dependent and/or model-generated content and/or functionality that you will receive in return for those tokens. The number of spur suggestions that can be generated at each subscription level is explicitly indicated as an approximation (e.g., via approximately symbol &ldquo;≈&rdquo;), and those approximations assume a minimal amount of contextual information provided by the user. 
          </p>

          <p className="leading-relaxed text-[#102A43]/90 mb-6">
            The above information has been made readily available to you prior to subscribing to Spurly. By subscribing to Spurly, you are acknowledging and accepting the terms outlined in this disclaimer. You are free to cancel your weekly subscription at any time. If you are in your first week of subscription and are dissatisfied with the service or need to downgrade your subscription level, please contact us and we will see that your are fully refunded. Questions and concerns should be directed to <a href="mailto:support@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">support@spurly.io</a>. We appreciate you.
          </p>

          <p className="leading-relaxed text-[#102A43]/90 mb-8">
            Note regarding <strong>limitless</strong> subscription level: As set forth above, Spurly does not have any degree of control or influence over the models utilized to generate spur suggestions and provide various other functionalities. As used in the Spurly subscription context, <strong>limitless</strong> only guarantees that Spurly does not impose a limit on your token usage. This guarantee does not imply that third-party providers will not impose a limit or throttle usage of their models separately from Spurly. As an example, one of the models underlying Spurly has a context window of 1,000,000 tokens. The <strong>limitless</strong> subscription level does not in any way imply that you will be able to exceed that context window. As stated above, Spurly explicitly does not guarantee any features, functionalities, content, availabilities, and/or performances that Spurly does not fully control and implement. </p>
          <p className="leading-relaxed text-[#102A43]/90 mb-8">
            By subscribing to Spurly at the <strong>limitless</strong> level, you acknowledge and accept these terms, which have been made readily available to you prior to subscribing. You are free to cancel or downgrade your subscription at any time. However, if you are in your first week of <strong>limitless</strong> subscription and are dissatisfied with the service or need to downgrade your subscription level, please contact us and we will see that your are fully refunded. Questions and concerns should be directed to <a href="mailto:support@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">support@spurly.io</a>. We appreciate you.
          </p>
        </section>
        <br />
        <p className="text-[#3A506B] mb-4">Spurly is fully owned and operated by Phaethon Order LLC. All rights reserved. Additional contact information:</p>
        <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
          <p className="font-semibold">Phaethon Order LLC</p>
          <p>App Contact: <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">admin@spurly.io</a></p>
          <p>Privacy Contact: <a href="mailto:privacy@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">privacy@spurly.io</a></p>
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
          &copy; {currentYear} Phaethon Order LLC. All rights reserved. <Link href="https://www.phaethon.llc" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">www.phaethon.llc</Link>
        </span>
      </footer>
    </div>
  )
}
