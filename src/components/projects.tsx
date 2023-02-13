import List from "./list";
import SectionTitle from "./section_title";

const Projects = () => {
  return (
    <>
      <SectionTitle text="PROJECTS" />
      <div className="text-sm mb-4">
        <List>
          <List.Item>
            <p className="font-bold">My portfolio website</p>
            <div className="underline">
              <a href="https://github.com/tien-dnm/my-portfolio">
                https://github.com/tien-dnm/my-portfolio
              </a>
            </div>
          </List.Item>
        </List>
      </div>
    </>
  );
};

export default Projects;
