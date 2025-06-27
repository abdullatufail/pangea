"use client"
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import FlipText from './animations/FlipText'
const Hero = ({dashRef,heroRef}) => {
    const [remove, setRemove] = useState(false);
    const {scrollYProgress} = useScroll({target:dashRef})
    const y = useTransform(scrollYProgress,[0,0.3],[0,-880])
    useEffect(()=>{
        setTimeout(()=>{setRemove(true)})
    })
  return (
    <div className='relative w-full h-[100vh] flex flex-col justify-center items-center '>
        <div className='w-full h-full absolute z-[-20] linear-gradient-1'></div>
        <motion.div ref={heroRef} 
        initial={{scale:"140%",y:70}}
        animate={{scale:"100%",y:0, transition:{duration:0.5,delay:0.1, ease:"anticipate"}}}
        className='mb-[150px] z-[110] flex flex-col font-bold items-center text-white tracking-tighter text-xl sm:text-2xl md:text-5xl'>
            <h1>Transform Your Business</h1>
            <h1>Operation Today With <span className='italic'>Pangea</span> </h1>
        </motion.div>
        <div className=' w-full flex justify-center relative bottom-[80px] gap-0 md:gap-5'>
            <FlipText className={"w-[9rem] h-[3rem] text-blue-900 font-medium bg-white scale-75 md:scale:100"} >Services</FlipText>
            <FlipText className={"w-[9rem] h-[3rem] text-white font-medium border-white border-1 scale-75 md:scale:100"} >Consultation</FlipText>
        </div>
        <motion.div 
        className='hidden md:block absolute top-[340px] z-50 rounded-2xl overflow-hidden scale-100 shadow-2xl ' 
        initial={{y:200 }} animate={{y:0,transition:{duration:1,delay:0.5,ease:"easeOut"}}} style={{y,scale:"65%"}}>
        <Dashboard />
        </motion.div>
        <AnimatePresence>
        {!remove&&<motion.div 
        className='h-full w-full linear-gradient-1 absolute top-0 z-[100]'
        initial={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5,delay:0.1, ease:"anticipate"}}}
        ></motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default Hero