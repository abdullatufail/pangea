import React from "react";
import { motion } from "framer-motion";
const Fourth = () => {
    const parentVar ={
        initial: { scale:0.5,rotate:0},
    start: { 
        scale:1,rotate:0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
  }

  const childVar ={
      initial: { scale:0.5,rotate:0},
    start: { 
        scale:1,rotate:7,
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "mirror"
        }
      },
    }

  return (
    <div className="h-full w-full relative">
        <div className="w-[70%] h-[90%] bg-gray-200 absolute left-1/7 rounded-2xl"></div>
      <motion.div
      initial="initial"
      animate="start"
      variants={parentVar} className=" absolute  left-1/2">
        
        <motion.svg
        variants={childVar}
          width="160"
          height="116"
          viewBox="0 0 160 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_34_83)">
            <path
              d="M159.94 3.09V112.02C159.94 114.78 156.61 116.16 154.66 114.21L133.79 93.34C133.21 92.76 132.42 92.43 131.6 92.43H3.09C1.38 92.43 0 91.05 0 89.34V3.09C0 1.38 1.38 0 3.09 0H156.84C158.55 0 159.93 1.38 159.93 3.09H159.94Z"
              fill="#6D6E71"
            />
          </g>
          <defs>
            <clipPath id="clip0_34_83">
              <rect width="159.94" height="115.12" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
        className={"absolute -left-40 -scale-x-75 scale-y-75 opacity-55"}
        variants={childVar}
        
          width="160"
          height="116"
          viewBox="0 0 160 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_34_83)">
            <path
              d="M159.94 3.09V112.02C159.94 114.78 156.61 116.16 154.66 114.21L133.79 93.34C133.21 92.76 132.42 92.43 131.6 92.43H3.09C1.38 92.43 0 91.05 0 89.34V3.09C0 1.38 1.38 0 3.09 0H156.84C158.55 0 159.93 1.38 159.93 3.09H159.94Z"
              fill="#6D6E71"
            />
          </g>
          <defs>
            <clipPath id="clip0_34_83">
              <rect width="159.94" height="115.12" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
        
        
      </motion.div>
      
    </div>
  );
};

export default Fourth;
