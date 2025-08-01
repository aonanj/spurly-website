// app/data-deletion/page.js (or pages/data-deletion.js if using Pages Router)
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Spurly™ – Data deletion policy and procedure',
  description: 'Easily delete your Spurly account and personal data. This page provides clear, step-by-step instructions for in-app deletion or requesting data removal via email.',
}

export default function DataDeletionPage() {
  const currentYear = new Date().getFullYear()

  return (
    
    <div className="min-h-screen flex flex-col bg-[#F0F4F8] text-[#102A43]">
      <h1 className="sr-only">Spurly: Data Deletion Policy and Procedure</h1>
      {/* Header */}
      <header className="bg-[#BCCCDC] py-8 px-4 text-center">
        <div className="relative w-full max-w-[450px] h-[174px] mx-auto transform transition-transform hover:scale-110">
          <a href="https://spurly.io">
            <Image
              src="/SpurlyBanner.png"
              alt="Spurly banner logo"
              fill
              className="object-contain"
              priority
            />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
      <h2 className="text-[#3A506B] text-center text-3xl font-bold mb-6">
          Spurly Data Deletion Policy and Procedure
        </h2>

        <h3 className="text-xl font-semibold text-[#3A506B] text-center mt-6 mb-3">Spurly In-App User Account Deletion</h3>


        <p className="text-[#3A506B] text-left mb-4">
          Spurly™ (&ldquo;App&rdquo;, &ldquo;Service&rdquo;, or when referencing the Spurly team or owner/operator organization Phaethon Order LLC, &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) does not collect, sell, or otherwise transfer or use your personal data. When you delete your account, all of your data will be removed from our storage servers. Once removed, it cannot be recovered. 
        </p>
        <p className="text-[#3A506B] text-left mb-4">
          Please note that deleting your account will not cancel any active subscriptions, which are managed through Apple&apos;s App Store. Deleting your account with us will only delete the subscription data stored on our servers. Apple prohibits us from canceling a subscription on behalf of a user. Therefore, you must also cancel your subscription through Apple&apos;s App Store in addition to deleting your account to avoid being charged for the next billing cycle. We are not responsible for any charges incurred due to failure to cancel your subscription through Apple&apos;s App Store. You can manage your subscriptions through the App Store on your device or through your Apple ID account settings.
        </p>
        <p className="text-[#3A506B] text-left mb-4">
          Spurly also provides an in-app option for quickly and immediately deleting your account and all associated data. The in-app option is available through the side menu of Spurly when you are logged in. With the side menu open, tap &ldquo;settings and preferences&rdquo; (located in the lower section of the side menu), and then tap &ldquo;delete account&rdquo;. If you are signing in through your Apple account, you may be required to reauthenticate through Apple before completing account deletion.
        </p>

        <h3 className= "text-xl font-semibold text-[#3A506B] text-center mt-6 mb-3">Spurly Account Deletion via Email</h3>

        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            Send an email to{' '}
            <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">
              admin@spurly.io
            </a>
            .
          </li>
          <li>Use the subject line: &ldquo;Data Deletion Request.&rdquo;</li>
          <li>
            In the body of the email, please include:
            <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1 text-sm">
              <li>The email address associated with your Spurly account</li>
              <li>An explicit statement requesting the deletion of your data, such as &ldquo;please delete the account associated with this email address and all related data from Spurly.&rdquo;</li>
            </ol>
          </li>
          <li>
            If you use a third-party provider to sign in to Spurly, please identify 
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
            These service providers may include Apple (if used for sign in or subscription), Facebook (only if used for sign in), Google (for authentication, secure storage, and for AI functionality through one or more of its models), OpenAI (for AI functionality through one or more of its models), Anthropic (for AI functionality through one or more of its models), and/or Meta (for AI functionality through one or more of its models). We do not send personal identifiers, such as user IDs or email addresses, in calls to AI models. However, we have no control of, access to, or information about your data at these third-party service providers. Accordingly, a request to delete your data from Spurly will not affect your data stored 
            with those other service providers (if any).
          </p>
          <p>
            We are not responsible for contacting any third-party providers on your 
            behalf. Please submit requests to delete your data directly to those 
            providers.
          </p>
        </div>

        <div className="mt-8">
          <p className="font-bold mb-2">Updates to this Policy</p>
          <p>This Policy and Procedure may be updated periodically and without notice.</p>
        </div>

        <div className="mt-8">
          <p className="font-bold mb-2">Contact Us</p>
          <p>
            For questions or concerns regarding this Policy and Procedure, please contact us at:
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
          <p>Last Updated: July 30, 2025</p>
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
            &copy; {currentYear} <a href="https://phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Phaethon Order LLC</a>. All rights reserved.
          </span>
        </footer>
    </div>
  )
}