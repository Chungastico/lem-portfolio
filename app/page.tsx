import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import AboutMeLine from "@/components/AboutMeLine";
import AboutMe from "@/sections/AboutMe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMeLine />
      <AboutMe />
    </main>
  );
}
