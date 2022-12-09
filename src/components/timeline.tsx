interface TimeLineProps {
  children?: React.ReactNode;
}
interface TimeLineItemProps {
  children?: React.ReactNode;
  time?: React.ReactNode;
  jobTitle?: React.ReactNode;
  companyName?: React.ReactNode;
}
const TimeLine = ({ children }: TimeLineProps) => {
  return <ol className="relative border-l border-gray-300">{children}</ol>;
};

const TimeLineItem = ({
  children,
  time,
  jobTitle,
  companyName,
}: TimeLineItemProps) => {
  return (
    <li className="mb-4 ml-4">
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
      <div className="font-medium italic text-gray-500">{time}</div>
      <h3 className="text-lg font-semibold text-gray-900">{jobTitle} </h3>{" "}
      <span className="italic text-base text-gray-800">{companyName}</span>
      {children}
    </li>
  );
};
TimeLine.Item = TimeLineItem;
export default TimeLine;
