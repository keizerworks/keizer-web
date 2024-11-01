import Navbar from "~/src/components/shared/navbar";
import Hero from "../components/hero/hero";
import Projects from "../components/hero/projects";
import ServicesScroller from "../components/hero/services";

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <div className="flex flex-col  items-center justify-center min-h-[calc(100vh-200px)] w-full">
        <Hero />
        <Projects />
        <ServicesScroller/>
      </div>
    </section>
  );
}
