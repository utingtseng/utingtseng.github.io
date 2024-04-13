import { useState } from 'react'
import './App.css'
import ExperienceCards from './components/ExperienceCards';
import IntroBox from './components/IntroBox';

function App() {
  const [progressCounter, setProgressCounter] = useState(0)
  const [completed, setCompleted] = useState(false);
  const [enableConfetti, setEnableConfetti] =useState(true);
  
  
  return (
    <div>
      <IntroBox setCompleted={setCompleted} progressCounter={progressCounter}/>
      <ExperienceCards progressCounter= {progressCounter} setProgressCounter={setProgressCounter}/>
    </div>
  )
}

export default App