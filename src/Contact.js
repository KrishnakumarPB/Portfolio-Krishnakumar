import React from 'react'
import Linkedin from "./Screenshots/linkedin.png"
import Github from "./Screenshots/github.png"
import Instagram from "./Screenshots/instagram.jpg"
import Stackoverflow from "./Screenshots/stackoverflow01.jpg"

import "./style.css"
function Contact(){
  return(
    < div class="container inactive" id="contact">
    <div class="homecontent row" >
        <div class="col-6 description">
          <p>
          📧krishnakumar.amritham@gmail.com
            <hr/>
            📱+91 9605753599
            <hr/>
            <a href="https://www.linkedin.com/in/krishnakumar-p-b-734567166/" >
            <img src={Linkedin} target="_blank" alt="img" width="75px" height="75px"></img>
            </a>
            <hr/>
            <a href="https://www.instagram.com/k_and_k_photomobiles/">
            <img src={Instagram} target="_blank" alt="img" width="75px" height="75px"></img>
            </a>
            <hr/>
            <a href="https://github.com/KrishnakumarPB">
            <img src={Github} target="_blank" alt="img" width="75px" height="75px"></img>
            </a>
            <hr/>
            <a href="https://stackoverflow.com/users/15071536/krishnakumar">
            <img src={Stackoverflow} target="_blank" alt="img" width="75px" height="75px"></img>
            </a>
            </p>
        </div>
        <div class="col-6 profile">
          <p className="contact-label">Contact</p>
            
        </div>
    </div>
</div>
  )
}
export default Contact