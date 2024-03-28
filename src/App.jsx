import './App.css'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Introduce from './pages/Introduce/Introduce'
import Quiz from './pages/quiz/Quiz'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduce/>}/>
          <Route path="/quiz/:difficulty/:amount" element={<Quiz/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
