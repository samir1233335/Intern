import React from 'react'
import { useState } from 'react'


const App = () => {
  const [count,setCount]=useState(0)
  function increase(){
    setCount(count+1);
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increase} className='bg-amber-800 text-blue-800'>increment</button>
    
      
    </>
  )
}

export default App
