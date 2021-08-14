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
      
      <Home/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}
