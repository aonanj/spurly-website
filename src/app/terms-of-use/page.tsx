import Image from 'next/image'
import Link from 'next/link'

export default function TermsOfUse() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl w-full mx-auto">
        <h2 className="text-[#3A506B] text-center text-3xl font-bold mb-6">
          Spurly Terms of Use
        </h2>

        <p className="text-[#3A506B] mb-4">
          Welcome to Spurly™ - a contextually informed AI messaging assistant (&ldquo;the App&rdquo;). End-to-end design, development, and deployment of Spurly was done by Phaethon Order LLC, a US-based software development and technology LLC. 
          (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Spurly is solely owned, operated, and provided by Phaethon Order LLC. These Terms of Use (&ldquo;Terms&rdquo;, &ldquo;User Agreement&rdquo;, &ldquo;End User License Agreement&rdquo;, &ldquo;EULA&rdquo;) govern your use of the 
          Spurly mobile application and related services (collectively, the &ldquo;Service&rdquo;).
        </p>

        <p className="text-[#3A506B] mb-4">
          By downloading, installing, or using Spurly, you agree to be bound by these Terms. 
          If you do not agree to these Terms, do not use the Service.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">1. ACCEPTANCE OF TERMS</h3>
        <p className="text-[#3A506B] mb-4">
          By accessing or using Spurly, you acknowledge that you have read, understood, and agree 
          to be bound by these Terms and our Privacy Policy. These Terms constitute a legally 
          binding agreement between you and Phaethon Order LLC. Our Privacy Policy is explicitly incorporated by reference into these Terms. {' '}(<a href="/privacy-policy" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Privacy Policy</a>)
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">2. DESCRIPTION OF SERVICE</h3>
        <p className="text-[#3A506B] mb-4">
          Spurly is a lifestyle and dating app-related application designed for entertainment purposes only. The Service 
          uses artificial intelligence (AI) and large language models (LLMs) to generate message 
          suggestions that users may choose to use in dating applications or other contexts.
        </p>
        <p className="text-[#3A506B] mb-4">
          <strong>IMPORTANT:</strong> Spurly is intended solely for entertainment and is not 
          intended to provide professional advice of any kind, including but not limited to 
          relationship counseling, dating advice, or therapeutic guidance.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">3. ELIGIBILITY</h3>
        <p className="text-[#3A506B] mb-4">
          You must be at least 18 years old to use Spurly. By using the Service, you represent 
          and warrant that you are at least 18 years of age and have the legal capacity to enter 
          into these Terms.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">4. USER ACCOUNTS AND DATA</h3>
        
        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">4.1 Account Creation</h4>
        <p className="text-[#3A506B] mb-4">
          You may be required to create an account to use certain features of Spurly. You are 
          responsible for maintaining the confidentiality of your account credentials and for 
          all activities that occur under your account.
        </p>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">4.2 Data Storage and Security</h4>
        <p className="text-[#3A506B] mb-4">
          We store user data using Google Firebase Firestore, which provides industry-standard 
          security measures. However, no method of transmission over the internet or electronic 
          storage is 100% secure.
        </p>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">4.3 Data Transmission to Third Parties</h4>
        <p className="text-[#3A506B] mb-4">
          By using Spurly, you acknowledge and agree that some user data may be transmitted to 
          third-party LLM providers to generate message suggestions. Once data is transmitted 
          outside of our direct control, Phaethon Order LLC cannot be held liable for the 
          handling, storage, or security of such data by third parties.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">5. ACCEPTABLE USE</h3>
        <p className="text-[#3A506B] mb-4">You agree to use Spurly only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
        <ul className="text-[#3A506B] list-disc pl-6 mb-4 space-y-1">
          <li>Use the Service for any illegal, harmful, or fraudulent purpose</li>
          <li>Attempt to gain unauthorized access to the Service or its related systems</li>
          <li>Transmit any harmful, offensive, or inappropriate content through the Service</li>
          <li>Use the Service to harass, abuse, or harm others</li>
          <li>Violate any applicable laws or regulations while using the Service</li>
          <li>Attempt to reverse engineer, decompile, or disassemble the Service</li>
          <li>Use the Service for any commercial, for-profit, or trade purposes</li>
          <li>Transmit any requests to remote components of Spurly outside of the on-device component</li>
        </ul>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">6. GENERATED CONTENT AND SUGGESTIONS</h3>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">6.1 AI-Generated Content</h4>
        <p className="text-[#3A506B] mb-4">
          All message suggestions generated by Spurly are produced by AI and LLMs. It is well within the public knowledge that these models can make mistakes, generate unpredictable, nonsensical, ambigious, and potentially deleterious outputs as a result of the input prompts, &ldquo;hallucinations,&rdquo; and other factors. By using the Service, you are acknowledging and accepting this risk, and acknowledging and agreeing that we are not liable for any results that you may receive. The content provided by this Service is not guaranteed to be accurate, appropriate, or effective in any context. This Service and the content obtained through it are provided for entertainment purposes only. This Service does not provide, and should not be considered as, professional advice or guidance. Again, this Service is for entertainment purposes only. The Company does not endorse, guarantee, 
          or take responsibility for any AI-generated content.
        </p>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">6.2 User Responsibility</h4>
        <p className="text-[#3A506B] mb-4">
          You are solely responsible for how you use any content provided by Spurly. 
          The Company is not liable for any consequences arising from your use of generated 
          content, including but not limited to:
        </p>
        <ul className="text-[#3A506B] list-disc pl-6 mb-4 space-y-1">
          <li>Relationship outcomes</li>
          <li>Social interactions</li>
          <li>Third-party reactions</li>
          <li>Personal or professional consequences</li>
        </ul>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">6.3 No Guarantees</h4>
        <p className="text-[#3A506B] mb-4">
          We make no representations or warranties about the effectiveness, appropriateness, 
          or success of using AI-generated content in any context.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">7. INTELLECTUAL PROPERTY</h3>
        <p className="text-[#3A506B] mb-4">
          The Spurly application, including its design, functionality, and underlying technology, 
          is owned by Phaethon Order LLC and is protected by intellectual property laws. You are 
          granted a limited, non-exclusive, non-transferable license to use the Service for 
          personal, non-commercial purposes only.
        </p>
        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">7.1 IP Inventory</h4>
            <p className="text-[#3A506B] mb-4">
              The undivided IP rights include, without limitation (1) trademark and other mark IP, such as the App name and its variations, logos, slogans, etc.; (2) copyrights, including end-to-end source code, proprietary system- and user-level prompts, and message suggestions (&ldquo;Spurs&rdquo;); (3) trade secrets, such as unexposed algorithms and server-side frameworks and architectures; (4) patents or patent applications covering proprietary inventions that improve mobile device operations (patent application no. 63/860,940); and (5) other IP rights.
            </p>
            <p className="text-[#3A506B] mb-4">For non-exhaustive lists of IP assets associated with the App and owned by Phaethon Order LLC, please visit:</p>
            <ul className="text-[#3A506B] list-disc pl-6 mb-4 space-y-1">
              <li>{' '}<a href="/ip-inventory" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Spurly IP inventory</a></li>
              <li>{' '}<a href="/branding" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">Spurly IP branding</a></li>
            </ul>
          <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">7.2 License to Company</h4>
            <p className="text-[#3A506B] mb-4">
              By submitting User Content (e.g., your name, email address, age, and context), you grant Phaethon Order LLC a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our services), communicate, publish, publicly perform, publicly display, and distribute such User Content. This license is for the limited purpose of operating, developing, providing, and improving the App and its underlying technologies, including for training our generative models. This license continues even if you stop using our App.
            </p>
          <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">7.3 Ownership of Generated Content</h4>
            <p className="text-[#3A506B] mb-4">
              You acknowledge and agree that all rights, title, and interest in and to any content, including but not limited to text, suggestions, and messages, generated by the App (&ldquo;Spurs&rdquo;) are and shall remain the sole and exclusive property of Phaethon Order LLC. The Company grants you a limited, revocable, non-exclusive, non-sublicensable license to use the Spurs for your personal, non-commercial use within third-party applications, as intended by the functionality of the App. You may not reproduce, distribute, or create derivative works from the Spurs for any commercial purpose.
            </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">8. PRIVACY</h3>
        <p className="text-[#3A506B] mb-4">
          Your privacy is important to us. Please review our Privacy Policy, which explains how 
          we collect, use, and protect your information. By using Spurly, you consent to the 
          collection and use of your information as described in our Privacy Policy. Spurly does not collect or share any personal information for any purpose other than to provide the Service, including advertising or marketing. However, we reserve the right to change this policy at any time and without notice. You are responsible for reviewing it periodically. Your use of the Service constitutes your acceptance of these Terms.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">9. DISCLAIMERS</h3>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">9.1 Entertainment Purposes Only</h4>
        <p className="text-[#3A506B] mb-4 uppercase">
          SPURLY IS PROVIDED FOR ENTERTAINMENT PURPOSES ONLY. THE SERVICE IS NOT INTENDED TO 
          PROVIDE ADVICE OR GUIDANCE IN ANY CONTEXT, WHETHER PROFESSIONAL OR OTHERWISE, INCLUDING BUT NOT LIMITED TO RELATIONSHIP, DATING, 
          THERAPEUTIC, OR COUNSELING ADVICE.
        </p>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">9.2 No Warranties</h4>
        <p className="text-[#3A506B] mb-4 uppercase">
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, 
          EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>

        <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">9.3 Third-Party Services</h4>
        <p className="text-[#3A506B] mb-4">
          We are not responsible for the availability, content, or practices of any third-party 
          services, including dating applications where you may choose to use generated suggestions.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">10. LIMITATION OF LIABILITY</h3>
        <p className="text-[#3A506B] mb-4 uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, PHAETHON ORDER LLC AND ITS MEMBER(S) SHALL 
          NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
          DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT 
          OF OR RELATING TO YOUR USE OF SPURLY.
        </p>
        <p className="text-[#3A506B] mb-4 uppercase">
          IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE PAID TO US 
          FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">11. INDEMNIFICATION</h3>
        <p className="text-[#3A506B] mb-4">
          You agree to indemnify, defend, and hold harmless Phaethon Order LLC and its officers, 
          directors, managers, members, employees, and agents from and against any claims, damages, 
          losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or 
          relating to your use of the Service or violation of these Terms.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">12. DATA TRANSMISSION DISCLAIMER</h3>
        <p className="text-[#3A506B] mb-4">You acknowledge and agree that:</p>
        <ul className="text-[#3A506B] list-disc pl-6 mb-4 space-y-1">
          <li>Some user data may be transmitted to third-party service providers.</li>
          <li>We cannot control how third parties handle your data once transmitted.</li>
          <li>Neither Phaethon Order LLC nor its Member(s) shall be liable for any data handling by third parties.</li>
          <li>You use the Service at your own risk regarding data transmission.</li>
        </ul>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">13. TERMINATION</h3>
        <p className="text-[#3A506B] mb-4">
          We may terminate or suspend your access to Spurly at any time, with or without cause 
          or notice. Upon termination, your right to use the Service will cease immediately.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">14. MODIFICATIONS TO TERMS</h3>
        <p className="text-[#3A506B] mb-4">
          We reserve the right to modify these Terms at any time. These Terms are readily accessible through the Service, and it is your responsibility to periodically review them. Your continued use of the Service constitutes your acknowledgment and acceptance of this as sufficient notice regarding any substantive or non-substantive modifications to these Terms. Further, your continued use of the Service after such changes constitutes your acknowledgement and acceptance 
          of the modified Terms.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">15. GOVERNING LAW</h3>
        <p className="text-[#3A506B] mb-4">
          These Terms shall be governed by and construed in accordance with the applicable laws 
          of the State of Wyoming, where Phaethon Order LLC is registered, and applicable federal laws, without regard to conflict of 
          law principles.
        </p>
        <p className="text-[#3A506B] mb-4">We reserve the right to change venue, with or without cause, at any point.</p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">16. ARBITRATION AGREEMENT</h3>

          <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">16.1 Agreement to Arbitrate</h4>
          <p className="text-[#3A506B] mb-4">
            Your use of the Service constitutes your acknowledgement and agreement that any dispute, claim, or controversy arising out of or relating in any way to your access or use of the Services, these Terms of Use, or the interpretation, breach, termination, enforcement, or validity thereof (collectively, “Disputes”) may be resolved exclusively through final and binding arbitration, rather than in court, at the discretion of Phaethon Order LLC. We retain the right to seek injunctive or equitable relief in a court of competent jurisdiction to prevent (or enjoin) the actual or threatened infringement, misappropriation, or violation of our intellectual property and/or other rights.
          </p>

          <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">16.2 Arbitration Procedure</h4>
          <p className="text-[#3A506B] mb-4">
          Arbitration shall be administered by the American Arbitration Association (“AAA”) under its Consumer Arbitration Rules then in effect, as modified by this Agreement. The arbitration shall be conducted by a single neutral arbitrator and shall take place in the county (or parish) where you reside, unless you and Spurly agree otherwise. The arbitration may be conducted remotely via video conference where appropriate.
          </p>

          <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">16.3 Class Action Waiver</h4>
          <p className="text-[#3A506B] mb-4">
          You agree that any arbitration will be conducted only on an individual basis and not in a class, collective, or representative action. The arbitrator may not consolidate more than one person’s claims and may not otherwise preside over any form of a class or representative proceeding.
          </p>

          <h4 className="text-[#3A506B] text-base font-semibold mt-4 mb-2">16.4 Governing Law and Severability</h4>
          <p className="text-[#3A506B] mb-4">
          This Arbitration Agreement is governed by the Federal Arbitration Act. If any provision of this Arbitration Agreement is found unenforceable, the remaining provisions shall remain in full force and effect, except that if the class action waiver is found to be unenforceable, this entire Arbitration Agreement shall be null and void.
          </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">17. SEVERABILITY</h3>
        <p className="text-[#3A506B] mb-4">
          If any provision of these Terms is found to be unenforceable or invalid, that provision 
          will be limited or eliminated to the minimum extent necessary so that these Terms will 
          otherwise remain in full force and effect.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">18. ENTIRE AGREEMENT</h3>
        <p className="text-[#3A506B] mb-4">
          These Terms, together with our Privacy Policy, constitute the entire agreement between 
          you and Phaethon Order LLC regarding the use of Spurly.
        </p>

        <h3 className="text-[#3A506B] text-lg font-semibold mt-6 mb-3">19. CONTACT INFORMATION</h3>
        <p className="text-[#3A506B] mb-4">If you have any questions about these Terms, please contact us at:</p>
        <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
          <p className="font-semibold">Phaethon Order LLC</p>
          <p>App Contact: <a href="mailto:admin@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">admin@spurly.io</a></p>
          <p>Privacy Contact: <a href="mailto:privacy@spurly.io" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">privacy@spurly.io</a></p>
          <p>Corporate Contact: <a href="mailto:phaethon@phaethon.llc" className="text-[#3A506B] underline hover:text-[#9BC7FF] transition-colors hover:no-underline">phaethon@phaethon.llc</a></p>
        </div>
        <br />
        <div className="bg-[#BCCCDC]/20 p-4 rounded-lg text-[#102A43]/90">
          <p className="font-semibold">Effective Dates</p>
          <p>Original Effective Date: August 10, 2025</p>
          <p>Last Updated: August 11, 2025</p>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#BCCCDC] flex flex-col items-center justify-center p-4 text-[#627D98]">
          <div className="mb-4">
            <Link href="/privacy-policy" className="mx-2 text-[#FFFFFF] hover:text-[#3A506B] transition-colors hover:underline">Privacy Policy</Link>
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

// Add metadata for SEO
export const metadata = {
  title: 'Spurly – Terms of Use',
  description: 'Terms of Use for Spurly, a lifestyle application by Phaethon Order LLC',
}