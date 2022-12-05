import LayoutStyled from "./LayoutStyled";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
