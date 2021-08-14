import React from 'react'
import "./style.css"
function Home(){
  return(
    < div class="container current " id="home">
      
    <div class="homecontent row " >
        <div class="col-6 description">
          <p>
          <span className="title"> <span className="highlight"> I'm</span> Krishnakumar</span>
            <br/>
            Software developer having 2 years of experience in a startup firm of customizing Zoho online tools.Certified Zoho CRM
administrator participated in the complete cycle of a project, starting from requirement gathering to support handling.Looking
forward for further improvement on modern technologies like MERN stack where I can imply my conviction towards creating
amazing software solutions.
            <br/>
            </p>
        </div>
        <div class="col-6 profile">
          <img src="https://scontent.fcok10-1.fna.fbcdn.net/v/t31.18172-8/15777007_1893150684237326_3437282015691355825_o.jpg?_nc_cat=101&ccb=1-4&_nc_sid=cdbe9c&_nc_ohc=dnP4pTDnJyMAX954T_A&_nc_ht=scontent.fcok10-1.fna&oh=3b5a3dc5a65b85259cce29a510d266bd&oe=613A0C06" alt="img"></img>
            
        </div>
    </div>
</div>
  )
}
export default Home