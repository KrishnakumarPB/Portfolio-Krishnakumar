import React from "react"
import "./style.css"

let element=""
let id="";
let prevelement=""
function handleClick(id){
prevelement=document.querySelector(".current");
prevelement.classList.remove("current");
prevelement.classList.add("inactive")
element=document.getElementById(id);
element.classList.remove("inactive")
element.classList.add("current");
}
function Header(){
  return(
<div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark ">
      <a class="navbar-brand" href="#">Krishnakumar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class=" linkitem" href="#home"  onClick={()=>handleClick("home")}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class=" linkitem" href="#projects" onClick={()=>handleClick("projects")}>Projects</a>
      </li>
      <li class="nav-item active">
        <a class=" linkitem" href="#contact" onClick={()=>handleClick("contact")}>Contact</a>
      </li>
    </ul>
  </div>
  
  </nav>
  <div className="bottom-border">
      </div>
 
</div>
  )
}
export default Header