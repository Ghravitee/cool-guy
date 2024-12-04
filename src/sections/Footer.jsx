import { motion } from "framer-motion";
import footerImage from "../assets/cool-guy-footer.jpg";
import { zoomIn } from "../utils/motion"; // Importing the zoomIn animation

const Footer = () => {
  return (
    <div className="pt-10">
      <motion.img
        src={footerImage}
        alt="Cool Guy Footer"
        className="w-full"
        variants={zoomIn(0.3, 0.8)} // Using the zoomIn function with delay and duration
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
    </div>
  );
};

export default Footer;
