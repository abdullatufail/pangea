"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
const Services = ({reference}) => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            
        }
    }, [isInView, mainControls]);

  return (
    <div className='h-[80vh] w-screen  flex flex-col items-center justify-center bg-white'>

        <motion.div  ref={reference}
        className='absolute z-[-10] top-[480px] bg-white rounded-full w-[700px] h-[700px]'
        
        animate={{ y: [0, -15, 0] }}
        transition={{
        duration: 5, // Total duration for one complete forward-backward cycle
        repeat: Infinity, // Repeat indefinitely
        repeatType: "reverse", // This creates the yoyo effect
        ease: "easeInOut", // Smooth easing for the motion
      }}
      style={{scaleX:"300%"}}
        >

        </motion.div>
        

        <motion.div 
        className='flex justify-between gap-5 h-[80vh] relative top-[230]'
        variants={{initial:{opacity:0}
                    ,visible:{opacity:100}}}
        initial="initial"
        animate={mainControls}
        transition={{duration:0.7, ease:"easeIn"}}>
            <div ref={ref} className='font-bold items-center text-blue-950 tracking-tighter text-4xl'>
                <h1 >Comprehensive IT solutions .</h1>
                <h1></h1>
            </div>
            <div className='h-full w-[50vw] border-1 border-blue-950'></div>
        </motion.div>
    </div>
  )
}

export default Services