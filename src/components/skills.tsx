import List from "./list";
import SectionTitle from "./section_title";

const Skills = () => {
  return (
    <>
      <SectionTitle text="SKILLS" />
      <List>
        <List.Item>
          <span className="font-medium">Soft skills</span>: Communication,
          problem solving, collaboration, team-work, critical thinking.
        </List.Item>
        <List.Item>
          <span className="font-medium">Frameworks / Libraries</span>: ReactJS,
          ASP .NET, Ionic, JQuery, Tailwindcss, Bootstrap.
        </List.Item>
        <List.Item>
          <span className="font-medium">Programming languages</span>:
          Typescript, Javascript, C#, Power Fx.
        </List.Item>
        <List.Item>
          <span className="font-medium">Other languages</span>: HTML, Razor,
          CSS.
        </List.Item>
        <List.Item>
          <span className="font-medium">Databases</span>: MSSQL, Sharepoint
          Lists.
        </List.Item>
        <List.Item>
          <span className="font-medium">Tools</span>: Vscode, Visual Studio,
          SVN.
        </List.Item>
      </List>
    </>
  );
};

export default Skills;
