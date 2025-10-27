import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(5)
  const addValue = () => {
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter)
    }
    
  }
  const removeValue = () => {
    if (counter > 0) 
    setCounter(counter - 1)
  }

  return (
    <>
      
      <h1>Chai aur React</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footet: {counter}</p>
    </>
  )
}

export default App
