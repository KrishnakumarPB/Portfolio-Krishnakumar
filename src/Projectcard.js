import React from 'react'
import "./projects.css"
let currentelement=""
function showDesc(uid){
    console.log("hovered");
currentelement=document.getElementById(uid);
currentelement.querySelector(".app-description").classList.remove("hidden");
currentelement.querySelector(".app-description").classList.add("app-description-active");
currentelement.querySelector(".app-description").style.animation="descmove .5s ease-out"
}
function hideDesc(uid){
currentelement=document.getElementById(uid);
currentelement.querySelector(".app-description").classList.add("hidden");
currentelement.querySelector(".app-description").classList.remove("app-description-active");
}
function Projectcard (props){
    return(
        <div>
            
           <div className="card-container" onMouseOver={()=>showDesc(props.uniqueid)} onMouseOut={()=>hideDesc(props.uniqueid)} id={props.uniqueid} >
               <div className="app-description hidden"><p>{props.description}</p></div>
               <img className='project-img' src={props.imgurl} alt="img"/>
               <a class=" live-btn" href={props.liveurl} target="_blank" rel="noreferrer">
                    View Live
                </a>
                <div className="project-title">{props.title}</div>
                
           </div>

        </div>
    )
}
export default Projectcard