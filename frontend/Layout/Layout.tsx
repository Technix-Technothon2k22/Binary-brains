import { useRouter } from "next/router";
import React, { memo } from "react";
import HLayout from "./Home/HLayout";
import Llayout from "./Landing/Llayout";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  const router = useRouter();
  if (router.pathname === "/") {
    return <Llayout>{children}</Llayout>;
  }
  if (router.pathname.startsWith("/view") ) {
    return <>{children}</>;
  }
  // return <HLayout>{children}</HLayout>;
  return null;
};

export default memo(Layout);
