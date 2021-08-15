import React from 'react'
import "./projects.css"
import Tictactoe from "./Screenshots/tictactoe.png"
import Moviereview from "./Screenshots/moviereview.png"
import Memegenerator from "./Screenshots/Memegenerator.JPG"
import Todos from "./Screenshots/todos.png"
import Drums from "./Screenshots/drums.png"
import Projectcard from './Projectcard'
import Quotecenter from "./Screenshots/quotecenter.JPG"
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
        liveurl="https://react-jhdixq.stackblitz.io"
        title="Movie Review"/>
        <Projectcard
        imgurl={Memegenerator}
        liveurl="https://meme-generator-live.netlify.app/"
        title="Meme Generator"/>
        <Projectcard
        imgurl={Todos}
        liveurl="https://todo-list-live.netlify.app/"
        title="Todo List"/>
        <Projectcard
        imgurl={Drums}
        liveurl="#"
        title="Drumpad"/>
        <Projectcard
        imgurl={Quotecenter}
        liveurl="https://react-khde5v.stackblitz.io/"
        title="Quote Center"/>
        </div>
</div>
    )
}
export default Projects