interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div id="cv-wrapper" className="h-full bg-white">
      {children}
    </div>
  );
};
export default Wrapper;
