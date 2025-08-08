import Image from 'next/image'
import Link from 'next/link'

export default function BrandingAssets() {
  const currentYear = new Date().getFullYear()

  const colorPalette = [
    { label: 'Accent', light: '#5FA8D2', dark: '#6BAEDB' },
    { label: 'Accent Contrast', light: '#F15F5C', dark: '#FFFFFF' },
    { label: 'Accent 2', light: '#F15F5C', dark: '#F37975' },
    { label: 'Accent 3', light: '#D27C2C', dark: '#DA8F49' },
    { label: 'Accent 4', light: '#FFA400', dark: '#FFCD33' },
    { label: 'Borders / Separators', light: '#CAD2D9', dark: '#474749' },
    { label: 'Brand Color', light: '#3A506B', dark: '#5A7695' },
    { label: 'Brand Alt Dark', light: '#B5D2D9', dark: '#39506B' },
    { label: 'Card Background', light: '#EAF6FF', dark: '#232323' },
    { label: 'Highlight', light: '#9BC7FF', dark: '#A4D1FF' },
    { label: 'Primary Background', light: '#EFF4F8', dark: '#1A1A1A' },
    { label: 'Primary Button', light: '#39506B', dark: '#5A7695' },
    { label: 'Primary Text', light: '#102A43', dark: '#E4E4E7' },
    { label: 'Secondary Background', light: '#D9E1EB', dark: '#2C2C2D' },
    { label: 'Secondary Borders', light: '#6F8090', dark: '#CAD2D9' },
    { label: 'Secondary Button', light: '#5FA8D2', dark: '#5FA8E2' },
    { label: 'Secondary Text', light: '#617D98', dark: '#8E8E92' },
    { label: 'Tertiary Background', light: '#BCCCDC', dark: '#39393B' },
    { label: 'Tertiary Button', light: '#C70714', dark: '#D93644' },
    { label: 'Tertiary Text', light: '#E4E4E7', dark: '#102A43' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="max-w-[450px] mx-auto transform transition-transform hover:scale-110">
          <a href="https://spurly.io">
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
      </header>

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
            <Image src="/SpurlyTextLogo.png" alt="Spurly Banner Logo" width={300} height={120} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">Text Banner Logo</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <Image src="/SpurlyAppIconAlt.png" alt="Spurly App Icon Alt" width={128} height={128} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">App Icon (Alt)</p>
          </div>
          <div className="text-center">
            <Image src="/SpurlyArcLogo.png" alt="Spurly Arc Logo" width={300} height={129} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">Arc Logo</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <Image src="/SpurlyLower.png" alt="Spurly Lowercase Logo" width={200} height={70} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">Text Banner Logo (Alt)</p>
          </div>
          <div className="text-center">
            <Image src="/SpurlyFlyingSpur.png" alt="Spurly Flying Spur Logo" width={350} height={78} className="rounded shadow-lg mx-auto" />
            <p className="text-[#3A506B] mt-2">Flying Spur Logo</p>
          </div>
        </div>

        <p className="text-[#3A506B] mb-6 text-sm italic text-center">
          These assets are protected under trademark and copyright law. Do not alter, recolor, distort, or redistribute without explicit permission.
        </p>

        <h3 className="text-[#3A506B] text-2xl font-semibold mt-8 mb-4">Color Palette</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center mb-12">
          {colorPalette.map((color, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4">
              <p className="text-[#3A506B] font-semibold mb-2">{color.label}</p>
              <div className="flex justify-center items-center gap-4">
                <div className="w-20 h-10 rounded border border-gray-300" style={{ backgroundColor: color.light }} />
                <div className="w-20 h-10 rounded border border-gray-300" style={{ backgroundColor: color.dark }} />
              </div>
              <p className="text-[#3A506B] text-sm mt-2">Light: {color.light} | Dark: {color.dark}</p>
            </div>
          ))}
        </div>

        <p className="text-[#3A506B] text-sm italic text-center">
          These colors are part of Spurly’s brand identity and may not be used in combination to impersonate or misrepresent affiliation with the app.
        </p>
      </main>

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
        url: '/SpurlyArcLogo.png',
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
    images: ['/SpurlyArcLogo.png']
  }
}