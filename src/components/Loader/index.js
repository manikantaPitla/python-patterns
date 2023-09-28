import { RotatingLines } from "react-loader-spinner";

const Loader = (props) => {
  const { w } = props;
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width={w}
      visible={true}
    />
  );
};

export default Loader;
