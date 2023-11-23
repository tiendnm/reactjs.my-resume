interface TimeLineProps {
  children?: React.ReactNode;
}
interface TimeLineItemProps {
  children?: React.ReactNode;
  from?: React.ReactNode;
  to?: React.ReactNode;
  jobTitle?: React.ReactNode;
  companyName?: React.ReactNode;
}
const TimeLine = ({ children }: TimeLineProps) => {
  return (
    <ol className="relative border-l border-gray-300 list-none text-xs">
      {children}
    </ol>
  );
};

const TimeLineItem = ({
  children,
  from,
  to,
  jobTitle,
  companyName,
}: TimeLineItemProps) => {
  return (
    <li className="pl-2 text-sm pb-4">
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
      <p className="font-bold italic text-gray-600 text-base">
        {from} - {to}
      </p>
      <p className="italic text-gray-800  mb-1">
        ({jobTitle} at <strong>{companyName}</strong>)
      </p>
      {children}
    </li>
  );
};
TimeLine.Item = TimeLineItem;
export default TimeLine;
