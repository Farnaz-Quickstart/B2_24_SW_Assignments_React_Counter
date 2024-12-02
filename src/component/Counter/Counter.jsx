import React, { useState } from 'react'
import "./Counter.css"

export default function Counter() {
  const [counter, setCounter] = useState (0)

  let handleIncreament = () => {
    setCounter(counter+1)
  }

  let handleDecreament = () => {
    setCounter(counter-1)
  }

  let handleReset = () => {
    setCounter(0)
  }

  return (
    <>
      <p>This is counter, value: {counter}</p>
      <input type='button' value="Increament" onClick={handleIncreament} style={{backgroundColor:"red", color: "white", border: "0px"}} />
      <input type='button' value="Decreament" onClick={handleDecreament} className='button4' />
      <input type='button' value="Reset" onClick={handleReset} className='button4' />
    </>
  )
}


