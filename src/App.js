import "./App.css";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact.jsx";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Intro from "./components/into/Intro";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <Features />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
