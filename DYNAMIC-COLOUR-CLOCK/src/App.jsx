import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
  
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="clock-container">
        <h1>CLOCK</h1>
        <div className="clock-widget">
          {/* 4. Use date-fns to format the output */}
          
          <h2 style={{ color: '#ff71ce', textShadow: '0 0 10px #ff71ce' }}>
  {format(time, 'hh:mm:ss a')}
</h2>
          <p>{format(time, 'PPPP')}</p>
        </div>
      </div>
    </>
  )
}

export default App
