import logo from './logo.svg';
import './App.css';
import RepetitionEx from './components/RepetitionExercise'
import DurationEx from './components/DurationExercise'
import WeightEx from './components/WeightExercise'
import { useState } from 'react'

function App() {
  let exerciseList = [
    {name: "Running", type: "duration"},
    {name: "Planking", type: "duration"},
    {name: "Sit-Ups", type: "repetition"},
    {name: "Bicep Curls", type: "weight"},
  ]
  
  let [currentExercise, setCurrentExercise] = useState(undefined)
  let currentScreen
  if (currentExercise === undefined) {
    currentScreen =
      <div>
        <h2>Time to Sweat!</h2>
        <p>Available Exercises:</p>
          <button onClick={() => setCurrentExercise(exerciseList[0])}>Running</button>
        <div />
          <button onClick={() => setCurrentExercise(exerciseList[1])}>Planking</button>
        <div />
          <button onClick={() => setCurrentExercise(exerciseList[2])}>Sit-Ups</button>
        <div />
          <button onClick={() => setCurrentExercise(exerciseList[3])}>Bicep Curls</button>
      </div>
  } else if (currentExercise.type === "duration") {
    currentScreen = 
      <div>
        <DurationEx name={currentExercise.name}></DurationEx>
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </div>
  } else if (currentExercise.type === "repetition") {
    currentScreen =
      <div>
        <RepetitionEx name={currentExercise.name}></RepetitionEx>
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </div>
  } else {
    currentScreen =
      <div>
        <WeightEx name={currentExercise.name}></WeightEx>
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </div>
  }
  return (
    <div>
      {currentScreen}
    </div>
  )
}

export default App;
