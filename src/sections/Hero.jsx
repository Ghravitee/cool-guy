// import { useState } from "react";
import meme1 from "../assets/cool-guy.jpg";
import { RiTwitterXFill } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";
import pump from "../assets/Pump.PNG";

// import { FaRegCopy } from "react-icons/fa6";
// import { FaCopy } from "react-icons/fa6";

const Hero = () => {
  //   const [hasCopied, setHasCopied] = useState(false);

  //   const handleCopy = () => {
  //     navigator.clipboard.writeText("0x0000000000000000");
  //     setHasCopied(true);

  //     setTimeout(() => {
  //       setHasCopied(false);
  //     }, 2000);
  //   };
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-5xl lg:text-7xl mx-auto mb-6 text-white">
          COOLGUY
        </h1>
      </div>
      <img src={meme1} alt="" className="mx-auto w-[40%]" />
      {/* <div className="flex flex-col justify-center mt-8 mb-12">
        <h1 className="text-5xl lg:text-7xl mx-auto ">Nah, I&apos;d Win!</h1>
      </div> */}
      {/* <div
        onClick={handleCopy}
        className="flex justify-center gap-4 items-center"
      >
        <h2 className="text-3xl lg:text-6xl text-white">0x0000000000000000 </h2>
        <div>
          {hasCopied ? (
            <FaCopy className="text-3xl lg:text-6xl text-white" />
          ) : (
            <FaRegCopy className="text-3xl lg:text-6xl text-white" />
          )}
        </div>
      </div> */}
      <div className="flex items-center justify-center my-6 mb-12">
        <div className="flex gap-4 items-center">
          <a
            href="https://t.me/CoolguyQuackshit"
            className=""
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <RiTelegram2Fill color="white" className="text-6xl mb-4" />
          </a>
          <a
            href="https://x.com/coolguyquack?s=21s"
            className=""
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <RiTwitterXFill color="white" className="text-6xl mb-4" />
          </a>
        </div>
        <a
          href="https://pump.fun/coin/G1eQvyVBmFipTz4XK2bs5K879bpnFrzXuqfQg7Ubpump"
          className=""
        >
          <img
            src={pump}
            alt=""
            width={80}
            className="aspect-square object-cover my-auto"
          />
        </a>
      </div>

      <div className="text-white mx-auto text-[1.5rem] lg:text-[2rem] lg:max-w-[80rem] max-w-[25rem]">
        <p>
          Not a pumpfun player first time aped on pumpfun dyor $COOLGUY is
          inspired on The original Matt Furie Character Coolguy Quackshit, he is
          a party-loving, retro-gaming duck and the official apprentice of The
          Boys Club. Living life to the fullest thanks to his SOLANA fortune.
          Buy and Hodl the Quackshit of me !
        </p>
      </div>
    </div>
  );
};

export default Hero;
