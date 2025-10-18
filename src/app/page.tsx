import Hero from "@/components/Marketing/Hero";
import Collections from "@/components/Marketing/Collections";
import Features from "@/components/Marketing/Features";
import { ProductShowcase } from "@/components/Marketing/ProductShowcase";
import Testimonials from "@/components/Marketing/Testimonials";
import FAQ from "@/components/Marketing/FAQ";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="py-16 md:py-24" />}>
        <Collections />
      </Suspense>
      <Features />
      <Suspense fallback={<div className="h-96" />}>
        <ProductShowcase />
      </Suspense>
      <Testimonials />
      <FAQ />
    </>
  );
}
