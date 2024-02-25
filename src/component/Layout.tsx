import { ReactNode } from "react";

const Layout = (props: { children: ReactNode }) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
