import React, { useState, useEffect } from "react"

const UseEffectPage: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState("")

  const handleClick = () => {
    setCounter(value => value += 1)
  }

  useEffect(() => {
    setText(`The value of counter is: ${counter}`)
  }, [counter]);

  return (
    <div className="page">
      <span>{text}</span>

      <button onClick={handleClick}>SUM</button>
    </div>
  )
}

export default UseEffectPage