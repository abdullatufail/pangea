import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
const ROI = () => {
    const controls = useAnimation();
    const [isHovered,setIsHovered] = useState(false);
  return (
    <div>
    <div className='h-[50vh] w-screen flex items-center justify-center'>
        <motion.div className='relative top-1/2 h-[70vh] w-[60vw]'
        onHoverStart={()=>setIsHovered(true)}
            onHoverEnd={()=>setIsHovered(false)}>
         <motion.div 
             className='bg-blue-800 flex flex-col justify-between h-[70vh] w-[60vw]  rounded-3xl p-2'
            initial={{scale:"100%"}}
             whileHover={{scale:"105%"}}
            >
            
            <div className='space-y-3 p-10'>
                <h1 className='text-5xl text-white font-medium tracking-tighter'>Calculate Your Potential ROI</h1>
                <p className='text-gray-200 text-lg'>
                    See how much you could save and gain with Pangea's IT solutions. Our clients typically see a 300% ROI within the first year.
                </p>
            </div>
            <motion.div className=' w-full h-[10vh] flex justify-between'>
                <div className='h-full w-[79%] bg-blue-950 rounded-2xl'></div>
                <div className='h-full w-[20%] bg-blue-950 rounded-2xl' ></div>
            </motion.div>
         </motion.div>
         <motion.div 
         className='absolute top-0 w-full h-full border-2 hover:border-4  border-gray-400 rounded-3xl'
         variants={{'initial':{scaleX:"102%",scaleY:"104%"},"hovered":{scaleX:"104%",scaleY:"106%"}}}
         initial ="initial"
         animate={isHovered?"hovered":"initial"}
         >

         </motion.div>
         </motion.div>
    </div>
   
    <div className='linear-gradient-1 h-[100vh] w-[98.3vw] rounded-3xl m-1'>

    </div>
    </div>
  )
}

export default ROI