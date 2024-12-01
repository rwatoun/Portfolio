import React from "react";

import { About, Header, Footer, Experience, Projects } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
