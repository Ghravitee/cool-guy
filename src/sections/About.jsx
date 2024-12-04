import { motion } from "framer-motion";
import { slideInFromTop, slideInFromTop2 } from "../utils/motion.ts";

const About = () => {
  return (
    <motion.div
      variants={slideInFromTop}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-[1200px] px-6 mx-auto py-20"
    >
      {/* Animated Heading */}
      <motion.h1
        variants={slideInFromTop2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white mb-6 text-[3rem]"
      >
        About $COOLGUY
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        variants={slideInFromTop2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-white text-[1.5rem] lg:text-[2rem] lg:max-w-[80rem] max-w-[25rem] text-left"
      >
        Not a pumpfun player first time aped on pumpfun dyor $COOLGUY is
        inspired on The original Matt Furie Character Coolguy Quackshit, he is a
        party-loving, retro-gaming duck and the official apprentice of The Boys
        Club. Living life to the fullest thanks to his SOLANA fortune. Buy and
        Hodl the Quackshit of me!
      </motion.p>
    </motion.div>
  );
};

export default About;
