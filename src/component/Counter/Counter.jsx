import React, {useState} from 'react'
import './Counter.css'

export default function Counter() {
  const [counterQuickstart, setCounterQuickstart] = useState(10)

  let handleIncreament = () => {
    setCounterQuickstart (counterQuickstart+1)
  }

  let handleDecreament = () => {
    setCounterQuickstart (counterQuickstart-10)
  }

  return (
    <>
      <div>My Counter : {counterQuickstart}</div>
      <input type="button" value="Increament" onClick={handleIncreament} className="button-4" />
      <input type="button" value="Decreament" onClick={handleDecreament} className="button-4" style={{backgroundColor:"red"}} />
    </>
  )
}
