import React from 'react'
import "./QuestionCard.css"

const QuestionCard = ({questionsData, score, setScore, count, setCount, modal, setModal}) => {

    const approvedChoice = (e) => {         
        console.log(e.currentTarget.value);
    }

  return (
    <div className='questionCard'>
        <div>{count + 1}/10 - {questionsData[count]?.question}</div>
        {
            questionsData[count]?.answers?.map((answer, i) =>(
                <button onClick={approvedChoice} value={answer} key={i} >{answer}</button>
            ))
        }
    </div>
  )
}

export default QuestionCard