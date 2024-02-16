import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return <section>{props.children}</section>;
};

export default Layout;
