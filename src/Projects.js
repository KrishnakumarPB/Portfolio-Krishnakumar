import React from 'react'
import "./projects.css"
import Tictactoe from "./Screenshots/tictactoe.png"
import Moviereview from "./Screenshots/moviereview.png"
import Memegenerator from "./Screenshots/Memegenerator.JPG"
import Todos from "./Screenshots/todos.png"
import Drums from "./Screenshots/drums.png"
import Projectcard from './Projectcard'
import Quotecenter from "./Screenshots/quotecenter.JPG"
import Dicegame from "./Screenshots/dicegame.JPG"
import Guessnumber from "./Screenshots/guessnumber.JPG"
function Projects (){
    return(
<div id="projects" className="inactive">
        <div className="projects-container">
        <Projectcard
        imgurl={Tictactoe}
        liveurl="#"
        title="Tic Tac Toe"
        description="A 2-player game completely made in React .Player tries two vertical lines crossing two horizontal lines and each tries to get a row of three Xs or three Os before the opponent does."
        uniqueid="100"/>
        <Projectcard
        imgurl={Moviereview}
        liveurl="https://react-jhdixq.stackblitz.io"
        title="Movie Review"
        description="A movie information center which the user gets some famous movie's name title and its release date along with plot"
        uniqueid="101"/>
        <Projectcard
        imgurl={Memegenerator}
        liveurl="https://meme-generator-live.netlify.app/"
        title="Meme Generator"
        description="Random collection of famous meme photographs which will allow user to enter texts to generate a new meme.On clicking New Image button the meme image will change and user can choose appropriate image for their idea"
        uniqueid="102"/>
        <Projectcard
        imgurl={Todos}
        liveurl="https://todo-list-live.netlify.app/"
        title="Todo List"
        description="A comprehensive task input page where the user can manage the task along with option of marking the task as completed"
        uniqueid="103"/>
        <Projectcard
        imgurl={Drums}
        liveurl="https://drumkit-live.netlify.app/"
        title="Drumpad"
        description="Certain set of drum pad elements which can be used for the user to play the score"
        uniqueid="104"/>
        <Projectcard
        imgurl={Quotecenter}
        liveurl="https://react-khde5v.stackblitz.io/"
        title="Quote Center"
        description="A static website of quotes of famous successful athletes along with their picture and name."
        uniqueid="105"/>
        <Projectcard
        imgurl={Dicegame}
        liveurl="https://roll-dice-live.netlify.app/"
        title="Roll Dice"
        description="A 2 player game where each player gets an opportunity to roll the dice until 1 occurs or give the chance to the opposite voluntarily.The player can hold the points and who ever reach 100 to become winner."
        uniqueid="106"/>
        <Projectcard
        imgurl={Guessnumber}
        liveurl="https://findthenumber.netlify.app/"
        title="Guess the Number"
        description="A simple game to find a hidden number between 1-20.Scores will be stored per session"
        uniqueid="107"/>
        </div>
</div>
    )
}
export default Projects