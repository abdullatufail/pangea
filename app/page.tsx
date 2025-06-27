"use client"
import Benefits from "@/components/Benefits";
import BottomNav from "@/components/BottomNav";
import Choose from "@/components/Choose";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ROI from "@/components/ROI";
import Services from "@/components/Services";
import { useRef } from "react";

export default function Home() {
  const dashRef = useRef(null)
  const heroRef =useRef(null)
  return (
    <div className="  min-h-screen w-screen tracking-tighter ">
      <Nav /> 
      <BottomNav ref={heroRef} />
      <Hero dashRef={dashRef} heroRef={heroRef}/>
      <section id="services">
      <Services reference={dashRef}/>
      </section>
      <section id="about">
      <Choose />
      </section>
      <Benefits />
      <section id="contact">
      <ROI />
      </section>
    </div>
  );
}
