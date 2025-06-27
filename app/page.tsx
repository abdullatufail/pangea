"use client";
import Benefits from "@/components/Benefits";
import BottomNav from "@/components/BottomNav";
import Choose from "@/components/Choose";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ROI from "@/components/ROI";
import Services from "@/components/Services";
import { useRef, useEffect } from "react";
import Lenis from 'lenis';

export default function Home() {
  const dashRef = useRef(null);
  const heroRef = useRef(null);
  const footerRef = useRef(null);
  const homeRef = useRef(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="  min-h-screen w-screen tracking-tighter ">
      <Nav />
      <BottomNav ref1={heroRef} ref2={footerRef} />
      <Hero dashRef={dashRef} heroRef={heroRef} />

      <section id="services">
        <Services reference={dashRef} homeRef={homeRef} />
      </section>
      <div ref={homeRef}>
        <section id="about">
          <Choose />
        </section>
        <Benefits />
        <section id="contact">
          <ROI footerRef={footerRef} />
        </section>
      </div>
    </div>
  );
}
