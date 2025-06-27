import React from "react";
import { motion } from "framer-motion";

const Second = () => {
  return (
    <div className="flex gap-4 w-[30rem] absolute -left-7 relative">
      <motion.div 
      initial={{x:0}}
      animate={{x:55}}
      transition={{
          duration: 0.4,
          delay: 0.2,
          repeat: Infinity, // or a specific number
          repeatType: "mirror",
          repeatDelay: 2,
        }}
      className="h-[12rem] w-[12rem] rounded-full bg-gray-500 opacity-75">

      </motion.div>
    <motion.div
    className="absolute bottom-18 left-1/2 -translate-x-35 w-[200px] h-[2px]"
    initial={{scale:0}}
      animate={{scale:1}}  
      transition={{
          duration: 0.4,
          delay: 0.2,
          repeat: Infinity, // or a specific number
          repeatType: "mirror",
          repeatDelay: 2,
        }}
    style={{
        
        border: 'none',
        borderTop: '2px dashed #3b3b3b',
        margin: '20px 0',
        rotate:"90deg"
      }}
      
      
    />

      <motion.div 
      initial={{x:0}}
      animate={{x:-55}}
      transition={{
          duration: 0.4,
          delay: 0.2,
          repeat: Infinity, // or a specific number
          repeatType: "mirror",
          repeatDelay: 2,
        }}
      className="h-[12rem] w-[12rem] rounded-full bg-gray-500 opacity-55">

      </motion.div>


    </div>
  );
};

export default Second;
