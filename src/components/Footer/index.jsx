import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300">
      {/* contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <SubHead color="text-white" style="mb-[18px] sm:w-9/12 lg:w-6/12">
              We can take care the installation
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Don&apos;t want to deal with technical stuff? Let us fire up Uvdoo
              for you, so you can spend you time selling right away.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-100 hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTACT US
            </MainButton>
          </motion.section>
        </div>

        {/* eclipse */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="/eclipse-1.svg"
          alt="eclipse"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20px] -left-24"
          src="/eclipse-2.svg"
          alt="eclipse"
        />
      </div>

      {/* footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-20">
          <div className="lg:col-span-1">
            <img
              src="shopify-footer.png"
              alt="shopify-footer"
              className="w-[125px] h-auto mb-10 lg:mb-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 font-body md:grid-cols-4 lg:col-span-4 lg:mb-0">
            {/* Features */}
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#" className="footer-link">
                  Find a Partner
                </a>
                <a href="#" className="footer-link">
                  Become a Partner
                </a>
                <a href="#" className="footer-link">
                  Affiliates
                </a>
                <a href="#" className="footer-link">
                  Partner Offers
                </a>
                <a href="#" className="footer-link">
                  Store Example
                </a>
              </div>
            </div>
            {/* --- Features --- */}

            {/* Company */}
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#" className="footer-link">
                  Leaders
                </a>
                <a href="#" className="footer-link">
                  About Us
                </a>
                <a href="#" className="footer-link">
                  Careers
                </a>
                <a href="#" className="footer-link">
                  Press
                </a>
                <a href="#" className="footer-link">
                  Awards
                </a>
              </div>
            </div>
            {/* --- Company --- */}

            {/* Resource */}
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#" className="footer-link">
                  Overviews
                </a>
                <a href="#" className="footer-link">
                  Articles
                </a>
                <a href="#" className="footer-link">
                  Webinars
                </a>
                <a href="#" className="footer-link">
                  Events
                </a>
                <a href="#" className="footer-link">
                  Ecommerce
                </a>
              </div>
            </div>
            {/* --- Resource --- */}

            {/* Get Helps */}
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Shopify Company
                </a>
                <a className="footer-link" href="#">
                  Knowledge Base
                </a>
                <a className="footer-link" href="#">
                  Videos Contact
                </a>
                <a className="footer-link" href="#">
                  Tech Support
                </a>
                <a className="footer-link" href="#">
                  API Documentation
                </a>
              </div>
            </div>
            {/* --- Get Helps --- */}

            <div className="text-center md:col-span-3 md:flex justify-between items-center">
              <div className="mx-auto flex items-center justify-center gap-3 mb-7 mt-5 order-1">
                <a
                  href="https://www.instagram.com/dickythepaddy/"
                  target="_blank"
                >
                  <img
                    className="footer-icon"
                    src="/instagram.svg"
                    alt="instagram"
                  />
                </a>
                <a href="https://github.com/dickyd44" target="_blank">
                  <img className="footer-icon" src="/github.svg" alt="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dicky-darmawan-00b698275"
                  target="_blank"
                >
                  <img
                    className="footer-icon"
                    src="/linkedin.svg"
                    alt="linkedin"
                  />
                </a>
              </div>
              <p className="font-body text-white font-medium order-1">
                © 2022 Shopify by{" "}
                <a
                  className="italic underline"
                  href="https://dickydarmawan.vercel.app"
                  target="_blank"
                >
                  Dicky Darmawan
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
