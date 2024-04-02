import { useState } from "react"
import Dropdown from "../../components/dropdown/Dropdown"
import "./Introduce.css"
import { useNavigate } from "react-router-dom"

const Introduce = () => {
  const difficulty = ["easy" , "medium" , "hard"]
  const [difficultyChange, setDifficultyChange] = useState('')
  const navigate = useNavigate()
  const TOTAL_QUESTİONS = 10
  console.log(difficultyChange,"setDifficultyChange")

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
    }
  }
  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src="https://thetrainingarcade.com/wp-content/uploads/2020/06/Trivia-logo-01-1024x473.png" alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz'e basla
        </div>
      </div>
    </div>
  )
}

export default Introduce