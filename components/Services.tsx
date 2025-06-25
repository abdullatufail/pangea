"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <div className='h-[80vh] w-screen  flex flex-col items-center justify-center bg-white'>

        <motion.div 
        className='absolute  top-[480px] bg-white rounded-full w-[700px] h-[700px]'
        initial={{scaleX:"300%"}}
        animate={{scaleX:"300%"}}
        >

        </motion.div>
        
        
    </div>
  )
}

export default Services