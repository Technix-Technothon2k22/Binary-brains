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
    return <HLayout>{children}</HLayout>;
  }
  return <Llayout>{children}</Llayout>;
};

export default memo(Layout);
