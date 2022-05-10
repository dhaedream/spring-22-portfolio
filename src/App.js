import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Intro from "./components/into/Intro";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <Features />
      <Banner />
    </div>
  );
}

export default App;
