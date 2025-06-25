import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'spurly - contextually informed AI messaging assistant',
  description: 'find your own words, faster. with spurly. spurly is a contextually informed AI messaging assistant designed to suggest messages.',
  keywords: ['AI', 'messaging', 'assistant', 'text', 'conversation', 'contextual'],
}

export default function SpurlyLandingPage() {
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
        <br />
        <div className="relative w-full max-w-[350px] h-[32px] mx-auto bg-[#BCCCDC]">
          <Image
            src="/SpurlyTagLine.png"
            alt="Spurly Tag Line"
            width={350}
            height={32}
            className="w-full h-auto"
            priority
          />
        </div>
        </header>

        {/* Title */}

        {/* Main Information Section */}
        <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
          <p className="text-lg mb-6 text-[#102A43]/80">
            Spurly helps you find your own words, just faster. Spurly is a contextually 
            informed AI messaging assistant, designed to suggest messages for 
            text conversations. Here, &ldquo;contextually informed&rdquo; includes a wide range of 
            information. Examples include:
          </p>

          {/* Features List */}
          <ul className="space-y-4 ml-6">
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                screenshots of conversations (spurly can suggest responses)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                profile pics of a connection (spurly can infer personality traits and tailor suggestions to those)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                screenshots of profiles (spurly can extract profile bios, prompt responses, etc., and use those to suggest messages)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                anything you want to add about yourself (spurly can customize suggestions based on your preferences)
              </span>
            </li>
          </ul>
        
        {/* Image Showcase */}
        <br />
        <br />
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {/* Context View Image */}
          <div className="relative w-full max-w-[250px] h-[542px] border-2 border-[#627D98] rounded-lg shadow-md p-2 bg-white">
            <Image
              src="/SpurlyContextView.png"
              alt="Spurly Main View"
              width={250}
              height={542}
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Spur View Image */}
          <div className="relative w-full max-w-[250px] h-[542px] border-2 border-[#627D98] rounded-lg shadow-md p-2 bg-white">
            <Image
              src="/SpurlySpurView.png"
              alt="Spurly Spur View"
              width={250}
              height={542}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* App Store Link */}
        <div className="text-center mb-12">
          <Link href="https://apps.apple.com/us/app/spurly/id6479989 Spurly" passHref>
            <div className="inline-block bg-[#BCCCDC] text-[#102A43] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#BCCCDC]/70 hover:text-[#102A43]/70 hover:underline transition-colors">
              Download on the App Store
            </div>
          </Link>
        </div>
        </main>

        {/* Additional Information Section */}
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
            &copy; {currentYear} phaethon order llc. all rights reserved.
          </span>
        </footer>
      </div>
  );
}