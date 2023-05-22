import clsx from "clsx";
interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <h2
      className={clsx([
        "text-xl text-gray-500",
        "font-medium",
        "border-b border-gray-300",
        "pb-1 mb-2",
      ])}>
      {text}
    </h2>
  );
};

export default SectionTitle;
