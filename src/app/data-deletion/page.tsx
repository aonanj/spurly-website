// app/data-deletion/page.js (or pages/data-deletion.js if using Pages Router)
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Spurly – Data deletion policy and procedure',
  description: 'Data deletion policy and procedure for Spurly by Phaethon Order LLC',
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
      <h2 className="text-[#3A506B] text-center text-3xl font-bold mb-6">
          Spurly Data Deletion Policy and Procedure
        </h2>

        <h3 className="text-xl font-semibold text-[#3A506B] mt-6 mb-3">
          Procedure to request deletion of your data from Spurly:
        </h3>
        
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            Send an email to{' '}
            <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">
              admin@spurly.io
            </a>
            .
          </li>
          <li>Use the subject line: &ldquo;Data Deletion Request&rdquo;.</li>
          <li>
            In the body of the email, please include:
            <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1 text-sm">
              <li>The email address associated with your Spurly account</li>
              <li>An explicit statement requesting the deletion of your data, such as &ldquo;please delete the account associated with this email address and all related data from Spurly.&rdquo;</li>
            </ol>
          </li>
          <li>
            If you use a third-party provider to sign on to Spurly, please identify 
            that provider: Apple, Google, or Facebook.
            <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1 text-sm">
              <li>IMPORTANT: If you sign in with Apple and use &ldquo;Hide My Email,&rdquo; you must provide the Apple-generated random email address, which is the email address associated with your Spurly account. Failure to provide the exact email address associated with your Spurly account will prevent deletion of your data.</li>
            </ol>
          </li>
        </ol>

        <div className="mt-8 space-y-4">
          <p>
            We will process your request and delete all of your user data from our 
            systems within 30 days. You will receive a confirmation email once the 
            deletion is complete.
          </p>
          
          <p>
            Failure to follow these instructions or to provide accurate and complete 
            information allowing us to identify your account may prevent the deletion 
            of your data as requested.
          </p>
          
          <p>
            We are not responsible for informing you of any omission, error, or other 
            failure to follow these instructions that could prevent the deletion of 
            your data. If you do not receive a confirmation email within 30 days, please submit your request again, ensuring that the email address associated with your Spurly account is correct. 
          </p>
        </div>

        <div className="mt-8">
          <p className="font-bold mb-2">Third-Party Services</p>
          <p className="mb-4">
            When you joined Spurly, you acknowledged that some or all of the data we 
            collected from you would be shared with one or more third-party service 
            providers for the purpose of generating personalized content (Spurly does not collect or share any personal information for any other purpose, such as advertising or marketing).
          </p>
          <p className="mb-4">
            These service providers include Apple (if used for sign in or subscription), Facebook (only if used for sign in), Google (for authentication and secure storage), and OpenAI (for AI functionality through one or more of its gpt models). We have no control of, access to, or information about your data at these third-party service providers. Accordingly, a request to delete your data from Spurly will not affect your data stored 
            with those other service providers (if any). Please contact those providers directly if you wish to delete your data with them.
          </p>
          <p>
            We are not responsible for contacting any third-party providers on your 
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
            For questions or concerns regarding this Policy, please contact us at:
          </p>
          <br />
          <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
            <p className="font-semibold">Phaethon Order LLC</p>
              <p>App Contact: <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">admin@spurly.io</a></p>
              <p>Privacy Contact: <a href="mailto:privacy@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">privacy@spurly.io</a></p>
              <p>Corporate Contact: <a href="mailto:phaethon@phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">phaethon@phaethon.llc</a></p>
          </div>
        </div>
        <br />
        <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
          <p className="font-semibold">Effective Dates</p>
          <p>Original Effective Date: May 28, 2025</p>
          <p>Last Updated: July 8, 2025</p>
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
            &copy; {currentYear} Phaethon Order LLC. All rights reserved.
          </span>
        </footer>
    </div>
  )
}