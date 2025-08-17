'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import { useState } from 'react'
import { organizationSchema, appSchema } from '@/lib/seo-config'

export default function SpurlyLandingPage() {
  const currentYear = new Date().getFullYear()
  const [currentSlide, setCurrentSlide] = useState(0)

  const screenshots = [
    {
      src: '/SpurlyScreenShot-1.png',
      alt: 'Spurly Context View',
      description: 'Add context with screenshots to get spurs that fit the conversation flow'
    },
    {
      src: '/SpurlyScreenShot-2.png',
      alt: 'Spurly Message Suggestions',
      description: 'Choose from multiple different spurs to match your conversation style'
    },
    {
      src: '/SpurlyScreenShot-3.png',
      alt: 'Spurly Profile Analysis',
      description: 'Add context from their profile or upload a screenshot and have Spurly add it for you'
    },
    {
      src: '/SpurlyScreenShot-4.png',
      alt: 'Spurly Conversation History',
      description: 'Edit and copy spurs that can be dropped straight into dating and messaging apps'
    },
    {
      src: '/SpurlyScreenShot-5.png',
      alt: 'Spurly Personalization',
      description: 'Select only those types of spurs that fit you, skip the rest'
    },
    {
      src: '/SpurlyScreenShot-6.png',
      alt: 'Spurly Quick Actions',
      description: 'Save your favorite spurs and access them with one tap'
    },
    {
      src: '/SpurlyScreenShot-7.png',
      alt: 'Spurly Personality Insights',
      description: 'Get Spurly insights into their personality and how to connect with them'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8] text-[#102A43]">
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1646244');
        `}
      </Script>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appSchema)
        }}
      />

      <h1 className="sr-only">Spurly: Context-Aware AI Dating and Messaging Assistant. Now using Personality Insights.</h1>

      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="max-w-[450px] mx-auto transform transition-transform hover:scale-110">
          <a href="https://www.spurly.io/ai-dating-helper">
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

      {/* Main Information Section - redesigned two-column layout */}
      <main className="flex-1 p-8 max-w-6xl w-full mx-auto text-[#102A43]/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: copy and feature lists */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h1 className="text-lg mb-4 text-[#102A43]/80 font-semibold">Your Personalized Dating & Messaging Assistant</h1>
              <div className="space-y-4">
                <p className="text-lg mb-0 text-[#102A43]/80">
                  Spurly is a better, smarter AI assistant specifically designed for dating and messaging apps. Spurly is capable of incorporating profile information, analyzing photos for personality insights, and tuning its message suggestions (&ldquo;spurs&rdquo;) so chatting with your connections feels more natural and matches communication styles. Spurly helps you find your own words, just faster.
                </p>
                <br />

                <p className="text-lg font-normal mb-0 text-[#102A43]/80">Spurly is context-aware: add details about yourself or your connection and Spurly adapts tone, word choice, and content to fit you and connect with them. You control the context - share a lot or a little - Spurly works great in every situation with zero setup. From first message to last message (before the first date), Spurly gets conversations started quicker and keeps them flowing better.</p>
                <br />

                <p className="text-lg mb-0 text-[#102A43]/80">Casual, exclusive, and everywhere in between, Spurly adapts to your dating style so you&apos;ll have the right words at the right time in every situation.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-base font-semibold mb-4 text-[#102A43]">Spurly&apos;s context awareness can come from:</h3>
              <ul className="space-y-4 ml-4">
                <li className="flex items-start">
                  <span className="mr-3 text-[#617D98]">•</span>
                  <span className="text-[#617D98]">Screenshots of conversations - Spurly can suggest spurs to say next, with each one sounding natural and organic.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#617D98]">•</span>
                  <span className="text-[#617D98]">Profile pics of a connection - Spurly can infer personality traits to find the tone and style that works best with those traits.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#617D98]">•</span>
                  <span className="text-[#617D98]">Screenshots of profiles or socials - Spurly can analyze those for their interests and other info, and then suggest ways to communicate with them.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#617D98]">•</span>
                  <span className="text-[#617D98]">Anything you want to add - Tell Spurly a little about yourself to get spurs you can be comfortable and confident in sending.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-lg mb-0 text-[#102A43]/80">Everyone is different, so you connect with different people in different ways. Spurly is expertly designed to help you get there faster - less guessing, more connecting - so you don&apos;t miss out on someone perfect simply because you didn&apos;t have the perfect thing to say.</p>
            </div>
          </div>

          {/* Right: carousel, description, app badge */}
          <div className="space-y-6">
            <div className="md:sticky md:top-20">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-[#627D98]">
                <div className="relative flex justify-center mb-6">
                  <div className="relative w-full max-w-[369px] md:w-[369px] md:h-[700px] h-[520px] rounded-lg overflow-hidden border-4 border-[#BCCCDC] shadow-2xl mx-auto">
                    <Image
                      src={screenshots[currentSlide].src}
                      alt={screenshots[currentSlide].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <p className="text-center text-[#617D98] px-4 py-2 text-lg">{screenshots[currentSlide].description}</p>

                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={prevSlide}
                    className="bg-[#BCCCDC] text-[#102A43] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#BCCCDC]/70 transition-colors text-2xl font-extrabold"
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <div className="flex-1 px-4">
                    <div className="flex justify-center space-x-3">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#102A43]' : 'bg-[#BCCCDC]'}`}
                          aria-label={`Go to screenshot ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={nextSlide}
                    className="bg-[#BCCCDC] text-[#102A43] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#BCCCDC]/70 transition-colors text-2xl font-extrabold"
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="mt-6 w-full max-w-[220px] mx-auto hover:scale-110 transition-transform">
                <a href="https://apps.apple.com/us/app/spurly-ai/id6746918550" className="block">
                  <Image
                    src="/AppStoreBadge.png"
                    alt="App Store Badge"
                    width={220}
                    height={64}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </a>
              </div>
              
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-semibold mb-4 text-[#102A43]">More features</h3>
                <ul className="space-y-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-[#617D98]">•</span>
                    <span className="text-[#617D98]">Get four spurs with every request, each with unique content and tone. You can edit them right there. Then just tap your favorite, and Spurly&apos;s direct-messaging app integration lets you go straight to the app you choose.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#617D98]">•</span>
                    <span className="text-[#617D98]">Right message, wrong time? Tap the thumbs up button and Spurly saves that spur so you can use it whenever you want. Spurly also learns from your feedback so it can suggest even better spurs next time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#617D98]">•</span>
                    <span className="text-[#617D98]">Control how much freedom Spurly has when suggesting spurs: turn down Spurly&apos;s creativity if you want spurs that are a little safer, or turn it all the way up to get spurs that can be pretty wild.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#617D98]">•</span>
                    <span className="text-[#617D98]">Have Spurly check out what&apos;s new in entertainment, sports, viral social media, and more, and you&apos;ll get fresh spurs based on the latest trends and topics so your messages stand out from all those other &ldquo;how was your weekend?&rdquo; ones.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
          &copy; {currentYear} <a href="https://phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Phaethon Order LLC</a>. All rights reserved.
        </span>
      </footer>
    </div>

    
  );
}