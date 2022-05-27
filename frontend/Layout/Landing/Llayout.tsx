import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LlayoutType = {
  children: ReactNode;
};

const Llayout: React.FC<LlayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Llayout;
