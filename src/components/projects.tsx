import List from "./list";
import SectionTitle from "./section_title";

const Projects = () => {
  return (
    <>
      <SectionTitle text="PROJECTS" />
      <div className="text-sm mb-4">
        <List>
          <List.Item>
            <p className="font-bold">
              ADMIN TEMPLATE using ReactJS, Tailwindcss
            </p>
            <div className="underline">
              <a href="https://github.com/tien-dnm/admin-template">
                https://github.com/tien-dnm/admin-template
              </a>
            </div>
            <p className="font-medium">Main responsibility:</p>
            <ul className="list-decimal list-inside">
              <li>Create responsive components.</li>
              <li>Design multi-level sidebar menu.</li>
              <li>
                Embed functional screen into tabs for convenient operation.
              </li>
            </ul>
          </List.Item>
        </List>
      </div>
    </>
  );
};

export default Projects;
