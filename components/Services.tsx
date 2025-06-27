"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { services } from '@/lib/constants'
import OpacityReveal from './animations/OpacityReveal'
import FlipText from './animations/FlipText'

const Services = ({reference,homeRef}) => {
    const textRef = useRef(null)
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const serviceRef = useRef(null);
    const {scrollYProgress} = useScroll({target:serviceRef})
    const y = useTransform(scrollYProgress,[0,1],[0,-2100])
    const [offset,setOffset] = useState(["start 0.3","end"])
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");   
            setOffset(["start","end"])                  
        }
    }, [isInView, mainControls]);

    return (
        <div >
            <Loader ref={homeRef} />
            <div ref={reference} className='w-screen flex flex-col items-center justify-center bg-white rounded-2xl'>
                <motion.div 
                    className='absolute z-[-10] top-[200px] top-[570px] bg-white rounded-full w-[700px] h-[700px]'                 
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    style={{scaleX:"300%"}}
                />
            </div>



            {/* total container */}
            <motion.div 
                ref={serviceRef}
                className='scale-50 md:scale-100 flex justify-center md:justify-between w-full px-[15vh] h-[70vh]  md:h-[400vh] relative top-[23vh]'
                
            >
                {/* Left side  */}
                <div ref={ref} className='pt-6 sticky top-[15vh] h-fit flex flex-col gap-10 tracking-tighter '>
                  <OpacityReveal 
                  className={'w-[24rem] md:w-[35rem] font-bold text-2xl md:text-4xl text-gray-800'} 
                  ref={serviceRef}
                  offset={offset}> 
                        Comprehensive IT Solutions Tailored For Modern Enterprises From cloud infrastructure to AI implementation, we have the expertise to drive your digital transformation.
                </OpacityReveal> 
                    
                    
                        <FlipText className={"linear-gradient-1 cursor-pointer text-white mt-5 w-[9rem] h-[3rem]"}>
                            Consultation
                        </FlipText>
                        
                        
                          
                </div>
                
                {/*  right side */}
                <div className='hidden xl:flex justify-center  sticky top-[15vh] h-[74vh] pt-6 w-[70vw] overflow-x-visible overflow-y-hidden rounded-xl'>
                    <motion.div className='space-y-8 '
                    variants={{
                    initial: {opacity: 0},
                    visible: {opacity: 1},
                    hovered:{skewY:10}
                }}
                initial="initial"
                animate={mainControls}
               
                transition={{duration: 0.7, ease: "easeIn"}}
                    >
                        {services.map((service) => (
                            <motion.div 
                                ref={textRef}
                                key={service.title}  
                                className='h-[70vh] shadow-none hover:shadow-2xl hover:shadow-gray-400 transition-shadow gap-2 w-[40vh] lg:w-[80vh]  text-black flex flex-col items-center justify-center tracking-tighter card-gradient  p-4 rounded-3xl '
                                style={{y}}
                                 whileHover={{skewX:-10,skewY:-2,transition:{duration:0.3}}}
                            >
                                <div className=' w-full h-[40%] rounded-xl bg-inherit p-10 space-y-4 flex flex-col items-center text-center'>
                                    <h1 className='text-2xl lg:text-4xl font-bold text-gray-900'>{service.title}</h1>
                                <p className='text-md text-gray-700 w-[90%]'>{service.description}</p>
                                </div>
                                
                                <div className='w-full h-[60%] flex flex-col items-center justify-center linear-gradient-1 rounded-xl italic'>
                                    
                                    <div className='w-full h-full flex flex-wrap'>
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className='text-xl text-gray-100  relative w-1/2 h-1/2 flex items-center justify-center'>
                                               
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}


const Loader= ({ref})=>{
    const {scrollYProgress } = useScroll({target:ref})
    const scaleX = useTransform(scrollYProgress,[0,1],[0,1])

    return (
        <motion.div 
            className='h-[3px] w-screen bg-black fixed top-0 left-0 z-50 origin-left'
            style={{scaleX}}
        />
    )
}
export default Services