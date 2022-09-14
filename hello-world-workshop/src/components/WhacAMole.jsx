import { useState, useEffect, useRef } from 'react'
import { rand } from '../util/rand'
import reactLogo from '../assets/trident-large.png'

function WhacAMole () {
  const [score, setScore] = useState(0)
  
  const [coords, setCoords] = useState([0, 0])

  const [t, setT] = useState(0)
  const timeout = useRef()

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setScore(score - 10)
      moveMole()
    }, 1000)
  }, [t])

  const moveMole = () => {
    clearTimeout(timeout.current)
    setCoords([rand(), rand()])
    setT(t + 1)
  }

  return (
    <div>
      <div
        style={{
          userSelect: 'none'
        }}
      >
        <img
          src={reactLogo}
          style={{
            position: 'absolute',
            left: `min(${coords[0]}vw, 100vw - 130px)`,
            bottom: `min(${coords[1]}vh, 100vh - 150px - 100px)`,
          }}
          draggable={false}
          onClick={() => {
            setScore(score + 1)
            moveMole()
          }}
        />
        Score: {score}
      </div>

      <button
        onClick={() => {
          clearTimeout(timeout.current)
          setScore(0)
          moveMole()
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default WhacAMole