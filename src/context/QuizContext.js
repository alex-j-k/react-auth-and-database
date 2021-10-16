import React, { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = (props) => {

//ON STARTUP, GAMOEVER IS TRUE, CLICK START TO SET GAMOVER TO FALSE
    const [gameOver, setGameOver] = useState(true);
//PUSH ANSWER BUTTON TO SELECT ANSWER BUTTON - CHANGE CLASS - HIGHLIGHT SELECTED AND DISABLE BUTTONS
    const [selected, setSelected] = useState();
//PUSH SUBMIT TO CHECK ANSWER
     const [submitted, setSubmitted] = useState(false);
    // const [userAnswer, setUserAnswer] = useState();
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    

 const questionList = [
 {id:1, type: 'multiplechoice' , text: 'Choose your answer' , answers: ['q1','q2','q3','q4'] , correctAnswer: 'q1'  },
 {id:2, type: 'multiplechoice' , text: 'Choose your answer' , answers: ['q5','q6','q7','q8'] , correctAnswer: 'q5'  },
 {id:3, type: 'multiplechoice' , text: 'Choose your answer' , answers: ['q9','q10','q11','q12'] , correctAnswer: 'q9'  },
 {id:4, type: 'multiplechoice' , text: 'Choose your answer' , answers: ['q13','q14','q15','q16'] , correctAnswer: 'q16'  },
 {id:5, type: 'multiplechoice' , text: 'Choose your answer' , answers: ['q17','q18','q19','q20'] , correctAnswer: 'q20'  },

 {id:6, type: 'dragndrop' , text: 'Place in order from...' , toptext: 'Most', bottomtext:'Least',  answers: ['50','25','100','75'] , correctAnswer: ['100','75','50','25']   },
 {id:7, type: 'dragndrop' , text: 'Place in order from...' , toptext: 'Tallest', bottomtext:'Shortest',  answers: ['Mauna Kea','Denali','Kilamanjaro','Mt Blanc'] , correctAnswer: ['Denali','Kilamanjaro','Mt blanc','Mauna Kea']   },

 ]


//SET GAME OVER AT START OR ONCE ALL QUESTIONS FINISHED
 const startClickHandler = () => {
    setGameOver(false);

 }

//ON SELECT ANSWER - DISABLE BUTTONS AND SETSELECTED
const lockInAnswer = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value)
}

//ON SUBMIT CHECK ANSWER - SHOW CORRECT ANSWER - CALCULATE SCORE -  DISPLAY NEXT BUTTON
const checkAnswer =()=> {
    setSubmitted(true);
    if (selected == questionList[questionNumber].correctAnswer){
        setScore(score + 1)
    }
}

                    



//ON NEXT - QUESTION NUMBER +1 - RESET selected, submitted, 

const nextClick = () => {
    setQuestionNumber(questionNumber+1);
    setSelected(null);
    setSubmitted(null);

    if (questionNumber == questionList.length - 1 ) {setGameOver(true)}

}

    return (
        <QuizContext.Provider
        value={{ 
            gameOver, 
            setGameOver,
            startClickHandler,
            questionNumber, 
            score, 
            setScore,
            questionList,
            lockInAnswer,
            setSelected,
            selected,
            submitted,
            setSubmitted,
            checkAnswer,
            nextClick,
        }}
        >
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider