import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";

export const metadata = {
  title: "About Us",
  description: "Learn more about our story, values, and the team behind our e-commerce platform.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues />
    </>
  );
}
