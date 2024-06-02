import React from 'react'
import { useCounter } from '../context/CounterContext'

const ReactContextPage: React.FC = () => {
  const { count, increment, decrement } = useCounter()

  return (
    <div className='page'>
      {/* Text */}
      <span>Counter is {count} with Provider</span>

      <div className='btns'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default ReactContextPage