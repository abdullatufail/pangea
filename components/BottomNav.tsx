import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const BottomNav = ({ref}) => {
   const [isVisible, setIsVisible] = useState(true)
   const inView= useInView(ref)
   useEffect(() => {
        if (!inView) {
            setIsVisible(true)
                  
        }else{
            setIsVisible(false)
             
        }
    }, [inView]);

  return (
    <div className='fixed  bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none'>
        <AnimatePresence>
        {isVisible && <motion.div 
        className='overflow-hidden w-96 h-12 rounded-lg px-4 flex items-center justify-between bg-blue-900 shadow-lg pointer-events-auto'
        variants={{'visible':{ rotate:0, scaleX:1,scaleY:1}
                    ,'initial':{rotate:7,scaleX:0,scaleY:0}}}

        initial={'initial'}
        animate={isVisible?'visible':'initial'}
        exit={{rotate:7,scaleX:0,scaleY:0}}
        transition={{duration:0.4,delay:0.2, ease:"easeIn"}}
        >
            {[...Array(5)].map((_,index)=>(
                <motion.button 
                variants={{'visible':{y:0},'initial':{y:100}}}
                
                
                transition={{delay:0.5,ease:'easeOut'}}
                className='text-white text-xs border border-white px-2 py-1 bg-blue-800 rounded-sm hover:bg-blue-700 transition-colors' key={index}>ClickMe</motion.button>
            ))}
        </motion.div>}
        </AnimatePresence>
    </div>
   
  )
}

export default BottomNav