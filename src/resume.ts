type AboutMe = {
  name: string;
  title: string;
  phoneNumber: string;
  email: string;
  github: string;
};
type Objective = string;
type Experience = {
  from: Date;
  to: Date | "NOW";
  title: string;
  company: string;
  responsibilities: string[];
  technologies: string[];
};
type Skills = {
  softSkills: string[];
  technicalSkills: string[];
  tools: string[];
  versionControl: string[];
};
type Project = {
  name: string;
  link: string;
  responsibilities: string[];
  technologies: string[];
};
//-----------------------
export const ABOUT_ME: AboutMe = {
  name: "Đỗ Ngọc Minh Tiến",
  email: "tien.dnm@outlook.com",
  github: "github.com/tien-dnm",
  phoneNumber: "(+84) 397 423 971",
  title: "Web Developer",
};
export const OBJECTIVE: Objective =
  "I am a developer with over 3 years experience. My expertise is ReactJS, NextJS, Typescript, .NET, SQL Server. I have a reputation for working hard and being curious about new things.";

export const EXPERIENCE: Experience[] = [
  {
    from: new Date(2023, 0),
    to: "NOW",
    title: "Full-stack Developer",
    company: "Dasolution Co.Ltd",
    responsibilities: [
      "Participated in developing a medical web application with ReactJS, .NET RESTful API, SQL Server.",
      "Integrated Minio (Object Storage) to the back-end in order to enable strong file storage capabilities.",
      "Used Redis for data caching to significantly enhance the performance of the application.",
      "Containerized app using Docker and used Jenkins to build and deploy apps quickly and automatically, cutting down on delivery times.",
    ],
    technologies: [
      ".NET 6 WebAPI",
      "ReactJS (ViteJS)",
      "React Query",
      "Recoil (States Management)",
      "Tailwind CSS",
      "Prime React (UI Components)",
      "Minio (Object Storage)",
      "Redis",
      "Jenkins",
      "Docker",
    ],
  },
  {
    from: new Date(2021, 5),
    to: new Date(2022, 11),
    title: "Web, PowerApps Developer",
    company: "Dasolution Co.Ltd",
    responsibilities: [
      "Contributed ideas to build the ERP web application .NET Core MVC.",
      "Joined a team that used the Canvas App to create 5+ PowerApps projects.",
      "Analyzed and developed 5+ CMS websites using .NET MVC",
      "Collaborated with the IT team of Guardian Vietnam to develop the voucher manager application.",
      "Used git to manage projects, issues",
      "Took part in code reviews to ensure the production environment's codebase is both readable and maintainable.",
    ],
    technologies: [
      ".NET Core 3.1",
      ".NET 5",
      "JQuery",
      "Bootstrap5",
      "SQL Server",
      "PowerApps (Canvas)",
      "Power Automate",
      "Sharepoint Lists",
    ],
  },
  {
    from: new Date(2020, 4),
    to: new Date(2021, 5),
    title: "Web Developer",
    company: "Dasolution Co.Ltd",
    responsibilities: [
      "Contributed to ERP web-app projects by maintaining and developing 10+ report screens with Jquery Datatables and ChartJs.",
      "Used REST API to operate CRUD.",
      "Used Bootstrap framework to re-design the UI of the company's old products.",
      "Managed daily tasks with Jira.",
    ],
    technologies: ["ASP.NET MVC5", "JQuery", "Bootstrap4"],
  },
];
export const SKILLS: Skills = {
  softSkills: [
    "Researching",
    "Communication",
    "Problem solving",
    "Collaboration",
    "Team-work",
    "Critical thinking",
  ],
  technicalSkills: [
    "ReactJS",
    "NextJS",
    ".NET",
    "Docker",
    "TailwindCSS",
    "Bootstrap",
    "JQuery",
    "Javascript",
    "HTML",
    "CSS",
    "REST API",
    "Jenkins",
    "MSSQL",
    "MongoDB",
    "Linux Server",
  ],
  tools: [
    "Visual Studio 2022",
    "Visual Studio Code",
    "SQL Server Management Studio",
  ],
  versionControl: ["Git", "SVN"],
};
export const PROJECTS: Project[] = [
  {
    name: "CMS Website Template",
    link: "https://github.com/tien-dnm/cms-template",
    responsibilities: [
      "Created admin dashboard pages to upload posts easily.",
      "Made the website more secure using JWT token for authentication.",
      "Built with NextJS 14 (app router) for SEO optimization.",
      "Used Recoil for client state management, use Tanstack Query for server state, data management",
      "Stored data in MongoDB for flexible schema design, simple installation and easy to use.",
    ],
    technologies: [
      "NextJS",
      "Tanstack Query",
      "MongoDB",
      "Recoil",
      "next-intl",
      "shadcn/ui",
    ],
  },
  {
    name: "My portfolio / blogs website",
    link: "https://github.com/tien-dnm/my-portfolio",
    responsibilities: [
      "Built a website for me to upload tech news and coding tips.",
      "Used my CMS Website Template project to manage blogs easily.",
      "Used ThreeJS to create interactive 3D object on homepage",
    ],
    technologies: ["My CMS Website Template", "ThreeJS"],
  },
];
