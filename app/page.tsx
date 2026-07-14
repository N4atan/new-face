import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col">
      <Hero />
      <Services />
      <Portfolio />
      
      
      <CTA />
    </main>
  );
}
