'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const screenshots = [
    {
      src: '/SpurlyScreenShot-7.png',
      alt: 'Spurly Personality Insights',
      description: 'Get Spurly insights into their personality and how to connect with them'
    },
    {
      src: '/SpurlyScreenShot-1.png',
      alt: 'Spurly Context View',
      description: 'Add context with screenshots to get spurs that fit the conversation flow'
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

        <div className="max-w-[450px] mx-auto transform transition-transform hover:scale-110">
          <a href="https://www.spurly.io">
            <Image
              src="/SpurlyArcLogo.png"
              alt="Spurly banner logo"
              width={450}
              height={196}
            className="w-full h-auto object-contain drop-shadow-md transition-transform duration-150 hover:scale-[1.10]"
            priority
          />
          </a>
        </div>
        <div className="mx-auto mt-3 w-full max-w-[360px]">
          <Image
            src="/SpurlyTagLine.png"           
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
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 px-6 py-16 sm:py-24 md:grid-cols-2">
            {/* Copy */}
            <div className="md:pl-8 lg:pl-16">
              <h1 className="text-3xl font-bold tracking-tight sm:text-2xl">
                A better, smarter AI-powered dating & messaging assistant.</h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Spurly is the only dating and messaging AI assistant with context awareness. Spurly suggests messages (“spurs”) that are custom-tuned to help you connect with your matches. Find your own words, just faster, with Spurly.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-800">
                Add up to six photos at once showing your connection’s pics, profile, or socials, and get personality insights including their traits and communication style so you can better connect with them.</p>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                Add screenshots of a conversation to get up to four spurs that can be dropped straight into the dating or messaging app you choose using Spurly’s direct-messaging app integration feature. Download Spurly on the App Store, and stop guessing, start connecting.
              </p>

              <div className="mt-6 flex w-full flex-col items-start gap-25 sm:flex-row sm:justify-center">

                <Link
                  href="#how-it-works"
                  className="inline-block bg-[#3A506B] hover:bg-[#9BC7FF] text-white font-medium py-2 px-7 rounded-lg transition-colors transform hover:scale-110 text-center"
                >
                  How it works
                </Link>

                <div className="relative w-auto max-w-[150px] h-[44px] min-w-[100px] transform transition-transform hover:scale-110">
                  <a href="https://apps.apple.com/us/app/spurly-ai/id6746918550">
                    <Image
                      src="/AppStoreBadge.png"
                      alt="App Store Badge"
                      width={150}
                      height={44}
                      className="w-auto h-auto object-contain"
                      priority
                    />
                  </a>
                </div>
              </div>
              <br />
              <p className="mt-3 text-xs text-gray-700 text-center">
                Spurly does not sell or share personal data. <Link href="#privacy" className="underline">Privacy Policy</Link>.
              </p>
            </div>

            {/* Phone mockup with screenshot */}
            <div className="flex justify-center md:justify-end md:pr-8 lg:pr-16">
              {/* Wrapper positions nav buttons slightly outside the phone */}
              <div className="relative">
                <div className="relative aspect-[9/19] w-[320px] rounded-[2.2rem] border border-black/10 bg-white shadow-2xl">
                  {/* Screen */}
                  <div className="absolute inset-1 overflow-hidden rounded-[1.6rem] bg-white">
                    <Image
                      src={screenshots[currentSlide].src}
                      alt={screenshots[currentSlide].alt}
                      fill
                      className="object-cover"
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
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <li className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm font-semibold">Context-aware suggestions</p>
                <p className="mt-1 text-sm text-gray-600">Start chatting with spurs suggested to feel natural to you.</p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm font-semibold">Tone matching</p>
                <p className="mt-1 text-sm text-gray-600">Get four spurs per request, each with unique tone and content.</p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-5">
                <p className="text-sm font-semibold">Real-time learning</p>
                <p className="mt-1 text-sm text-gray-600">Spurly is constantly updating how it suggests spurs based on what you provide.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">How Spurly works</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">(1) Share some context with Spurly</p>
              <p className="mt-1 text-sm text-gray-700">
                Add up to six photos of a conversation, a connection, their socials, or other context photos. Put in a little information about yourself and your connection so Spurly can personalize your spurs.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">(2) Focus Spurly for what you need</p>
              <p className="mt-1 text-sm text-gray-700">
                Set a topic of conversation every spur is on point. Select the current situation Spurly can help with - open a conversation, recover from a misstep, get their number, setup a date, and more.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm font-semibold">(3) Pick a spur (edit) and send</p>
              <p className="mt-1 text-sm text-gray-700">
                Get four unique spurs. Edit them right in place. Then drop your favorite straight into the app you want with Spurly&apos;s direct-messaging app integration.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-700">
                Or see what Spurly suggests without much context - skip straight to step 3 by tapping the &ldquo;Get Spurs&rdquo; button.
              </p>

        </section>

        {/* EXAMPLES */}
        <section className="bg-gray-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-bold">Real Examples</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Main Spur (using prompt from profile: &lsquo;Two truths and a lie&rsquo;)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                  &ldquo;Okay, calling it: you&apos;ve for sure gone skydiving and you hate olives, right? So the lie is owning
                  three cats. If I&apos;m wrong, I owe you a drink. If I&apos;m right, you have to let me buy you a drink.&rdquo;
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Banter Spur (responding to &ldquo;wyd tn&rdquo; message)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                  &ldquo;Considering two options: 1) perfecting my breakfast tacos before tmw morning, 2) convincing you to try option 1.&rdquo;
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Warm Spur (using interests from Bumble profile)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                  &ldquo;Looks like you&apos;re a fan of places with some awards to back up their cuisine claims. Great, same. I&apos;ll take you to my favorite if you&apos;ll tell me yours, deal?&rdquo;
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-semibold">Cool Spur (responding to &ldquo;I don&apos;t give out my # until meeting in person&rdquo; message)</p>
                <div className="mt-3 rounded-xl bg-white p-4 shadow">
                  <p className="text-sm text-gray-800">
                  &ldquo;Trad values? I respect that. We&apos;ll keep it classy like they did on those 1950s dating apps. Are you free this Thurs or Fri?&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">Examples are illustrative; Spurly adapts to individual contexts, and each one is unique.</p>
          </div>
        </section>

        {/* WHY SPURLY */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">What Makes Spurly Special</h2>
          <ul className="mt-6 grid list-disc gap-3 pl-6 text-sm text-gray-800">
            <li>Spurly can understand full conversations, extracted from multiple screenshots, and use the full conversation to suggest spurs. </li>
            <li>Spurly suggests multiple spurs with every request, and each spur has a unique vibe and approach.</li>
            <li>Spurly offers direct-messaging app integrations so you can drop the spur you choose straight into the app you chose it for.</li>
            <li>Spurly specifically adapts to your individual context and communication style and helps match that to their personality.</li>
          </ul>
        </section>


        {/* FOOTER CTA */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
          <div className="rounded-3xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold">Stop guessing, start connecting. Download Spurly today.</h3>
            <p className="mt-2 text-sm text-gray-700">We’ll be randomly giving out a few limitless subscriptions to those that install before yearend (2025). Contact <a href="https://phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">support@spurly.io</a> for more details.</p>
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
            <br />
            <p className="mt-3 text-xs text-gray-500">
              By using Spurly, you agree to our {" "}
              <Link href="/terms-of-use" className="underline">Terms of Use</Link> and {" "}
              <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </section>
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
          &copy; {2025} <a href="https://phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Phaethon Order LLC</a>. All rights reserved.
        </span>
      </footer>
    </>
  );
}
