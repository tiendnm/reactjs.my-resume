import CareerObjective from "./career_objective";
import Experience from "./experience";
import Projects from "./projects";
import SectionTitle from "./section_title";
import Skills from "./skills";

const Body = () => {
  return (
    <section id="cv-body" className="bg-white px-8 py-4 ">
      <div className="mb-3">
        <CareerObjective />
      </div>
      <div className="mb-3">
        <Experience />
      </div>
      <div className="mb-3">
        <Skills />
      </div>
      <div className="mb-3">
        <Projects />
      </div>
    </section>
  );
};
export default Body;
