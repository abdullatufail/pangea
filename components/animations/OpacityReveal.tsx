import { useScroll, useTransform } from 'framer-motion'
import { Target } from 'lucide-react'
import React, { Ref } from 'react'
import { motion } from 'framer-motion'

const OpacityReveal = ({children,className,ref,offset}:{children:string,className:string,ref:any,offset:any}) => {
    const {scrollYProgress} = useScroll({target:ref,offset:offset})
    const words = children.split(" ");
  return (
    <div>
    <span className={`absolute opacity-20 ${className}`}>
        {children}
    </span>
    <div className={`${className}`}>
        {
            words.map((word,i)=>{
                const start = i/words.length;
                const end =start+ 1/words.length;
                console.log([start,end])
                return <Word key={i} range={[start,end]} progress={scrollYProgress}>{word} </Word>
                })
        }
    </div>
    </div>
  )
}

const Word =({children, range, progress})=>{
 const opacity = useTransform(progress,range,[0,1])
 
    return <motion.span style={{opacity}}>{children}</motion.span>
}



export default OpacityReveal