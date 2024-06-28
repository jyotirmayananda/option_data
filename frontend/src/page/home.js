import React from "react";
import Topbar from "../components/topbar";
import Navbar from "../components/header";
import Facts from "../components/product";
import Footer from "../components/fotter";  // Corrected the typo from 'fotter' to 'footer'
import Contact from "../components/contact";
import SingleSlide from "../components/slider";

const Home = () => {


  return (
    <>
      <Topbar />
      <Navbar />
      <SingleSlide />
      <Facts />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
