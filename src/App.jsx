import { useState } from 'react'
import './App.css'
import ExperienceCards from './components/ExperienceCards';
import IntroBox from './components/IntroBox';

function App() {
  const [progressCounter, setProgressCounter] = useState(0)
  const [completed, setCompleted] = useState(false);
  
  return (
    <div>
      <div className='section'><IntroBox completed={completed} setCompleted={setCompleted} progressCounter={progressCounter}/></div>
      <div className='section'><ExperienceCards progressCounter= {progressCounter} setProgressCounter={setProgressCounter}/></div>

    </div>
  )
}

export default App