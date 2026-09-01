import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCaseStudy from "./components/FeaturedCaseStudy";
import Architecture from "./components/Architecture";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeCanvas from "./components/ThreeCanvas";
import AnimeMotion from "./components/AnimeMotion";

function App() {
  return (
    <div className="min-h-screen bg-[#05060A] text-[#E2E8F0] relative overflow-hidden bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 3D Three.js Background Cloud Mesh */}
      <ThreeCanvas />

      {/* Anime.js Motion Engine */}
      <AnimeMotion />

      {/* Top Ambient Radial Mesh Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none z-[1]" />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <FeaturedCaseStudy />
          <Architecture />
          <Projects />
          <Skills />
          <About />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;