import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type HLayoutType = {
  children: ReactNode;
};

const HLayout: React.FC<HLayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HLayout;
