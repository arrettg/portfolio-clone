import React from "react";
import Header from "./Components/Header";
import "./App.css";
import "./reset.css";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Main from "./Components/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
