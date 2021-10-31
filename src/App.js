import React from "react";
import "./style.css";
import Header from "./Header"
import Home from "./Home.js"
import Contact from "./Contact.js"
import Projects from "./Projects";
export default function App() {
  return (
    <div>
      <Header/>
        
      <div >
      <h1>Portfolio...!!!</h1>
      <Home/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}
