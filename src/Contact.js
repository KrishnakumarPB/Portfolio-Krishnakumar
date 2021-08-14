import React from 'react'
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
            https://www.linkedin.com/in/krishnakumar-p-b-734567166/
            <hr/>
            https://www.instagram.com/k_and_k_photomobiles/
            <hr/>
            https://github.com/KrishnakumarPB
            <hr/>
            https://stackoverflow.com/users/15071536/krishnakumar
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