// app/ai-dating-helper/page.tsx
// Drop this into your Next.js App Router project. Tailwind classes assume Tailwind is already configured.
// Replace all TODOs (App Store URL, screenshots) before publishing.

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "AI Dating Helper for Tinder, Hinge & Bumble | Spurly",
  description:
    "Get context-aware openers and replies for Tinder, Hinge, and Bumble. Spurly is an AI dating helper that fits your tone—no cringe.",
  alternates: {
    canonical: "https://www.spurly.io/ai-dating-helper",
  },
  openGraph: {
    title: "Spurly – AI Dating Helper",
    description:
      "Context-aware openers and replies that sound like you. For Tinder, Hinge, and Bumble.",
    url: "https://www.spurly.io/ai-dating-helper",
    siteName: "Spurly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spurly – AI Dating Helper",
    description:
      "Context-aware openers and replies that sound like you. For Tinder, Hinge, and Bumble.",
  },
};

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="max-w-[450px] mx-auto transform transition-transform hover:scale-110">
          <a href="https://www.spurly.io">
            <Image
              src="/SpurlyArcLogo.png"
              alt="Spurly banner logo"
              width={450}
              height={196}
            className="w-full h-auto object-contain"
            priority
          />
          </a>
        </div>
        <br />
        <div className="relative w-full max-w-[350px] h-[32px] mx-auto bg-[#BCCCDC] transform transition-transform hover:scale-105">
          <Image
            src="/SpurlyTagLine.png"
            alt="Spurly Tag Line"
            width={800}
            height={73}
            className="w-full h-auto drop-shadow-md"
            priority
          />
        </div>
      </header>
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-16 sm:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              AI Dating Helper that writes <span className="italic">your</span> kind of message
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Spurly turns screenshots or chat snippets into polished openers and replies that feel like you and vibe with them. No generic one-liners or kinda clever quips with nothing else -- Spurly can read the context and tone, and help you connect with them faster. Supports direct access of Tinder, Hinge, and Bumble, Instagram, FB Messenger, OKCupid, and more, so your conversations can keep flowing. 
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="relative w-full max-w-[200px] h-[58px] mx-auto transform transition-transform hover:scale-110">
                <a href="https://apps.apple.com/us/app/spurly-ai/id6746918550">
                    <Image
                    src="/AppStoreBadge.png"
                    alt="App Store Badge"
                    width={200}
                    height={58}
                    className="w-full h-auto object-contain"
                    priority
                />
                </a>
                </div>
              <Link
                href="#how-it-works"
                className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
              >
                How it works
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              No sign-in with any other accounts is required. You can sign in using Apple, Google, or Facebook, but only if you want to and Spurly never sees your passwordds.<Link href="#privacy" className="underline">Learn more</Link>.
            </p>
          </div>

          {/* Screenshot placeholder */}
          <div className="relative">
            <div className="aspect-[9/16] w-full rounded-2xl border border-gray-200 bg-gray-50 shadow-inner" />
            <p className="mt-3 text-center text-xs text-gray-500"><Image src="SpurlySreenShot-1.png" alt="Spurly Screenshot 1" width={200} height={358} className="w-full h-auto object-contain" priority /></p>
          </div>
        </div>
      </section>

      {/* Social proof / quick hits */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-gray-200 p-5">
              <p className="text-sm font-semibold">Context-aware suggestions</p>
              <p className="mt-1 text-sm text-gray-600">Understands profiles, prompts, message history, and a lot more.</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-5">
              <p className="text-sm font-semibold">Tone matching</p>
              <p className="mt-1 text-sm text-gray-600">Get four spurs with each request, all their own unique approach.</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-5">
              <p className="text-sm font-semibold">Real-time learning</p>
              <p className="mt-1 text-sm text-gray-600">Spurly adapts to your feedback -- tap thumbs up on a spur to get more like it, or tap thumbs down to get less.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold">1) Context is Everything</p>
            <p className="mt-1 text-sm text-gray-700">
              Add a screenshot. Spurly can look at bios, prompts, profiles, socials, messages -- whatever you give it -- to 
                            understand context and personalities for effective spurs.
            </p>
            <p>Get personality insights on their style and best way to communicate with them. It&apos;s almost a cheat sheet for connecting with them.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold">2) Read the Room</p>
            <p className="mt-1 text-sm text-gray-700">
              Some other apps might give one or two sorta clever quips. There&apos;s nowhere to go after that though, and it&apos;s mostly the same for every person. But with Spurly, you control where the conversation goes.</p>
              
            <p>Get their number or ask them out right when you&apos;re ready. Spurly lets you decide when it&apos;s time for that, and suggests the type of spurs you want each time.
            </p>

            <p>If spurs are sounding too generic, you can customize them better instantly by changing Spurly&apos;s creativity. Or if spurs start sounding too wild, you can have Spurly dial it back. </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold">3) Fight the Lag</p>
            <p className="mt-1 text-sm text-gray-700">
              Switching between apps for every message is rough, and it can kill the conversation flow. You can use your spur right away with Spurly&apos;s seamless messaging app integration. Just tap to copy your spur, and then tap your app from the list.
            </p>
            <p>Currently works with Tinder, Hinge, Bumble, Instagram, FB Messenger, OKCupid, and others.</p>

            <p>You can make your changes right there before copying it. And for spurs that go great all the time, tap save so you can pull those up whenever need.</p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Real-world examples</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">Opener (Hinge prompt: &apos;Two truths and a lie&apos;)</p>
              <div className="mt-3 rounded-xl bg-white p-4 shadow">
                <p className="text-sm text-gray-800">
                  &ldqos;Okay, calling it: you&apos;ve <em>for sure</em> gone skydiving, probably hate olives, and the lie is owning
                  three cats. If I&apos;m wrong, I owe you a drink. If I&apos;m right, you have to let me buy you a drink.&rdqos;
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">Reply (Tinder: responding to &ldquo;wyd&rdquo;):</p>
              <div className="mt-3 rounded-xl bg-white p-4 shadow">
                <p className="text-sm text-gray-800">
                  &ldqos;Considering two options: 1) perfecting my breakfast taco technique, 2) convincing you to try option 1.&rdqos;
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">Escalate (Bumble: shared foodie interest)</p>
              <div className="mt-3 rounded-xl bg-white p-4 shadow">
                <p className="text-sm text-gray-800">
                  &ldqos;Into spots with with some awards to back up their claims? Great, same. I&apos;ll take you to my favorite if you&apos;ll tell me yours, deal?&rdqos;
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">Defuse (they declined to give number until after meeting)</p>
              <div className="mt-3 rounded-xl bg-white p-4 shadow">
                <p className="text-sm text-gray-800">
                  &ldqos;Lil trad values? I respect that. We&apos;ll keep it classic like they used to on the 1950s apps. Are you free Thurs or Fri?&rdqos;
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Examples are illustrative; Spurly adapts to your context and tone.</p>
        </div>
      </section>

      {/* Platform-specific advice */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Works with Tinder, Hinge, and Bumble</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div id="tinder" className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold">Tinder</p>
            <p className="mt-1 text-sm text-gray-700">
              Quick momentum wins. Spurly keeps messages tight, flirty, and inviting for responses. Avoid walls of text that overshare without being so closed off it never goes anywhere. 
            </p>
          </div>
          <div id="hinge" className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold">Hinge</p>
            <p className="mt-1 text-sm text-gray-700">
              Don&apos;t risk mixing up one person&apos;s info with another&apos;s. Spurly saves their info, so you can always be on point.
            </p>
          </div>
          <div id="bumble" className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold">Bumble</p>
            <p className="mt-1 text-sm text-gray-700">
              Find your own words, just a little faster when starting a conversation. Get four spurs with every request, and two shots to retry, so you can find works for you, and what works for them.
            </p>
          </div>
        </div>
      </section>

      {/* Why Spurly */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Better than generic chatbots following scripts</h2>
          <ul className="mt-6 grid list-disc gap-3 pl-6 text-sm text-gray-800">
            <li>Understands full conversations, and considers that when suggesting spurs.</li>
            <li>Get multiple spurs at once, each with a unique vibe and approach, not just the same message with slightly different wording.</li>
            <li>Direct messaging app integrations. Tap to copy, and then pick from a list of just ones you have on your device.</li>
            <li>Spurly keeps your information as your information. Whatever you add to Spurly stays confidential and securely stored. And you can request to have your data deleted any time <Link href="#privacy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">privacy</Link>.</li>
          </ul>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Privacy, data, and safety</h2>
        <p className="mt-4 text-sm text-gray-700">
          Spurly is designed to minimize data exposure. You can generate suggestions from on-device context or share
          only the pieces you choose. We don&apos;t require connecting your dating accounts. For details on retention,
          deletion, and contact, see our {" "}
          <Link href="/privacy-policy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Privacy Policy</Link>{" "} and {" "}
          <Link href="/data-deletion" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Data Deletion</Link> pages.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4">
            <details className="rounded-2xl border border-gray-200 p-5">
              <summary className="cursor-pointer text-sm font-semibold">Do I need to connect my Tinder/Hinge/Bumble account?</summary>
              <p className="mt-2 text-sm text-gray-700">
                No. Spurly works from screenshots, text, and whatever you specifically provide. And it works with nothing at all () No account linking is required.
              </p>
            </details>
            <details className="rounded-2xl border border-gray-200 p-5">
              <summary className="cursor-pointer text-sm font-semibold">Will they be able to tell I&apos;m using AI?</summary>
              <p className="mt-2 text-sm text-gray-700">
                You should sound like you all the time. Spurly is designed to be unobtrusive and to work <i>with</i> you in your conversations, instead of just replacing you. There isn&apos;t another app that does that. Objectively, Spurly is the most subtle option.
              </p>
            </details>
            <details className="rounded-2xl border border-gray-200 p-5">
              <summary className="cursor-pointer text-sm font-semibold">Is there a free version?</summary>
              <p className="mt-2 text-sm text-gray-700">
                You can create and account, login, and check out the app a bit. Spurs are a paid service at this time though. Send an email to support@spurly.io and they&apos;ll probably make an exception, but just for you, and just this once. 
              </p>
            </details>
            <details className="rounded-2xl border border-gray-200 p-5">
              <summary className="cursor-pointer text-sm font-semibold">What data do you store?</summary>
              <p className="mt-2 text-sm text-gray-700">
                Minimal metadata for account and subscription management. We don&apos;t collect or save anything that you don&apos;t explicitly input into the app though (besides anonymous diagnostic data, like crashes). We support the right to personal privacy, and pledge to never sell any of your info, regardless of how it&apos;s collected. If at any point you decide to close your account, or you simply want to delete your data, you can do that at at any time. Instructions are available in the app (open side menu → settings & preferences → delete account) and here: <a href="https://www.spurly.io/data-deletion-policy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Spurly Data Deletion Procedure</a>.
              </p>
            </details>
            <details className="rounded-2xl border border-gray-200 p-5">
              <summary className="cursor-pointer text-sm font-semibold">Does this violate any platform rules?</summary>
              <p className="mt-2 text-sm text-gray-700">
                No. We never send anything on your behalf. Neither your data nor your connections&apos; data is ever used or sold out of the app other than what is use for the minimum necessary to provide app functionality.
              </p>
            </details>
          </div>
        </div>
      </section>
→
      {/* Footer CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
        <div className="rounded-3xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to try Spurly?</h3>
          <p className="mt-2 text-sm text-gray-700">
            Install the app and generate your first few messages free.
          </p>
          <div className="mt-4">
            <a
              href="#" // TODO: Replace with real App Store URL
              className="inline-block rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Get Spurly on the App Store
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            By using Spurly, you agree to our {" "}
            <Link href="/terms-of-use" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Terms of Use</Link> and {" "}
            <Link href="/privacy-policy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      {/* JSON-LD: SoftwareApplication */}
      <Script id="ld-software" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Spurly",
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS",
            description:
              "Spurly is an AI dating helper that suggests context‑aware openers and replies for Tinder, Hinge, and Bumble—so you sound like you.",
            publisher: { "@type": "Organization", name: "Phaethon Order LLC" },
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            sameAs: [
              "https://spurly.io",
              // "https://apps.apple.com/your-app-id" // TODO: add App Store canonical URL
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need to connect my Tinder/Hinge/Bumble account?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Spurly works from screenshots or pasted text. No direct account linking is required.",
                },
              },
              {
                "@type": "Question",
                name: "Will people notice it’s AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spurly matches tone settings and keeps messages short and specific to your chat, which avoids the \"AI wall of text\" tell.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a free version?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can try Spurly with limited suggestions. Subscriptions unlock higher limits and advanced controls.",
                },
              },
              {
                "@type": "Question",
                name: "What data do you store?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Minimal metadata for account and subscription management. Chat content is only retained if you choose to save it.",
                },
              },
              {
                "@type": "Question",
                name: "Does this violate any platform rules?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spurly suggests copy you can edit and send yourself. It doesn’t automate sending or interact with third‑party APIs on your behalf.",
                },
              },
            ],
          }),
        }}
      />
    </main>
    </>
  );
}
