import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navber />
      {children}
      <Footer />
    </>
  );
};

export default layout;
