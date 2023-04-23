import { useState } from 'react'
import './App.css'

function App() {
  const [arr, setArr] = useState ([]);

  function addColor(){
    let newColor = Math.floor(Math.random()*16777216).toString(16);

    setArr(arr => [...arr, newColor]);
  }

  return (
    <div className='w-screen flex flex-col justify-around'>
      <button onClick={addColor} className='w-2/5 m-auto mt-10 mb-16 h-16 border-2 rounded-xl font-bold border-black text-center items-center'>add color</button>
  
      <div className='grid grid-cols-1 gap-2 border-black p-1'>
        
        {arr.map((item, index) => (

          <div className='w-2/5 m-auto py-4 border-2 rounded-xl font-bold border-black text-center align-middle text-white' style={{backgroundColor: `#${item}`}} key={index}>#{item}</div>
       
       ))}

      </div>
    </div>
  )
}
export default App
