import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <main className="container-fluid d-flex flex-column p-0 ">
      {props.children}
    </main>
  );
};

export default Layout;
