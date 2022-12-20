import MainWrapStyled from "./MainWrapStyled";

interface MainWrapProps {
  children: JSX.Element | JSX.Element[];
}

const MainWrap = ({ children }: MainWrapProps): JSX.Element => {
  return <MainWrapStyled>{children}</MainWrapStyled>;
};

export default MainWrap;
