import List from "./list";
import SectionTitle from "./section_title";
import TimeLine from "./timeline";

const Experience = () => {
  return (
    <>
      <SectionTitle text="EXPERIENCE" />
      <TimeLine>
        <TimeLine.Item
          time={"Jun 2021 - Present"}
          jobTitle={"Full-stack developer"}
          companyName={"Dasolution Co.Ltd"}
        >
          <List className="ml-2">
            <List.Item>
              Contribute ideas to build the cross-platform ERP product with
              Reactjs and .NET API.
            </List.Item>
            <List.Item>
              Develop 5+ Power Apps projects for Pepsico with Canvas App.
            </List.Item>
            <List.Item>
              Analyze and develop 5+ CMS websites using .NET MVC.
            </List.Item>
            <List.Item>
              Collaborate with the IT team of Guardian Vietnam to develop the
              voucher manager application.
            </List.Item>
            <List.Item>
              Design and develop 10+ sharepoint webparts to customize sharepoint
              sites.
            </List.Item>
            <List.Item>Organize technology workshops.</List.Item>
            <List.Item>Obtain customers' specification.</List.Item>
          </List>
        </TimeLine.Item>
        <TimeLine.Item
          time={"May 2020 - Jun 2021"}
          jobTitle={"Front-end developer"}
          companyName={"Dasolution Co.Ltd"}
        >
          <List className="ml-2">
            <List.Item>
              Contribute to ERP projects by maintaining and developing 10+
              report screens with Jquery Datatables and ChartJs.
            </List.Item>
            <List.Item>Use RESTful API to operate CRUD.</List.Item>
            <List.Item>
              Use Bootstrap framework to re-design the UI of the company's old
              products.
            </List.Item>
            <List.Item>Manage daily tasks with Jira.</List.Item>
          </List>
        </TimeLine.Item>
      </TimeLine>
    </>
  );
};
export default Experience;
