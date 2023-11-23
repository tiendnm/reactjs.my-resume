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
  return <li>{children}</li>;
};
List.Item = Item;
export default List;
