import CareerObjective from "./career_objective";
import Experience from "./experience";
import Projects from "./projects";
import SectionTitle from "./section_title";
import Skills from "./skills";

const Body = () => {
  return (
    <section
      id="cv-body"
      className="bg-white px-8 py-4 ">
      <article className="mb-3">
        <CareerObjective />
      </article>
      <article className="mb-3">
        <Experience />
      </article>
      <article className="mb-3">
        <Skills />
      </article>
      <article className="mb-3">
        <Projects />
      </article>
    </section>
  );
};
export default Body;
