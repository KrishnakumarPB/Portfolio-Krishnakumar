import React from 'react'
import "./projects.css"
import Tictactoe from "./Screenshots/tictactoe.png"
import Moviereview from "./Screenshots/moviereview.png"
import Memegenerator from "./Screenshots/Memegenerator.JPG"
import Todos from "./Screenshots/todos.png"
import Drums from "./Screenshots/drums.png"
import Projectcard from './Projectcard'
function Projects (){
    return(
<div id="projects" className="inactive">
        <div className="projects-container">
        <Projectcard
        imgurl={Tictactoe}
        liveurl="#"
        title="Tic Tac Toe"/>
        <Projectcard
        imgurl={Moviereview}
        liveurl="https://movie-review-live.netlify.app/"
        title="Movie Review"/>
        <Projectcard
        imgurl={Memegenerator}
        liveurl="https://meme-generator-live.netlify.app/"
        title="Meme Generator"/>
        <Projectcard
        imgurl={Todos}
        liveurl="https://todo-list-live.netlify.app/"
        title="Todo list"/>
        <Projectcard
        imgurl={Drums}
        liveurl="#"
        title="Drumpad"/>
        </div>
</div>
    )
}
export default Projects