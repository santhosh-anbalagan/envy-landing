"use client";
import ScrollToSection from "@/components/scroll-to-section";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from 'react-scroll';
function Terms() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <header className="grid !min-h-[100rem] px-8 bg-envy-green">
          <div className="container mx-auto mt-20 h-full w-full ">
            <Card placeholder="" className="mt-6 w-full pb-20 text-black">
              <CardBody placeholder="" >
                <Typography placeholder="" variant="h1">Envy App - Terms and Conditions</Typography>
                <Typography placeholder="" variant="h4" className="mt-10">Table of Contents</Typography>
                <span>
                  <ol className="list-decimal">
                    <li>
                      <ScrollToSection to="1">Acceptance of terms</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="2">User Accounts</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="3">User Content</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="4">Prohibited Conduct</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="5">Intellectual Property</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="6">Termination</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="7">Limitation of Liability</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="8">Governing Law</ScrollToSection>
                    </li>
                    <li>
                      <ScrollToSection to="9">Contact Information</ScrollToSection>
                    </li>
                  </ol>
                </span>

                <Typography placeholder="" variant="h3" className="mt-5"> <Link to="1" smooth={true} offset={-70} duration={500}>1. Acceptance of Terms</Link></Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  1.1 By accessing or using the Envy mobile application (`App`), you agree to comply with and be bound by these Terms and Conditions (`Terms`). If you do not agree to these Terms, please do not use the App.</Typography>
                <Typography placeholder="" variant="h3" className="mt-5"><Link to="2" smooth={true} offset={-70} duration={500}>2. User Accounts</Link></Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  2.1 To use certain features of the App, you may be required to create a user account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</Typography>
                <Typography placeholder="" className="mt-2" variant="paragraph">
                  2.2 You are responsible for maintaining the confidentiality of your account login information and are fully responsible for all activities that occur under your account. Notify us immediately of any unauthorized use or security breach.</Typography>
                <Typography placeholder="" variant="h3" className="mt-5">3. User Content</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  3.1 The App allows users to create accounts and upload content. By submitting content, you grant Senggers Ltd a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the App.</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  3.2 You are solely responsible for the content you submit, and you represent and warrant that you have all necessary rights to submit the content and that the content does not violate any third-party rights or applicable laws.</Typography>

                <Typography placeholder="" variant="h3" className="mt-5">4. Prohibited Conduct</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  4.1 You agree not to:
                  {/* <span>
                <ul className={"list-disc list-inside"}>
                  <li>Use the App for any illegal purpose or in violation of any laws</li>
                  <li>Upload, post, or transmit any content that infringes upon any third-party rights</li>
                  <li>Engage in any conduct that could disable, overburden, or impair the proper functioning of the App.</li>
                </ul>
                </span> */}
                  <br />
                  *&nbsp;Use the App for any illegal purpose or in violation of any laws.<br />
                  *&nbsp;Upload, post, or transmit any content that infringes upon any third-party rights.<br />
                  *&nbsp;Engage in any conduct that could disable, overburden, or impair the proper functioning of the App.<br />
                </Typography>
                <Typography placeholder="" variant="h3" className="mt-5">5. Intellectual Property</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  5.1 The App and its original content, features, and functionality are owned by Senggers Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</Typography>
                <Typography placeholder="" variant="h3" className="mt-5">6. Termination</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  6.1 Senggers Ltd may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason whatsoever.</Typography>
                <Typography placeholder="" variant="h3" className="mt-5">7. Limitation of Liability</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  7.1 To the fullest extent permitted by applicable law, in no event shall Senggers Ltd be liable for any indirect, incidental, special, consequential, or punitive damages.</Typography>
                <Typography placeholder="" variant="h3" className="mt-5">8. Governing Law</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  8.1 These Terms are governed by and construed in accordance with the laws of the United Kingdom.</Typography>
                <Typography placeholder="" variant="h3" className="mt-5">9. Contact Information</Typography>
                <Typography placeholder="" className="mt-5" variant="paragraph">
                  9.1 If you have any questions about these Terms, please contact us at <span className="text-blue-500 cursor-pointer">[contact@envyapp.com].</span> </Typography>

              </CardBody>
            </Card>
          </div>
        </header>
      </div>
    </>
  );
}
export default Terms;