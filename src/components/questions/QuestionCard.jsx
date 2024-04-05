import React from 'react'
import "./QuestionCard.css"

const QuestionCard = ({questionsData, score, setScore, count, setCount, modal, setModal}) => {
  return (
    <div className='questionCard'>
        <div>{count + 1}/10 - {questionsData[count]?.question}</div>
    </div>
  )
}

export default QuestionCard