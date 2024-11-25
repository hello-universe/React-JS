import React, { useRef, useState } from "react";
import "./Quiz.css";
import { ques } from "../../assets/questions_for_quiz";
import ChatInterface from "./ChatInterface";

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState("General Knowledge");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const filteredQuestions = ques.filter(
    (question) => question.category === selectedCategory
  );

  const [question, setQuestion] = useState(filteredQuestions[index] || null);
  const optionsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  //To pass options as parameters
  const options = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  const checkAns = (ele, ans) => {
    if (!lock) {
      setLock(true);
      if (question.ans === parseInt(ans)) {
        ele.classList.add("correct");
        setScore(score + 1);
      } else {
        ele.classList.add("wrong");
        optionsArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const handleNext = () => {
    if (filteredQuestions.length === index + 1){
      setResult(true);
      return ;
    } 
    if (!lock) return;
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setQuestion(filteredQuestions[newIndex] || null);
      setIsChatOpen(false);
      return newIndex;
    });

    optionsArray.forEach((option) => {
      option.current.classList.remove("correct");
      option.current.classList.remove("wrong");
    });

    setLock(false);
  };

  const handleReset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    setQuestion(filteredQuestions[0] || null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    setQuestion(ques.filter((q) => q.category === category)[0]);
  };

  return (
    <div className="main">
      <div className="sidebar">
        <h3>Topics</h3>
        {["General Knowledge", "Operating System", "DBMS", "Computer Networks"].map(
          (category) => (
            <button
              key={category}
              className={`sidebar-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="container">
      <h3>{selectedCategory}</h3>
      <hr />
        {result ? (
          <>
            <h2>
              You scored {score} out of {filteredQuestions.length}
            </h2>
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
          </>
        ) : (
          <>
            <h2>{question.question}</h2>
            <ul>
              {question &&
                [1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    ref={optionsArray[i - 1]}
                    id={i}
                    onClick={(ele) => checkAns(ele.target, ele.target.id)}
                  >
                    {question[`option${i}`]}
                  </li>
                ))}
            </ul>
            <button className="next" onClick={handleNext}>
              Next
            </button>
            <div className="index">
              {index + 1} of {filteredQuestions.length} questions
            </div>
            {!isChatOpen && (
              <button id="explain" onClick={() => setIsChatOpen(true)}>
                Explain
              </button>
            )}
          </>
        )}
      </div>
      {isChatOpen && (
        <ChatInterface
          onClose={() => setIsChatOpen(false)}
          currentQuestion={question}
          options={options} // Pass options here
        />
      )}
    </div>
  );
}

export default Quiz;
