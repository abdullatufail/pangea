import { stringify } from 'querystring';
import React, { useRef } from 'react'
import { benefits } from '@/lib/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
const Choose = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref})
    const y = useTransform(scrollYProgress,[0,1],[0,-100])
  return (
    <div ref={ref} className='linear-gradient-2 h-fit w-[98vw] m-1 rounded-4xl mt-[400px] relative'>

        <div className='w-full h-full flex pt-[150px] justify-center text-center'>
            <h1 className='text-gray-400 text-3xl md:text-5xl capitalize w-[70%] md:w-[60%] font-semibold tracking-tighter'>Measurable Improvements in productivity, cost savings, and operational efficiency within the first <span className='italic text-white'>90 days</span>.</h1>
        </div>
        <motion.div style={{y}} className='h-fit  pb-[20px] flex flex-col space-y-35 items-center mt-[120px]'>
             {benefits.map((benefit,i)=>{
                const start = i/2000;
                const end = start+1/2000;
                return <Card range={[start,end]} progress={scrollYProgress} key={i} i={i}>
                    
                    <div className='h-[100%] w-2/3 md:w-1/3 p-10 flex flex-col justify-between '>
                        <div>
                             <h1 className='tracking-tighter font-medium text-2xl '>{benefit.title}</h1>
                             <p className='text-[15px] mt-2 text-gray-700'>{benefit.description}</p>
                         </div>
                        <h2 className='font-bold text-5xl text-gray-700'>{benefit.percentage}</h2>
                </div>
                    <div className='hidden md:block h-[100%] w-2/3  bg-black rounded-4xl'></div>
                
                </Card>
             })}
        </motion.div>
    </div>
  )
}

const Card =({children,range,progress,i})=>{
    const scale = useTransform(progress,[0,1.5+(i*2)/10],['100%','80%'])
    const tscale = 100+i*5
    let top =10+i*5
    let y =0;
    if(i==3) { y = -100}
    return <motion.div 
                className={`shadow-2xl sticky top-10  h-[500px] card-gradient p-0.5 w-[55vw] rounded-4xl flex items-center `}
                 initial={{scale:`${tscale}%`}}
                 animate={{scale:`${tscale}%`}}
                 style={{top:`${top}vh`, scale,y?}} > {children}</motion.div>
}

export default Choose