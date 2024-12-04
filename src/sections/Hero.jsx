import { motion } from "framer-motion";
import meme1 from "../assets/cool-guy.jpg";
import { RiTwitterXFill, RiTelegram2Fill } from "react-icons/ri";
import pump from "../assets/Pump.PNG";
import InfiniteLoop from "../components/InfiniteLoop";
import { slideInFromLeft, slideInFromRight, zoomIn } from "../utils/motion.ts";

const Hero = () => {
  return (
    <div className="text-center">
      {/* Animated Heading */}
      <motion.div
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="flex justify-center mt-8"
      >
        <h1 className="text-5xl lg:text-7xl mx-auto mb-6 text-white">
          COOLGUY
        </h1>
      </motion.div>

      {/* Animated Image */}
      <motion.img
        src={meme1}
        alt="Cool Guy"
        className="mx-auto w-[60%] lg:w-[40%]"
        variants={zoomIn(0.5, 0.8)}
        initial="hidden"
        animate="show"
      />

      {/* Infinite Loop Component */}
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
      >
        <InfiniteLoop />
      </motion.div>

      {/* Animated Social Icons */}
      <div className="flex items-center justify-center my-6 mb-12">
        <div className="flex gap-8 items-center">
          <motion.a
            href="https://t.me/CoolguyQuackshit"
            variants={zoomIn(0.6, 0.8)}
            initial="hidden"
            animate="show"
          >
            <RiTelegram2Fill color="white" className="text-6xl mb-4" />
          </motion.a>
          <motion.a
            href="https://x.com/coolguyquack?s=21s"
            variants={zoomIn(0.8, 0.8)}
            initial="hidden"
            animate="show"
          >
            <RiTwitterXFill color="white" className="text-6xl mb-4" />
          </motion.a>
        </div>

        {/* Pump Image */}
        <motion.a
          href="https://pump.fun/coin/G1eQvyVBmFipTz4XK2bs5K879bpnFrzXuqfQg7Ubpump"
          variants={zoomIn(1, 0.8)}
          initial="hidden"
          animate="show"
        >
          <img
            src={pump}
            alt="Pump Coin"
            width={110}
            className="aspect-square object-cover my-auto"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
