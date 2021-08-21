import React from 'react'
import Linkedin from "./Screenshots/linkedin.png"
import Github from "./Screenshots/github.png"
import Instagram from "./Screenshots/instagram.png"
import Stackoverflow from "./Screenshots/stackoverflow01.jpg"

import "./contact.css"
function Contact(){
  return(
    < div class="container contact-container inactive" id="contact">
      <div class="col-12 contact-label">
          <p >Contact Me @</p>   
        </div>
    <div class="navbar navbar-contact navbar-expand-lg" >
     
        <ul class="navbar-nav mr-auto">
          <li className='nav-item'><p  >
          krishnakumar.amritham@gmail.com
          </p></li>
          <li className='nav-item'>
          <p>
            +91 9605753599
            </p>
          </li>
          <li className='nav-item'><a  href="https://www.linkedin.com/in/krishnakumar-p-b-734567166/" >
            <img src={Linkedin} target="_blank" alt="img" width="50px" height="50px"></img>Linkedin
            </a></li>
          <li className='nav-item'><a href="https://www.instagram.com/k_and_k_photomobiles/">
            <img src={Instagram} target="_blank" alt="img" width="50px" height="50px"></img>Instagram
            </a></li>
          <li className='nav-item'><a href="https://github.com/KrishnakumarPB">
            <img src={Github} target="_blank" alt="img" width="50px" height="50px"></img>Github
            </a></li>
            <li className='nav-item'><a href="https://stackoverflow.com/users/15071536/krishnakumar">
            <img src={Stackoverflow} target="_blank" alt="img" width="50px" height="50px"></img>Stack Overflow
            </a></li>
        </ul>
        
    </div>
</div>
  )
}
export default Contact