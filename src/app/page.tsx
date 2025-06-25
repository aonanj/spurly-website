import Image from 'next/image'
import Link from 'next/link'

export default function SpurlyLandingPage() {
  return (
    <div className="min-h-screen bg-spurly-bg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Banner Image */}
        <div className="relative w-full max-w-[450px] h-[174px] mx-auto">
          <Image
            src="/SpurlyBanner.png"
            alt="Spurly Banner"
            width={450}
            height={174}
            className="w-full h-auto"
            priority
          />
        </div>
        <br/>

        <div className="relative w-full max-w-[350px] h-[32px] mx-auto">
          <Image
            src="/SpurlyTagLine.png"
            alt="Spurly Tag Line"
            width={350}
            height={32}
            className="w-full h-auto"
            priority
          />
        </div>
        <br/>

        {/* Title */}

        {/* Main Information Section */}
        <div className="mb-12">
          <p className="text-lg mb-6 text-[#102A43]/80">
            Spurly helps you find your own words, just faster. spurly is a contextually 
            informed AI messaging assistant, primarily designed to suggest messages for 
            text conversations. Here, &ldquo;contextually informed&rdquo; includes a wide range of 
            information. Examples include:
          </p>

          {/* Features List */}
          <ul className="space-y-4 ml-6">
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                a screenshot of a conversation (spurly can suggest responses)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                your own messaging history (spurly can learn your unique voice)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                your calendar (spurly can help you schedule things)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#617D98]">•</span>
              <span className="text-[#617D98]">
                your contact list (spurly can help you manage your relationships)
              </span>
            </li>
          </ul>
        </div>

        {/* Image Showcase */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {/* Context View Image */}
          <div className="relative w-full max-w-[250px] h-[542px]">
            <Image
              src="/SpurlyContextView.png"
              alt="Spurly Main View"
              width={250}
              height={542}
              className="w-full h-auto"
            />
          </div>

          {/* Spur View Image */}
          <div className="relative w-full max-w-[250px] h-[542px]">
            <Image
              src="/SpurlySpurView.png"
              alt="Spurly Spur View"
              width={250}
              height={542}
              className="w-full h-auto"
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

        {/* Footer */}
        <footer className="text-center text-[#617D98]">
          <div className="mb-4">
            <Link href="/privacy-policy" className="mx-2 text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-use" className="mx-2 text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline">Terms of Use</Link>
            <Link href="/data-deletion" className="mx-2 text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline">Data Deletion</Link>
          </div>
          <p>&copy; 2024 Spurly. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}