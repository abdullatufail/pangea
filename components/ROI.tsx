import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Github,Linkedin } from "lucide-react";
import Link from "next/link";
const ROI = ({footerRef}) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div >
      <div className="h-[10vh] md:h-[50vh] w-screen flex items-center justify-center">
        <motion.div
          className="relative top-1/2 h-[70vh] w-[60vw]"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="bg-blue-800 hidden md:flex overflow-hidden relative  flex-col justify-between h-[70vh] w-[60vw]  rounded-3xl p-2"
            initial={{ scale: "100%" }}
            whileHover={{ scale: "105%" }}
          >
            <div className="space-y-3 p-10">
              <h1 className="text-5xl text-white font-medium tracking-tighter">
                Calculate Your Potential ROI
              </h1>
              <p className="text-gray-200 text-lg">
                See how much you could save and gain with Pangea's IT solutions.
                Our clients typically see a 300% ROI within the first year.
              </p>
            </div>
            <motion.div
              initial={{ x: 0 }}
              animate={isHovered ? { x: 115 } : { x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className=" w-[110.5%] text-white font-semibold  text-3xl h-[10vh] flex justify-between absolute bottom-2 right-2"
            >
              <motion.div className="h-full w-[10%] bg-blue-950 tracking-tighter rounded-2xl  p-4 pl-8">
                <svg className="scale-50 absolute bottom-0 left-5"
                  width="67"
                  height="69"
                  viewBox="0 0 67 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_34_86)">
                    <path
                      d="M66.26 34.3L56.51 44.05L31.96 68.6L22.21 58.85L39.87 41.19H0V27.41H39.87L22.21 9.75L31.96 0L66.26 34.3Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_86">
                      <rect width="66.26" height="68.6" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
              <motion.div
                animate={
                  isHovered
                    ? { letterSpacing: "0.2em" }
                    : { letterSpacing: "0em" }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full w-[78%] bg-blue-950 rounded-2xl p-4 pt-5 pl-8"
              >
                Request A Demo
              </motion.div>
              <motion.div className="h-full w-[10%] bg-blue-950 rounded-2xl tracking-tighter p-4 pl-8 relative">
                <svg className="scale-50 absolute bottom-0 left-5"
                  width="67"
                  height="69"
                  viewBox="0 0 67 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_34_86)">
                    <path
                      d="M66.26 34.3L56.51 44.05L31.96 68.6L22.21 58.85L39.87 41.19H0V27.41H39.87L22.21 9.75L31.96 0L66.26 34.3Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_86">
                      <rect width="66.26" height="68.6" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:block absolute top-0 w-full h-full border-2  border-gray-400 rounded-3xl"
            variants={{
              initial: { scaleX: "102%", scaleY: "104%", borderWidth: "2px" },
              hovered: { scaleX: "104%", scaleY: "106%", borderWidth: "6px" },
            }}
            initial="initial"
            animate={isHovered ? "hovered" : "initial"}
            transition={{ duration: 0.3, ease: "easeOut" }}
          ></motion.div>
        </motion.div>
      </div>

      <div ref={footerRef} className="linear-gradient-1 h-[40vh] md:h-[100vh] w-[98.3vw] rounded-3xl m-0 md:m-1 flex flex-col items-center justify-between">
            <div></div>
            <div className="w-[60vw] mb-10 space-y-4">
                <h1 className="text-5xl text-white font-bold tracking-tighter">Let's Collaborate</h1>
                <div className=" w-full h-[1px] bg-white"></div>
                <div className="w-full flex justify-between">
                    <h1 className="text-white text-xl md:text-2xl">M Abdullah Tufail</h1>
                    <div className="flex gap-4">
                    <Link href={"https://github.com/abdullatufail"} className="w-[2.5rem] h-[2.5rem] rounded-md bg-white flex items-center justify-center">
                        <Github className="" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/muhammad-abdullah-tufail-0273aa2a3/"} className="rounded-md w-[2.5rem] h-[2.5rem] bg-white flex items-center justify-center">
                        <Linkedin className="" />
                    </Link>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default ROI;
