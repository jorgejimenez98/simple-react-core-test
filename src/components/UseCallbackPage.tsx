import React, { useState, useCallback } from 'react';

const UseCallbackPage: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const increment = useCallback(() => setCounter(value => value += 1), [])
  const decrement = useCallback(() => setCounter(value => value -= 1), [])

  return (
    <div className='page'>
      {/* Text */}
      <span>Counter is {counter}</span>

      <div className='btns'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default UseCallbackPage