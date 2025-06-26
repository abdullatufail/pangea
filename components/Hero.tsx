"use client"
import React, { useRef } from 'react'
import Dashboard from './Dashboard'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
const Hero = ({reference}) => {
    
    const {scrollYProgress} = useScroll({target:reference})
    const y = useTransform(scrollYProgress,[0,1],[0,-850])
  return (
    <div className='relative w-full h-[100vh] flex flex-col justify-center items-center '>
        <div className='w-full h-full absolute z-[-20] linear-gradient-1'></div>
        <div className='mb-[150px] flex flex-col font-bold items-center text-white tracking-tighter text-5xl'>
            <h1>Transform Your Business</h1>
            <h1>Operation Today With <span className='italic'>Pangea</span> </h1>
        </div>
        <div className=' w-full flex justify-center relative bottom-[80px] gap-5'>
            <Button className='w-[7rem] bg-white text-blue-950 hover:text-white'>Services</Button>
            <Button className='w-[7rem] bg-inherit border-1 border-white text-white hover:bg-white hover:text-blue-900'>Consultation</Button>
        </div>
        <motion.div 
        className='hidden md:block absolute top-[300px] z-50 rounded-2xl overflow-hidden  shadow-2xl ' 
        initial={{scale:'10%' }} animate={{scale:'65%'}} style={{y}}>
        <Dashboard />
        </motion.div>
    </div>
  )
}

export default Hero