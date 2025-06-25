import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-blue-900  min-h-screen w-screen ">
      <Nav /> 
      <Hero />
      <Services />
     
    </div>
  );
}
