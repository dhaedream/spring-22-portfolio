import "./App.css";
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
    </div>
  );
}

export default App;
