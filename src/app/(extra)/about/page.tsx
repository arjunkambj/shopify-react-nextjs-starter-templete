import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about our story, values, and the team behind our e-commerce platform.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
    </>
  );
}
