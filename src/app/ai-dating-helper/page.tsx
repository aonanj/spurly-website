'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const screenshots = [
    {
      src: '/SpurlyScreenShot-1.png',
      alt: 'Spurly Context View',
      description: 'Add context with screenshots to get Spurs that fit the conversation flow'
    },
    {
      src: '/SpurlyScreenShot-3.png',
      alt: 'Spurly Message Suggestions',
      description: 'Choose from multiple different Spurs to match your conversation style'
    }
  ]

    const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  
  return (
    <>
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="mx-auto w-full max-w-[460px]">
          <Image
            src="/SpurlyArcLogo.png"             // /public/SpurlyArcLogo.png
            alt="Spurly arc logo"
            width={460}
            height={200}
            className="w-full h-auto object-contain drop-shadow-md transition-transform duration-150 hover:scale-[1.02]"
            priority
          />
        </div>

        <div className="mx-auto mt-3 w-full max-w-[360px]">
          <Image
            src="/SpurlyTagLine.png"             // /public/SpurlyTagLine.png
            alt="less guessing. more connecting."
            width={800}
            height={80}
            className="w-full h-auto drop-shadow-md"
            priority
          />
        </div>
      </header>

      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#BCCCDC]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2">
            {/* Copy */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A better, smarter AI dating assistant to help you find your words for your message faster.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-800">
                Add up to six photos at a time showing your connection pics, profile, or socials, and get personality insights including their traits and communication style so you can better connect with them. Or add screenshots of a conversation to get up to four suggested messages that can be dropped straight into most dating and messaging apps with Spurly&apos;s messaging app integration feature. Less guessing, more connecting. Find your words faster, with Spurly.
              </p>

              <div className="mt-6 flex flex-col items-start gap-10 sm:flex-row sm:justify-start">
                <div className="relative w-full max-w-[150px] h-[44px] transform transition-transform hover:scale-110">
                  <a href="https://apps.apple.com/us/app/spurly-ai/id6746918550">
                    <Image
                      src="/AppStoreBadge.png"
                      alt="App Store Badge"
                      width={150}
                      height={44}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </a>
                </div>
                <Link
                  href="#how-it-works"
                  className="inline-block bg-[#3A506B] hover:bg-[#9BC7FF] text-white font-medium py-2 px-6 rounded-lg transition-colors transform hover:scale-105 text-center"
                >
                  How it works
                </Link>
              </div>
              <br />
              <p className="mt-3 text-xs text-gray-700">
                Across-app messaging integration does not require linked accounts. <Link href="#privacy" className="underline">Learn more</Link>.
              </p>
            </div>

            {/* Phone mockup with screenshot */}
            <div className="flex justify-center md:justify-end">
              {/* Wrapper positions nav buttons slightly outside the phone */}
              <div className="relative">
                <div className="relative aspect-[9/19] w-[320px] rounded-[2.2rem] border border-black/10 bg-white shadow-2xl">
                  {/* Screen */}
                  <div className="absolute inset-1 overflow-hidden rounded-[1.6rem] bg-white">
                    <Image
                      src={screenshots[currentSlide].src}
                      alt={screenshots[currentSlide].alt}
                      sizes="(max-width: 768px) 320px, 400px"
                      className="object-contain bg-white"
                      priority
                    />
                  </div>
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#BCCCDC] text-[#102A43] flex items-center justify-center hover:bg-[#BCCCDC]/70 transition-colors text-3xl font-extrabold"
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#BCCCDC] text-[#102A43] flex items-center justify-center hover:bg-[#BCCCDC]/70 transition-colors text-3xl font-extrabold"
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              </div>
            </div>
            </div>
        </section>

        {/* QUICK HITS */}
        <section className="bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
          </div>
        </section>

        {/* QUICK HITS */}
        <section className="bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <li className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm font-semibold">Context-aware suggestions</p>
                <p className="mt-1 text-sm text-gray-600">Understands prompts, bios, and message history.</p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm font-semibold">Tone matching</p>
                <p className="mt-1 text-sm text-gray-600">Casual, playful, witty, or earnest—your choice.</p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm font-semibold">No copy–paste farm</p>
                <p className="mt-1 text-sm text-gray-600">Short, sendable lines—not walls of text.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">1) Share context</p>
              <p className="mt-1 text-sm text-gray-700">
                Paste chat text or add a screenshot. Spurly extracts the useful bits (bios, prompts, recent messages).
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">2) Pick a vibe</p>
              <p className="mt-1 text-sm text-gray-700">
                Choose your tone and goal—open, escalate, ask out, or defuse. Get several options each time.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">3) Edit & send</p>
              <p className="mt-1 text-sm text-gray-700">
                Tweak a word or two and go. Tap to copy and drop into your app of choice.
              </p>
            </div>
          </div>
        </section>

        {/* EXAMPLES */}
        <section className="bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-bold">Real‑world examples</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Opener (Hinge prompt: “Two truths and a lie”)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                    “Okay, I’m calling it: you’ve <em>definitely</em> gone skydiving, probably hate olives, and the lie is owning
                    three cats. Tell me I’m wrong and win a coffee.”
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Reply (Tinder: they wrote “wyd”) – playful</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                    “Considering two options: 1) perfecting my breakfast taco technique, 2) convincing you to try option 1.”
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Escalate (Bumble: shared foodie interest)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                    “You’re into spots with a good bar program—same. Want to trade favorites and pick one to test this week?”
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Defuse (they teased you about early gym time)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                    “I swear I’m fun after 7am. Before that I only communicate via espresso. Brunch truce?”
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">Examples are illustrative; Spurly adapts to your context and tone.</p>
          </div>
        </section>

        {/* WHY SPURLY */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Why Spurly over generic scripts</h2>
          <ul className="mt-6 grid list-disc gap-3 pl-6 text-sm text-gray-800">
            <li>Understands screenshots and chat context—responses reference what was actually said.</li>
            <li>Matches your tone settings (casual, witty, playful, earnest).</li>
            <li>Short, sendable lines by default; no paragraph dumps.</li>
            <li>Local‑first posture: you control what’s shared. Opt‑in sync only. See <Link href="#privacy" className="underline">privacy</Link>.</li>
          </ul>
        </section>

        {/* PRIVACY */}
        <section id="privacy" className="bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-bold">Privacy, data, and safety</h2>
            <p className="mt-4 text-sm text-gray-700">
              Spurly minimizes data exposure. You can generate suggestions from on‑device context or share only what you
              choose. We don’t require connecting your dating accounts. See our {" "}
              <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and {" "}
              <Link href="/data-deletion" className="underline">Data Deletion</Link> pages.
            </p>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
          <div className="rounded-3xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold">Ready to try Spurly?</h3>
            <p className="mt-2 text-sm text-gray-700">Install the app and generate your first few messages free.</p>
            <div className="relative p-8 justify-center items-center w-full max-w-[200px] h-[58px] mx-auto transform transition-transform hover:scale-110">
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
            <p className="mt-3 text-xs text-gray-500">
              By using Spurly, you agree to our {" "}
              <Link href="/terms-of-use" className="underline">Terms of Use</Link> and {" "}
              <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
