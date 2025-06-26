// app/data-deletion/page.js (or pages/data-deletion.js if using Pages Router)
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'spurly – data deletion policy and procedure',
  description: 'data deletion policy and procedure for spurly by phaethon order llc',
}

export default function DataDeletionPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8] text-[#102A43]">
      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="relative w-full max-w-[450px] h-[174px] mx-auto">
          <Image
            src="/SpurlyBanner.png"
            alt="Spurly banner logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-[#102A43] text-center mb-6">
          Spurly Data Deletion Policy and Procedure
        </h1>
        
        <p className="text-[#102A43]/80 mb-4">
          <strong>Effective Date:</strong> May 28, 2025
        </p>

        <h3 className="text-xl font-semibold text-[#3A506B] mt-6 mb-3">
          Procedure to request deletion of your data from spurly:
        </h3>
        
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            Send an email to{' '}
            <a href="mailto:admin@spurly.io" className="text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline">
              admin@spurly.io
            </a>
            .
          </li>
          <li>Use the subject line: &ldquo;Data Deletion Request&rdquo;.</li>
          <li>
            In the body of the email, please include your name and email address 
            associated with your spurly account.
          </li>
          <li>
            If you use a third-party provider to sign on to spurly, please identify 
            that provider: Apple, Google, or Facebook.
          </li>
        </ol>

        <div className="mt-8 space-y-4">
          <p>
            We will process your request and delete all of your user data from our 
            systems within 30 days. You will receive a confirmation email once the 
            deletion is complete.
          </p>
          
          <p>
            Failure to follow these instructions or provide accurate and complete 
            information allowing us to identify your account may prevent the deletion 
            of your data as requested.
          </p>
          
          <p>
            We are not responsible for informing you of any omission, error, or other 
            failure to follow these instructions that could prevent the deletion of 
            your data.
          </p>
        </div>

        <div className="mt-8">
          <p className="font-bold mb-2">Third-Party Services</p>
          <p className="mb-4">
            When you joined spurly, you acknowledged that some or all of the data we 
            collected from you would be shared with one or more third-party service 
            providers.
          </p>
          <p className="mb-4">
            These service providers include Apple, Facebook, Google, and OpenAI. A 
            request to delete your data from spurly will not affect the data stored 
            with those other service provides.
          </p>
          <p>
            We are not responsible for contact any third-party providers on your 
            behalf. Please submit requests to delete your data directly to those 
            providers.
          </p>
        </div>

        <div className="mt-8">
          <p className="font-bold mb-2">Updates to this Policy</p>
          <p>This Policy may be updated periodically and without notice.</p>
        </div>

        <div className="mt-8">
          <p className="font-bold mb-2">Contact Us</p>
          <p>
            For questions or concerns regarding this Policy, please contact us at{' '}
            <a href="mailto:admin@spurly.io" className="text-[#9BC7FF] hover:text-[#3A506B] transition-colors hover:underline">
              admin@spurly.io
            </a>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#BCCCDC] flex flex-col items-center justify-center p-4 text-[#627D98]">
          <div className="mb-4">
            <Link href="/privacy-policy" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-use" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Terms of Use</Link>
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
  )
}