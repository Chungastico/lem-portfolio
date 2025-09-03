import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import AboutMeLine from "@/components/AboutMeLine";
import AboutMe from "@/sections/AboutMe";
import Programs from "@/sections/Programs";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMeLine text="About me" />
      <AboutMe />
      <AboutMeLine text="Programs" />
      <Programs />
      <AboutMeLine text="Contact" />
      <Contact />
    </main>
  );
}
