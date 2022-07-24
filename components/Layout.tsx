import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Awesome FoodStore</title>
      </Head>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
