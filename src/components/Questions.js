import React, {useContext} from 'react'
import {QuizContext} from '../context/QuizContext';
import DragNDrop from './DragNDrop';
import GameOver from './GameOver';
import MultipleChoice from './MultipleChoice';
import ScoreDisplay from './ScoreDisplay';

const Questions = () => 
{
const {gameOver,
     setGameOver,
     startClickHandler,
     questionList,
     questionNumber,
       } 
    = useContext(QuizContext);


    // return (  
    //         <div className="questions">
    //             <h1>This is the question sections</h1>
    //                 {gameOver ? (<button onClick={() => startClickHandler()} >Start the quiz!</button>) :null}
    //                     {!gameOver ? (  questionList.map(question => {
    //                         if (question.type == 'multiplechoice') {

    //                             console.log('multichoice');
                          
    //                                 <MultipleChoice question={question} ></MultipleChoice>
    //                         } else if  (question.type == 'dragndrop') {
    //                                 <DragNDrop></DragNDrop>
    //                         }
    //                     })
                






    //                     ):null}
    //         </div>
    //         );


    return (  
        <div className={`questions ${gameOver ? '' : questionList[questionNumber].type == 'multiplechoice' ? 'atschool': 'atshop'}` }>
                <ScoreDisplay></ScoreDisplay>

                {gameOver ? (<button className='start' onClick={() => startClickHandler()} >Start the quiz!</button>) :null}
                    {!gameOver && questionList[questionNumber].type == 'multiplechoice' ? 
                    <MultipleChoice question={questionList[questionNumber]}></MultipleChoice>
                : 
                !gameOver && questionList[questionNumber].type == 'dragndrop' ?
                <DragNDrop question={questionList[questionNumber]}></DragNDrop>
                : null
                }
                <GameOver></GameOver>

                           

{/* 
<div class="marvel-device iphone8plus black">
    <div class="top-bar"></div>
    <div class="sleep"></div>
    <div class="volume"></div>
    <div class="camera"></div>
    <div class="sensor"></div>
    <div class="speaker"></div>
    <div class="screen">
    {gameOver ? (<button className='start' onClick={() => startClickHandler()} >Start the quiz!</button>) :null}
                    {!gameOver && questionList[questionNumber].type == 'multiplechoice' ? 
                    <MultipleChoice question={questionList[questionNumber]}></MultipleChoice>
                : 
                !gameOver && questionList[questionNumber].type == 'dragndrop' ?
                <DragNDrop question={questionList[questionNumber]}></DragNDrop>
                : null
                }
    </div>
    <div class="home"></div>
    <div class="bottom-bar"></div>
</div> */}








                    
        </div>
        );






}
 
export default Questions
