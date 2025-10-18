import Hero from "@/components/Marketing/Hero";
import Features from "@/components/Marketing/Features";
import { ProductShowcase } from "@/components/Marketing/ProductShowcase";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Suspense fallback={<div className="h-96" />}>
        <ProductShowcase />
      </Suspense>
    </>
  );
}
