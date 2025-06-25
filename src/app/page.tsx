import Image from 'next/image'
import Link from 'next/link'

export default function SpurlyLandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#BCCCDC' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/SpurlyBanner.png"
            alt="Spurly Banner"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Main Information Section */}
        <div className="mb-12">
          <p className="text-lg mb-6" style={{ color: '#102A43' }}>
            spurly helps you find your own words, just faster. spurly is a contextually 
            informed AI messaging assistant, primarily designed to suggest messages for 
            text conversations. Here, "contextually informed" includes a wide range of 
            information. Examples include:
          </p>

          {/* Features List */}
          <ul className="space-y-4 ml-6">
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#627D98' }}>•</span>
              <span style={{ color: '#627D98' }}>
                a screenshot of a conversation (spurly can suggest responses)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#627D98' }}>•</span>
              <span style={{ color: '#627D98' }}>
                profile pics (spurly can infer personality traits to customize responses)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#627D98' }}>•</span>
              <span style={{ color: '#627D98' }}>
                profile bio (spurly can incorporate relevant info in suggested responses)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#627D98' }}>•</span>
              <span style={{ color: '#627D98' }}>
                info about you (spurly can personalize suggested responses to you)
              </span>
            </li>
          </ul>
        </div>

        {/* Screenshots Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/SpurlyMainView.png"
                alt="Spurly Main View"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/SpurlySpurView.png"
                alt="Spurly Spur View"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* TestFlight Link */}
        <div className="text-center mb-16">
          <Link
            href="https://testflight.apple.com/join/1ZkXa9s6"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#102A43' }}
          >
            Join the TestFlight Beta
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t" style={{ borderColor: '#627D98' }}>
          <p style={{ color: '#627D98' }}>
            copyright 2025. phaethon order llc. all rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}