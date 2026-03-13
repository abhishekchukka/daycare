import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Accordion from "@/components/Accordion";
import AffordabilityGrant from "@/components/AffordabilityGrant";

// ... existing code ...

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AffordabilityGrant />
      <About />
      <Programs />
      <Accordion />
      <Gallery />
      <Contact />
    </main>
  );
}
