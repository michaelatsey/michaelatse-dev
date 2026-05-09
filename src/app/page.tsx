import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ScrollDots } from "@/components/shared/ScrollDots";
import { BackToTop } from "@/components/shared/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollDots />
      <BackToTop />
    </>
  );
}
