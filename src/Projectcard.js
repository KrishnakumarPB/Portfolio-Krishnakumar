import React from 'react'
import "./projects.css"
function Projectcard (props){
    return(
        <div>
           <div className="card-container">
               <img src={props.imgurl} alt="img"/>
               <a class=" live-btn" href={props.liveurl} target="_blank" rel="noreferrer">
                    View Live
                </a>
                <div className="project-title">{props.title}</div>
                
           </div>

        </div>
    )
}
export default Projectcard