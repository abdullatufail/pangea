"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { services } from '@/lib/constants'
import { Button } from './ui/button'

const Services = ({reference}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const serviceRef = useRef(null);
    const {scrollYProgress} = useScroll({target:serviceRef})
    const y = useTransform(scrollYProgress,[0,1],[0,-2100])

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");                     
        }
    }, [isInView, mainControls]);

    return (
        <div >
            <div ref={reference} className='w-screen flex flex-col items-center justify-center bg-white rounded-2xl'>
                <motion.div 
                    className='absolute z-[-10] top-[540px] bg-white rounded-full w-[700px] h-[700px]'                 
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
                className='flex justify-between w-full px-[15vh] h-[400vh] relative top-[20vh]'
                variants={{
                    initial: {opacity: 0},
                    visible: {opacity: 1}
                }}
                initial="initial"
                animate={mainControls}
                transition={{duration: 0.7, ease: "easeIn"}}
            >
                {/* Left side  */}
                <div ref={ref} className='sticky top-[15vh] h-fit flex flex-col gap-10 tracking-tighter'>
                    <h1 className='w-[35rem] font-bold text-5xl text-gray-500'>
                        Comprehensive IT Solutions Tailored For
                        <br />
                        <span className='text-blue-900'>Modern Enterprises</span>
                    </h1>
                    <p className='w-[25rem] text-lg text-gray-700'>
                        From cloud infrastructure to AI implementation, we have the
                        expertise to drive your digital transformation.
                    </p>
                        <Button className='mt-5 w-[9rem] h-[3rem] rounded-xl bg-blue-900 text-lg text-white hover:bg-blue-800'>Consultation</Button>
                          
                </div>
                
                {/*  right side */}
                <div className='sticky top-[15vh] h-[70vh] w-[40vw] overflow-hidden rounded-xl'>
                    <motion.div className='space-y-8 '
                    >
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.title}  
                                className='h-[70vh] gap-2 w-full  text-black flex flex-col items-center justify-center  '
                                style={{y}}
                            >
                                <div className=' w-full h-[40%] rounded-xl bg-gray-300 p-10 space-y-4 flex flex-col items-center text-center'>
                                    <h1 className='text-4xl font-bold text-gray-900'>{service.title}</h1>
                                <p className='text-md text-gray-700 w-[90%]'>{service.description}</p>
                                </div>
                                
                                <div className='w-full h-[60%] flex flex-col items-center justify-center bg-gray-800 rounded-xl'>
                                    
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

export default Services