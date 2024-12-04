import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

const Roadmap = () => {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <section id="roadmap" className="max-w-[1300px] mx-auto my-20 px-6">
      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          <div className="border-4 absolute border-opacity-80 border-gray-700 h-full  left-1/2"></div>

          {/* Timeline Items */}
          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            variants={slideInFromRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-white shadow-xl w-12 h-12 rounded-full"
              variants={slideInFromLeft(0.2)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
            </motion.div>
            <motion.div
              className="order-1 bg-transparent border-4 border-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
              variants={slideInFromRight(0.3)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Phase 1: Dex update & ads after bonding
              </h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={slideInFromLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-white shadow-xl w-12 h-12 rounded-full"
              variants={slideInFromRight(0.4)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h1 className="mx-auto font-semibold text-lg text-black">2</h1>
            </motion.div>
            <motion.div
              className="order-1 bg-transparent border-4 border-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
              variants={slideInFromLeft(0.5)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Phase 2: Calls & Trending
              </h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            variants={slideInFromRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-white shadow-xl w-12 h-12 rounded-full"
              variants={slideInFromLeft(0.6)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <h1 className="mx-auto font-semibold text-lg text-black">3</h1>
            </motion.div>
            <motion.div
              className="order-1 bg-transparent border-4 border-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
              variants={slideInFromRight(0.7)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Phase 3: The Coolguy NFT collection release
              </h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-white shadow-xl w-12 h-12 rounded-full"
              variants={slideInFromRight(0.8)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <h1 className="mx-auto font-semibold text-lg text-black">4</h1>
            </motion.div>
            <motion.div
              className="order-1 bg-transparent border-4 border-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
              variants={slideInFromLeft(0.9)}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Phase 4: CEX listings
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
