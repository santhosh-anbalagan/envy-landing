"use client";

import { Card, CardBody, Checkbox, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";


function Terms() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <header className="grid !min-h-[100rem] px-8" style={{ backgroundColor: "#063233" }}>
          <div className="container mx-auto mt-20 h-full w-full text-white">
            <Card placeholder="" className="mt-6 w-full pb-20">
              <CardBody placeholder="" >
                <Typography placeholder="" variant="h1">FantasticFictionWorld Terms and Conditions</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">1. Acceptance of Terms</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  By accessing or using the services provided by FantasticFictionWorld, you agree to be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.
                </Typography>
                <Typography placeholder="" variant="h3" className="mt-10">2. FantasticFictionWorld Services</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  FantasticFictionWorld offers a variety of fantastical services, including but not limited to magical story generation, whimsical plot twists, and enchanted character development.</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">3. User Obligations</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  a. You must be at least 18 years old or possess the legal age to enter into binding contracts in your jurisdiction to use FantasticFictionWorld services.
                  <br />
                  b. You agree not to use our services for any unlawful or prohibited activities, including but not limited to the summoning of mythical creatures without proper permits.
                </Typography>
                <Typography placeholder="" variant="h3" className="mt-10">4. Magical Subscription Plans</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  FantasticFictionWorld offers subscription plans that grant users access to premium magical content. Subscription fees may be paid in gold coins, fairy dust, or other accepted mystical currencies.
                </Typography>
                <Typography placeholder="" variant="h3" className="mt-10">5. Spellbinding Content</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  a. FantasticFictionWorld retains the exclusive rights to all magically generated content. Users may not claim authorship of any stories, spells, or potions produced by our services.
                  <br />
                  b. Users are encouraged to share their enchanted creations on social media with proper attribution to FantasticFictionWorld.</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">6. Limitation of Liability</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  FantasticFictionWorld shall not be held responsible for any unforeseen consequences, including but not limited to accidental teleportations, time travel, or encounters with mythical beings, resulting from the use of our services.</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">7. Warranties and Guarantees</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  a. FantasticFictionWorld does not guarantee the accuracy, reliability, or effectiveness of any magical spells, charms, or prophecies provided through our services.
                  <br />
                  b. Users understand that the mystical nature of our services may lead to unexpected outcomes, and FantasticFictionWorld cannot be held liable for any unintended consequences.</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">8. Termination of Services</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  FantasticFictionWorld reserves the right to suspend or terminate services at any time for reasons including, but not limited to, misuse of magical content, violation of these terms, or cosmic disturbances beyond our control.</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  a. FantasticFictionWorld does not guarantee the accuracy, reliability, or effectiveness of any magical spells, charms, or prophecies provided through our services.
                  <br />
                  b. Users understand that the mystical nature of our services may lead to unexpected outcomes, and FantasticFictionWorld cannot be held liable for any unintended consequences.</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">9. Governing Law</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  These terms and conditions shall be governed by the laws of the Enchanted Realm, where wizards, fairies, and dragons coexist peacefully.</Typography>
                <Typography placeholder="" variant="h3" className="mt-10">10. Contact Information</Typography>
                <Typography placeholder="" className="mt-10" variant="paragraph">
                  For inquiries, magical assistance, or potion recipes, please contact our mystical customer support at support@fantasticfictionworld.com. </Typography>
              </CardBody>
            </Card>
          </div>
        </header>
      </div>
    </>
  );
}
export default Terms;
