import { useState } from 'react'
import React from 'react'
import "../styles/main.css"

const Counter = () => {
  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="counter">
      <span className="counter__count">Counter: {count}</span>
      <div className="counter__btn">
      <button className="counter__btn-decrement" onClick={decrementCount}>-</button>
      <button className="counter__btn-increment" onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default Counter