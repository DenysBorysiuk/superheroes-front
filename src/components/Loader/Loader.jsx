import { ThreeDots } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="100"
        width="100"
        radius="10"
        color="#5735a3"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName="wrapper"
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
