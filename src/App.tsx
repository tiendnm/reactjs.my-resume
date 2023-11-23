import moment from "moment";
import List from "./components/list";
import TimeLine from "./components/timeline";
import { ABOUT_ME, EXPERIENCE, OBJECTIVE, PROJECTS, SKILLS } from "./resume";
function App() {
  return (
    <main className="bg-white h-full prose prose-sm p-2 columns-2 gap-x-4 min-w-full">
      <section className="text-center">
        <h2 className="my-0">{ABOUT_ME.name}</h2>
        <h3 className="my-0">{ABOUT_ME.title}</h3>
        <div className="flex gap-x-5 flex-wrap justify-center">
          <a>{ABOUT_ME.email}</a>
          <a>{ABOUT_ME.phoneNumber}</a>
          <a>{ABOUT_ME.github}</a>
        </div>
      </section>
      <section>
        <h4 className="border-y border-black p-0.5 text-center font-bold">
          Profile
        </h4>
        <div className="not-prose">
          <p className="indent-4">{OBJECTIVE}</p>
        </div>
      </section>
      <section>
        <h4 className="border-y border-black p-0.5 text-center font-bold">
          Skills
        </h4>
        <div className="not-prose">
          <List className="pl-0 list-none ">
            <List.Item>
              <p className="font-bold !my-0.5">Technical skills: </p>
              <p className="indent-2"> - {SKILLS.technicalSkills.join(", ")}</p>
            </List.Item>
            <List.Item>
              <p className="font-bold !my-0.5">Soft skills: </p>
              <p className="indent-2"> - {SKILLS.softSkills.join(", ")}</p>
            </List.Item>
            <List.Item>
              <p className="font-bold !my-0.5">Tools: </p>
              <p className="indent-2"> - {SKILLS.tools.join(", ")}</p>
            </List.Item>
            <List.Item>
              <p className="font-bold !my-0.5">Version control: </p>
              <p className="indent-2"> - {SKILLS.versionControl.join(", ")}</p>
            </List.Item>
          </List>
        </div>
      </section>
      <section>
        <h4 className="border-y border-black p-0.5 text-center font-bold">
          Personal Projects
        </h4>
        <div className="not-prose">
          <List className="pl-0 list-none ">
            {PROJECTS.map((project, index) => {
              return (
                <List.Item key={index}>
                  <p className="font-bold">{project.name}</p>
                  <div className="underline pb-1">
                    <a href={project.link}>{project.link}</a>
                  </div>
                  <h3 className="font-bold text-sm">Responsibilities:</h3>
                  <List className="ml-2 ">
                    {project.responsibilities.map(
                      (responsibility, responsibilityIndex) => {
                        return (
                          <List.Item key={responsibilityIndex}>
                            - {responsibility}
                          </List.Item>
                        );
                      }
                    )}
                  </List>
                  <h3 className="font-bold text-sm">Technologies:</h3>
                  <p className=" indent-2">
                    {" "}
                    - {project.technologies.join(", ")}.
                  </p>
                </List.Item>
              );
            })}
          </List>
        </div>
      </section>
      <section className="break-before-column">
        <h4 className="border-y border-black p-0.5 text-center font-bold">
          Professional Experience
        </h4>
        <div className="not-prose">
          <TimeLine>
            {EXPERIENCE.map((item, index) => {
              return (
                <TimeLine.Item
                  key={index}
                  from={moment(item.from).format("MMM YYYY")}
                  to={
                    item.to === "NOW"
                      ? "Present"
                      : moment(item.to).format("MMM YYYY")
                  }
                  jobTitle={item.title}
                  companyName={item.company}
                >
                  <h3 className="font-bold text-sm">Responsibilities:</h3>
                  <List className="ml-2 ">
                    {item.responsibilities.map(
                      (responsibility, responsibilityIndex) => {
                        return (
                          <List.Item key={responsibilityIndex}>
                            - {responsibility}
                          </List.Item>
                        );
                      }
                    )}
                  </List>
                  <h3 className="font-bold text-sm">Technologies:</h3>
                  <p className=" indent-2">
                    {" "}
                    - {item.technologies.join(", ")}.
                  </p>
                </TimeLine.Item>
              );
            })}
          </TimeLine>
        </div>
      </section>
    </main>
  );
}

export default App;
