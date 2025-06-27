import React from "react";
import { motion } from "framer-motion";

const Third = () => {

    const parentVar ={
        initial: { y: 400 },
    start: { 
        y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
  }

  const childVar ={
      initial: { y: 400 },
      start: { 
        y: 0,
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "mirror"
        }
      },
    }
  return (
    <div className="w-full h-full relative">

<div 
  
  className="w-full h-[80%] absolute  px-10 grid grid-cols-10 grid-rows-2 gap-1">
  
  <motion.div
    
    className="border-2 border-gray-400 col-span-4 rounded-lg">
  </motion.div>
  
  <motion.div
    
    className="border-2 border-gray-400 col-span-5 rounded-lg">
  </motion.div>
  
  <motion.div
    
    className="border-2 border-gray-400 col-span-5 rounded-lg">
  </motion.div>
  
  <motion.div
    
    className="border-2 border-gray-400 col-span-4 rounded-lg">
  </motion.div>
</div>




     <motion.div 
  variants={parentVar}
  initial="initial"
  animate="start"
  className="w-full h-[80%]  px-10 grid grid-cols-10 grid-rows-2 gap-1">
  
  <motion.div
    variants={childVar}
    className="bg-gray-500 col-span-4 rounded-lg">
  </motion.div>
  
  <motion.div
    variants={childVar}
    className="bg-gray-300 col-span-5 rounded-lg">
  </motion.div>
  
  <motion.div
    variants={childVar}
    className="bg-gray-200 col-span-5 rounded-lg">
  </motion.div>
  
  <motion.div
    variants={childVar}
    className="bg-gray-600 col-span-4 rounded-lg">
  </motion.div>
</motion.div>



    </div>
  );
};

export default Third;
