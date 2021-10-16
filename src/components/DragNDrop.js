import React,{useState, useEffect, useContext} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {v1 as uuid} from 'uuid';
import LockInOrderButton from './buttons/LockInOrderButton';
import {QuizContext} from '../context/QuizContext';
import UnselectButton from './buttons/UnselectButton';
import SubmitOrderButton from './buttons/SubmitOrderButton';
import NextButton from './buttons/NextButton';
import ShowCorrectOrder from './ShowCorrectOrder';


const DragNDrop = ({question}) => {

    const {selected, submitted, setSubmitted, setScore, score, questionNumber} = useContext(QuizContext);

    const [correctOrder, setCorrectOrder] = useState([...question.correctAnswer]);
    const [order, setOrder] = useState([...question.answers]);
    const [correct, setCorrect] = useState(false);

//CHECK ORDER ANSWER
const checkOrderAnswer = () => {
    setSubmitted(true);

}

//CHECK ANSWER
    useEffect(() => {
        for (let i =0; i<order.length; i++){
            if(order[i] !== correctOrder[i])
            {setCorrect(false); break } else {setCorrect(true);  setScore(score + 1); setCorrect(true)
            }
           
        }          
  
  }, [submitted]);

  useEffect(() => {
      if (submitted == true) {setSubmitted(false)};
      if (correct == true) {setCorrect(false)};
      setCorrectOrder([...question.correctAnswer]);


}, [questionNumber]);


useEffect(() => {

    setOrder([...question.answers]);


}, [correctOrder]);



 // REORDER ON DRAGNDROP
    const handleOnDragEnd = (result) => {
        console.log(result)
    
        if (!result.destination) return     console.log(order)    ;
    
        const items = Array.from(order);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setOrder(items);
    }

    return (  
        <div className="dragndrop">

                <div class="marvel-device iphone8plus black">
                    <div class="top-bar"></div>
                    <div class="sleep"></div>
                    <div class="volume"></div>
                    <div class="camera"></div>
                    <div class="sensor"></div>
                    <div class="speaker"></div>
                    <div class="screen">






            <p className="textdragndrop">{question.text}</p>
                <UnselectButton></UnselectButton>
            <p className="toptextdragndrop">{question.toptext}</p>

                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (


                                    <ul className={`cards ${selected ? 'selected' : '' } `}  {...provided.droppableProps} ref={provided.innerRef} id={uuid()}>
                                            {order.map((answer,index )=> {
                                            return (   
                                                        <Draggable key={answer} draggableId={answer} index={index}>
                                                            {(provided) => (
                                                                <li  className={`multiplechoicebuttondragndrop ${selected ? 'disabled' : '' } ${correct? 'correct' : submitted ?'incorrect' : ''}`} 
                                                                id={answer}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  >{answer}</li>
                                                                )}
                                                        </Draggable>
                                                        );
                                            })}
                                            {provided.placeholder}
                                    </ul>
                                        )}
                        </Droppable>
                </DragDropContext>

            <p className="bottomtextdragndrop">{question.bottomtext}</p>


            <LockInOrderButton></LockInOrderButton>
            <SubmitOrderButton checkOrderAnswer={checkOrderAnswer}></SubmitOrderButton>
            <NextButton></NextButton>
            <ShowCorrectOrder correct={correct}></ShowCorrectOrder>
            




                        </div>
                <div class="home"></div>
                <div class="bottom-bar"></div>
                </div>






        </div>
    );
}
 
export default DragNDrop



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