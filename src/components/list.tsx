import clsx from "clsx";

interface ListProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListItemProps {
  children?: React.ReactNode;
}
const List = ({ className, children }: ListProps) => {
  return <ul className={clsx("relative", "text-sm", className)}>{children}</ul>;
};

const Item = ({ children }: ListItemProps) => {
  return (
    <li className="ml-4">
      <div
        className={clsx([
          "absolute",
          "w-2 h-2",
          "bg-gray-500",
          "border border-white",
          "rounded-full mt-2 left-0 ",
        ])}
      ></div>
      {children}
    </li>
  );
};
List.Item = Item;
export default List;
