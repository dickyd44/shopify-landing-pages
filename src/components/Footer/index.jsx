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
              Don't want to deal with technical stuff? Let us fire up Uvdoo for
              you, so you can spend you time selling right away.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-100 hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTACT US
            </MainButton>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
