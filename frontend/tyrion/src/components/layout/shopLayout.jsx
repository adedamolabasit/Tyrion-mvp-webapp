import React from "react";
import Ecomnav from "../../pages/shop/Ecomnav";
import { Footer } from "../../pages/landing/Footer";

function EcommLayout({ children }) {
  return (
    <div className=" pt-[50px]">
      <Ecomnav />
      {children}
      <Footer />
    </div>
  );
}

export default EcommLayout;
