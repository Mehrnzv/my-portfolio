import About from "./components/About";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container py-4 px-5 lg:px-14 mx-auto">
      <div className="mt-24">
        <HeroSection />
        <About />
        <Projects />
        <ContactSection />
      </div>
    </main>
  );
}
