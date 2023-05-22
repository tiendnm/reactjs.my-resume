interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <main
      id="cv-wrapper"
      className="h-full bg-white">
      {children}
    </main>
  );
};
export default Wrapper;
