const Header = () => {
  return (
    <div id="cv-header" className="bg-slate-500 text-white px-8 py-4">
      <div id="cv-information" className="flex flex-col items-start">
        <div id="cv-full-name" className="text-2xl font-bold uppercase ">
          Đỗ Ngọc Minh Tiến
        </div>
        <div id="cv-job-title" className="text-1xl font-medium uppercase ">
          Full-Stack Developer
        </div>
        <a id="cv-phone-number" href="tel:+84397423971" className="text-sm ">
          (+84) 397.423.971
        </a>
        <a
          id="cv-email"
          href="mailto:tien.dongocminh@gmail.com"
          className="text-sm "
        >
          tien.dongocminh@gmail.com
        </a>
        <a
          id="cv-github"
          href="https://github.com/tien-dnm"
          target={"_blank"}
          className="text-sm "
        >
          github.com/tien-dnm
        </a>
      </div>
    </div>
  );
};
export default Header;
