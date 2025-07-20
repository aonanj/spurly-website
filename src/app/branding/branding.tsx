import Image from 'next/image'
import Link from 'next/link'

export default function BrandingAssets() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="max-w-[450px] mx-auto">
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
      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
        <h2 className="text-[#3A506B] text-center text-3xl font-bold mb-6">
          Spurly – Branding & Visual Identity
        </h2>

        <p className="text-[#3A506B] mb-6 text-center">
          The following logos and color palette are proprietary visual assets of Spurly, a product of Phaethon Order LLC. Unauthorized use is prohibited.
        </p>

        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Official Logos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <Image src="/SpurlyAppIcon.png" alt="Spurly App Icon" width={128} height={128} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">App Icon</p>
          </div>
          <div className="text-center">
            <Image src="/SpurlyBanner.png" alt="Spurly Banner Logo" width={300} height={120} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">Banner Logo</p>
          </div>
        </div>

        <p className="text-[#3A506B] mb-6 text-sm italic text-center">
          These assets are protected under trademark and copyright law. Do not alter, recolor, distort, or redistribute without explicit permission.
        </p>

        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-12">
          <div>
            <div className="bg-[#5FA8D2] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Accent: #5FA8D2</p>
          </div>
          <div>
            <div className="bg-[#F15F5C] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Accent 2: #F15F5C</p>
          </div>
          <div>
            <div className="bg-[#D27C2C] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Accent 3: #D27C2C</p>
          </div>
          <div>
            <div className="bg-[#FFA400] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Accent 4: #FFA400</p>
          </div>
          <div>
            <div className="bg-[#CAD2D9] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Borders: #CAD2D9</p>
          </div>
          <div>
            <div className="bg-[#3A506B] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Brand: #3A506B</p>
          </div>
          <div>
            <div className="bg-[#B5D2D9] h-20 rounded-lg shadow-inner" />
            <p className="text-[#3A506B] mt-2">Brand Alt: #B5D2D9</p>
          </div>
          <div>
            <div className="bg-[#EFF4F8] h-20 rounded-lg shadow-inner border" />
            <p className="text-[#3A506B] mt-2">Primary Background: #EFF4F8</p>
          </div>
        </div>

        <p className="text-[#3A506B] text-sm italic text-center">
          These colors are part of Spurly’s brand identity and may not be used in combination to impersonate or misrepresent affiliation with the app.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-[#BCCCDC] flex flex-col items-center justify-center p-4 text-[#627D98]">
        <div className="mb-4">
          <Link href="/privacy-policy" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-use" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Terms of Use</Link>
          <Link href="/ip" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">IP Inventory</Link>
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

export const metadata = {
  title: 'Spurly – Branding & Visual Identity',
  description: 'Official logos and color palette of Spurly, protected under intellectual property laws.',
  openGraph: {
    title: 'Spurly – Branding & Visual Identity',
    description: 'Browse Spurly’s protected logos and official color palette.',
    images: [
      {
        url: '/SpurlyBanner.png',
        width: 1200,
        height: 630,
        alt: 'Spurly Branding Banner'
      }
    ],
    siteName: 'Spurly'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spurly – Branding & Visual Identity',
    description: 'Browse Spurly’s protected logos and official color palette.',
    images: ['/SpurlyBanner.png'],
    creator: '@spurlyapp',
  }
}
