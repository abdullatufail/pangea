import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import FlipText from './animations/FlipText'
import { benefits } from '@/lib/constants'


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
    
    <motion.div className='fixed   bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none'
    
    >   <AnimatePresence>
       {isVisible && <motion.div className='w-fit h-fit overflow-hidden linear-gradient-1 rounded-2xl'
                    variants={{'initial':{ 
                            clipPath: 'inset(50% 50% 50% 50%)',
                            rotate: 3 
                        }
                                                    ,'visible':{ 
                            clipPath: 'inset(0% 0% 0% 0%)',
                            rotate: 0 
                        }}}
                    initial='initial'
                    animate={isVisible?'visible':'initial'}
                    exit={{ 
                            clipPath: 'inset(50% 50% 50% 50%)',
                            rotate: 3 
                        }}
                    transition={{duration:0.5,delay:0.1, ease:"easeOut",delayChildren:0.2,staggerChildren:0.05}}>
                        <motion.div 
                        className='w-fit h-[3rem] rounded-lg flex items-center m-1 justify-between shadow-lg pointer-events-auto'
                            
                        >
                            {[{title:"pangea",styles:"text-gray-200 bg-black"},{title:"about",styles:"text-gray-200"},{title:"services",styles:"text-gray-200"},{title:"benefits",styles:"text-gray-200"},{title:"Book A Call",styles:"bg-white text-blue-950 w-[8rem]"}].map((item, index) => (
                                <motion.div 
                                    variants={{
                                        'visible': { y: 0 },
                                        'initial': { y: 50}
                                    }}
                                    // Remove this transition prop completely
                                    key={index}
                                >
                                    <FlipText variant='pt-1' className={`capitalize tracking-tighter font-medium  w-[7rem] h-[2.5rem] text-lg relative top-0 my-2 border-1 mx-0.5 border-gray-500 rounded-2xl ${item.styles}`}>
                                        {item.title}
                                    </FlipText>
                                </motion.div>
                            ))}
                        </motion.div>
        </motion.div>}
        </AnimatePresence>
    </motion.div>
   
  )
}

export default BottomNav

