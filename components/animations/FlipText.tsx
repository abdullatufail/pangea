
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { motion, useAnimation } from 'framer-motion'

const FlipText = ({children,className,variant=""}) => {
    const controls = useAnimation();
    const [isHovered,setIsHovered] = useState(false);
  return (
   <motion.button
   className={`  rounded-lg transition-all overflow-hidden text-lg cursor-pointer ${className}`}
onHoverStart={()=>setIsHovered(true)}
onHoverEnd={()=>setIsHovered(false)}
   
   >
    
    <motion.div className={variant?variant:"pt-2"}
    variants={{
        "initial":{y:0, rotateY:"0deg"}
        ,"hovered":{y:"-150%",rotateY:"90deg"}
    }}
    initial="initial"
    animate={isHovered?"hovered":"initial"}
    >
        {children}
    </motion.div>

    <motion.div className=''
    variants={{
        "initial":{y:"150%",rotateY:"90deg"}
        ,"hovered":{y:"-100%",rotateY:"0deg"}
    }}
    initial="initial"
    animate={isHovered?"hovered":"initial"}
    >
        {children}
    </motion.div>
    
    </motion.button>
  )
}

export default FlipText