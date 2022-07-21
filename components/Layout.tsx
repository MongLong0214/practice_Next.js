import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
