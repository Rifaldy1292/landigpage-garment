import { motion } from "framer-motion";
import Carousel from "./ui/caresoul";
import YouTubeVideo from "./ui/iframe";
import { useState } from "react";
import { Link } from "react-router-dom";
const IndexContent = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const handleVideoClick = () => {
    setOpenVideo(true);
  };

  const handleVideoClickClose = () => {
    setOpenVideo(false);
  };

  // Animasi untuk teks dan tombol
  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const videoModalAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full bg-[linear-gradient(340deg,_white_40%,_#1357D8_40%)] text-white mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 lg:px-20 pt-10 md:pt-28 pb-28 md:pb-36">
        <div className="md:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="font-extrabold text-[38px] leading-[44px] md:text-[48px] md:leading-[56px] max-w-[520px]"
            initial="initial"
            animate="animate"
            variants={textAnimation}
          >
            “Spesialis Seragam, Apparel & Konveksi Profesional”
          </motion.h1>
          <motion.p
            className="mt-8 max-w-[520px] text-[#A9B9E0] text-[16px] leading-[28px] border-l-2 border-[#A9B9E0] pl-4"
            initial="initial"
            animate="animate"
            variants={textAnimation}
          >
            Kami adalah ahli dalam pembuatan seragam kerja, pakaian (apparel),
            dan layanan konveksi berkualitas tinggi, dengan fokus pada hasil
            profesional, desain menarik, dan ketepatan waktu produksi untuk
            kebutuhan perusahaan maupun individu.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center space-x-6"
            initial="initial"
            animate="animate"
            variants={buttonAnimation}
          >
            <button className="bg-white text-[#1357D8] font-extrabold text-[16px] leading-[24px] px-8 py-3 rounded-md tracking-widest border-2 border-transparent hover:border-[#f9f9f9] hover:bg-[#1357D8] hover:text-white transition duration-300 ease-in-out">
              <Link to="/tentang-kami">Baca Lengkap</Link>
            </button>
            <motion.div
              className="flex items-center space-x-3 cursor-pointer select-none"
              onClick={handleVideoClick}
              initial="initial"
              animate="animate"
              variants={buttonAnimation}
            >
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 hover:shadow-lg transition duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </div>

              <span className="font-extrabold text-[16px] leading-[24px]">
                Watch Intro
              </span>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center mx-auto h-[500px]">
          <Carousel />
        </div>
      </div>

      {/* Video Modal with Motion Animation */}
      {openVideo && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg shadow-lg"
          initial="initial"
          animate="animate"
          variants={videoModalAnimation}
        >
          <div className="relative w-full z-50 items-center max-w-4xl h-full p-4">
            {/* Close Button */}

            {/* YouTube Video */}
            <div className="w-full h-[100px] flex   mt-20 ">
              <YouTubeVideo />
              <div className="h-full">
                <button
                  className=" text-white  bg-gray-800 rounded-full p-2 hover:bg-gray-700 focus:outline-none"
                  onClick={handleVideoClickClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default IndexContent;
