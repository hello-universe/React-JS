import React, { useRef, useState } from 'react'
import './Quiz.css'
import { ques } from '../../assets/questions_for_quiz'


function Quiz() {
  //This will manage the index of the question
  const [index, setIndex] = useState(0);
  //This state will store the current question 
  const [question, setQuestion] = useState(ques[index]);
  //This state will store the number of correct questions
  const [score, setScore] = useState(0);
  //This state will lock the remaining options once one of the option is clicked
  const [lock, setLock] = useState(false);
  //This state will represent if all the questions are being displayed and its the time to display score
  const [result, setResult] = useState(false);
  
  //These refrences will target the each options li
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  const optionsArray = [option1, option2, option3, option4];

  //This function will be called when user clicks on any of the options
  //The first argument is the element(or option) which is clicked
  //The second argument is the answer number(1, 2, 3, 4)
  const checkAns = (ele, ans)=>{
    if(lock == false){
      setLock(true);
      if(question.ans == ans){
        ele.classList.add('correct');
        setScore(score+1);
      }
      else{
        ele.classList.add('wrong');
        optionsArray[question.ans-1].current.classList.add('correct');   
      }
    }
  }

  //This function is triggered when the user clicks on next button
  const handleNext = ()=>{
    if(ques.length === (index+1)) setResult(true) ;
  //This if condition prevents the user from moving to the next question  unless he/she has clicked on an option
    if(lock==false) return ;
    //This logic update the question index and the question in the screen
    setIndex((prevIndex)=>{
      let newIndex = prevIndex+1;
      setQuestion(ques[newIndex]);
      return newIndex;
    })

    //Alternate way when we use let instead of const for index
    // setIndex(++index)
    // setQuestion(ques[index])

    //This logic removes the .correct and .wrong class from the options list because it will be carry on
    //from the previous question
    optionsArray.map((option)=>{
      option.current.classList.remove('correct');
      option.current.classList.remove('wrong');
      return null;
    })
    //We also need to set the lock back to false so that user can select any option in the next question
    setLock(false);
  }

  //This handles the logic of reset button
  const handleReset = ()=>{
    setIndex((prevIndex)=>{
      let newIndex = 0;
      setQuestion(ques[newIndex]);
      return newIndex;
    })
    setLock(false);
    setResult(false);
    setScore(0);
  }

  return (
    <div className='container'>
        <h3>General Knowledge</h3>
        <hr />
        {result ? <>
          <h2>You scored {score} out of {ques.length}</h2>
          <button className='reset' onClick={handleReset}>Reset</button>
        </> : <>
        
        <h2>{question.question}</h2>
        <ul>
            <li ref={option1} id='1' onClick={(ele)=>checkAns(ele.target, ele.target.id)}>{question.option1}</li>
            <li ref={option2} id='2' onClick={(ele)=>checkAns(ele.target, ele.target.id)}>{question.option2}</li>
            <li ref={option3} id='3' onClick={(ele)=>checkAns(ele.target, ele.target.id)}>{question.option3}</li>
            <li ref={option4} id='4' onClick={(ele)=>checkAns(ele.target, ele.target.id)}>{question.option4}</li>
        </ul>
        <button className="next" onClick={handleNext}>Next</button>
        <div className="index">{index+1} of {ques.length} questions</div>
        </>}

    </div>
  )
}

export default Quiz