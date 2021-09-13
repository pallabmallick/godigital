import React from "react";
import About from "./About";
import Client from "./Client";
import Common from "./Common"
import Contact from "./Contact";
import Faq from "./Faq";
import ProductPricing from "./ProductPricing";
import Service from "./Service"

export const Home = () => {
  return (
    <>
      <Common />
      <Service />
      <About />
      <Client />
      <ProductPricing />
      <Faq />
      <Contact />
    </>
  );
};
