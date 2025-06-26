"use client"
import React from 'react'
import Dashboard from './Dashboard'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import FlipText from './animations/FlipText'
const Hero = ({dashRef,heroRef}) => {
    
    const {scrollYProgress} = useScroll({target:dashRef})
    const y = useTransform(scrollYProgress,[0,1],[0,-880])
  return (
    <div className='relative w-full h-[100vh] flex flex-col justify-center items-center '>
        <div className='w-full h-full absolute z-[-20] linear-gradient-1'></div>
        <div ref={heroRef} className='mb-[150px] flex flex-col font-bold items-center text-white tracking-tighter text-5xl'>
            <h1>Transform Your Business</h1>
            <h1>Operation Today With <span className='italic'>Pangea</span> </h1>
        </div>
        <div className=' w-full flex justify-center relative bottom-[80px] gap-5'>
            <FlipText className={"w-[9rem] h-[3rem] text-blue-900 font-medium bg-white"} >Services</FlipText>
            <FlipText className={"w-[9rem] h-[3rem] text-white font-medium border-white border-1"} >Consultation</FlipText>
        </div>
        <motion.div 
        className='hidden md:block absolute top-[340px] z-50 rounded-2xl overflow-hidden  shadow-2xl ' 
        initial={{scale:'0%' }} animate={{scale:'65%'}} style={{y}}>
        <Dashboard />
        </motion.div>
    </div>
  )
}

export default Hero