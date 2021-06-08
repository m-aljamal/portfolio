import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Projects from "../components/homePage/Projects";
export default function Home() {
  return (
    <div>
      <Hero />

      <About />

      <div className="py-20 bg-gray-200">
        <Projects />
      </div>
    </div>
  );
}
