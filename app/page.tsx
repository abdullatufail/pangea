"use client"
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import { useRef } from "react";

export default function Home() {
  const dashRef = useRef(null)
  return (
    <div className="  min-h-screen w-screen ">
      <Nav /> 
      <Hero reference={dashRef}/>
      <Services reference={dashRef}/>
     
    </div>
  );
}
