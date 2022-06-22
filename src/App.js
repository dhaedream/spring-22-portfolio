import React, { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Cloud from "./components/cloud/Cloud";
import Contact from "./components/contact/Contact.jsx";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Intro from "./components/into/Intro";
import Navbar from "./components/navbar/Navbar";
import ProjModal from "./components/proj-modal/ProjModal";
// import ProjectData from "./components/project/ProjectData";
import Projects from "./containers/projects-container/ProjCont";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <Features />
      <Banner />
      <Projects />
      <ProjModal open={openModal} />
      <Cloud />
      <Contact />
    </div>
  );
}

export default App;
