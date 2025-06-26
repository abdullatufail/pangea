import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const BottomNav = ({ref}) => {
   const [isVisible, setIsVisible] = useState(true)
   const inView= useInView(ref,{once:false})
    const controls = useAnimation()
   useEffect(() => {
        if (!inView) {
            setIsVisible(true)
            controls.start("visible");             
            console.log("its not in view")        
        }else{
            setIsVisible(false)
            console.log("its in view") 
        }
    }, [inView, controls]);

  return (
    <div className='fixed  bottom-6 left-0 right-0 z-[70] flex justify-center pointer-events-none'>
        {isVisible && <motion.div 
        className='overflow-hidden w-96 h-12 rounded-lg px-4 flex items-center justify-between bg-blue-900 shadow-lg pointer-events-auto'
        variants={{'visible':{ rotate:0, scaleX:'100%',scaleY:'100%'}
                    ,'initial':{rotate:7,scaleX:0,scaleY:0}}}

        initial={'initial'}
        animate={controls}
        exit={{rotate:7,scaleX:0,scaleY:0}}
        transition={{duration:0.4}}
        >
            {[...Array(5)].map((_,index)=>(
                <motion.button 
                variants={{'visible':{y:0},'initial':{y:100}}}
                
                
                transition={{delay:0.5,ease:'easeOut'}}
                className='text-white text-xs border border-white px-2 py-1 bg-blue-800 rounded-sm hover:bg-blue-700 transition-colors' key={index}>ClickMe</motion.button>
            ))}
        </motion.div>}
    </div>
   
  )
}

export default BottomNav