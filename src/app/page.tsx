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
      description: 'Add context with screenshots to get Spurs that fit the conversation flow'
    },
    {
      src: '/SpurlyScreenShot-2.png',
      alt: 'Spurly Message Suggestions',
      description: 'Choose from multiple different Spurs to match your conversation style'
    },
    {
      src: '/SpurlyScreenShot-3.png',
      alt: 'Spurly Profile Analysis',
      description: 'Add profile pictures and bios from screenshots to match their personality'
    },
    {
      src: '/SpurlyScreenShot-4.png',
      alt: 'Spurly Conversation History',
      description: 'Edit and copy Spurs that can be dropped straight into any messaging app'
    },
    {
      src: '/SpurlyScreenShot-5.png',
      alt: 'Spurly Personalization',
      description: 'Customize Spur suggestions based on your preferences and style'
    },
    {
      src: '/SpurlyScreenShot-6.png',
      alt: 'Spurly Quick Actions',
      description: 'Save your favorite Spurs and access them with one tap'
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

      <h1 className="sr-only">Spurly: Context-Informed AI-Powered Messaging Assistant for Authentic Connections. Now with Personality Insights.</h1>

      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="relative w-full max-w-[450px] h-[196px] mx-auto transform transition-transform hover:scale-105">
          <Image
            src="/SpurlyArcLogo.png"
            alt="Spurly banner logo"
            width={450}
            height={196}
            className="w-full h-auto object-contain drop-shadow-md"
            priority
          />
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

      {/* Main Information Section */}
      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
        <p className="text-lg mb-6 text-[#102A43]/80">
          Spurly helps you find your own words, just faster. Spurly is a contextually 
          informed AI messaging assistant, designed to suggest messages - &ldquo;Spurs&rdquo; - for texting, DMs, and in-app chats. With Spurly, &ldquo;contextually informed&rdquo; can be as broad or as specific as you want it to be. Spurly is unique and stands out from other, generic AI  messaging assistants in the different types of info it can use, alone or in combination, to suggest Spurs that can be highly individualized. Everyone is different, which is why you connect with different people in different ways. Spurly is expertly designed to help you get there faster - less guessing, more connecting - so you don&apos;t have to miss another connection simply because you couldn&apos;t find the right words fast enough. For example, Spurly can get context information from:
        </p>

        {/* Features List */}
        <ul className="space-y-4 ml-6">
          <li className="flex items-start">
            <span className="mr-3 text-[#617D98]">•</span>
            <span className="text-[#617D98]">
              Screenshots of conversations - Spurly can suggest what to say next, and in that help your conversations flow naturally and organically.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-[#617D98]">•</span>
            <span className="text-[#617D98]">
              Profile pics of a connection - Spurly can infer personality traits to find the tone, style, and context that works best with those traits. 
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-[#617D98]">•</span>
            <span className="text-[#617D98]">
              Screenshots of profiles - Spurly can examine those for text and other features that help generate Spurs your connections will want to respond to first. 
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-[#617D98]">•</span>
            <span className="text-[#617D98]">
              Anything you want to add about yourself - Tell Spurly a little about yourself, and you&apos;ll get Spurs that fit you specifically so you can be comfortable and confident with the messages you send. 
            </span>
          </li>
        </ul>
        <br />
        <br />
        <p className="text-lg mb-6 text-[#102A43]/80">
          Whether you&apos;re looking for chill, fun dates with a lot of people or you want to focus on connecting with just one, Spurly helps with both of those goals and everything in between.
        </p>

        {/* Features List */}
        <ul className="space-y-4 ml-6">
          <li className="flex items-start">
            <span className="mr-3 text-[#617D98]">•</span>
            <span className="text-[#617D98]">
              Control how much freedom Spurly has when suggesting Spurs: turn down Spurly&apos;s creativity if you&apos;re feeling a little reserved, or turn it all the way up to get Spurs that can be pretty wild. 
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-[#617D98]">•</span>
            <span className="text-[#617D98]">
              Have Spurly check what&apos;s trending so you get fresh Spurs based on the latest trends and topics—making your messages stand out from the usual &ldquo;how was your weekend?&rdquo; ones that everyone else is sending. 
            </span>
          </li>
        </ul>
        
        {/* Image Carousel */}
        <div className="my-12">
          <div className="relative max-w-2xl mx-auto">
            {/* Carousel Container */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 border-2 border-[#627D98]">
              {/* Image Container with exact dimensions */}
              <div className="relative flex justify-center mb-6">
                <div className="relative w-[369px] h-[800px] rounded-lg overflow-hidden border-4 border-[#BCCCDC] shadow-2xl">
                  <Image
                    src={screenshots[currentSlide].src}
                    alt={screenshots[currentSlide].alt}
                    width={369}
                    height={800}
                    className="object-contain bg-white"
                  />
                </div>
              </div>
              
              {/* Description */}
              <p className="text-center text-[#617D98] px-4 py-4 text-lg">
                {screenshots[currentSlide].description}
              </p>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-[400px] bg-[#BCCCDC] text-[#102A43] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#BCCCDC]/70 transition-colors text-3xl font-extrabold"
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-[400px] bg-[#BCCCDC] text-[#102A43] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#BCCCDC]/70 transition-colors text-3xl font-extrabold"
                aria-label="Next screenshot"
              >
                ›
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#102A43]' : 'bg-[#BCCCDC]'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="relative w-full max-w-[450px] h-[196px] mx-auto transform transition-transform hover:scale-110">
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