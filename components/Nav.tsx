import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import FlipText from './animations/FlipText'

const Nav = () => {
  return (
    <motion.div 
    className='absolute w-screen flex justify-center tracking-tighter z-50'
    initial={{scaleX:"200%",scaleY:"120%"}}
    animate={{scaleX:"100%",scaleY:"100%",transition:{duration:0.2,delay:0.2}}}
    >
        <div className='w-full px-10 contec text-sm font-bold  mt-2 flex  justify-between items-center text-white rounded-lg '>
            <h1 className='text-xl font-medium '>pangea</h1>
           <div className='text-sm  gap-10 hidden md:flex transition-colors hover:text-gray-600 '>
                <Link className='hover:text-white transition-colors' href={'/about'}>about</Link>
                <Link className='hover:text-white transition-colors' href={'/about'}>services</Link>
                <Link className='hover:text-white transition-colors' href={'/about'}>contact</Link>
            </div>
            <FlipText className='bg-white text-blue-900  text-[15px]  w-[7rem] h-[2.4rem]'>Book A Call</FlipText>
        </div>
    </motion.div>
  )
}

export default Nav