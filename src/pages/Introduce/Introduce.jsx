import Dropdown from "../../components/dropdown/Dropdown"
import "./Introduce.css"

const Introduce = () => {
  const difficulty = ["easy" , "medium" , "hard"]

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src="https://thetrainingarcade.com/wp-content/uploads/2020/06/Trivia-logo-01-1024x473.png" alt="" />
        <Dropdown/>
        <div className="introduce-btn">
          Quiz'e basla
        </div>
      </div>
    </div>
  )
}

export default Introduce