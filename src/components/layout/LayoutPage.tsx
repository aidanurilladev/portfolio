"use client";
import React, { FC, ReactNode } from "react";
import scss from "./LayoutPage.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import useScript from "../ui/cursorAnimation/useScript";

interface LayoutPageProps {
  children: ReactNode;
  url?: any;
}
const LayoutPage: FC<LayoutPageProps> = ({ children, url }) => {
  useScript(url);
  return (
    <>
      <canvas className={scss.canvas} id="canvas" />
      <div className={scss.LayoutSite}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutPage;
