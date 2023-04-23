import { useState } from 'react'
import './App.css'

function App() {
  let [red, setRed] = useState (0);
  let [green, setGreen] = useState (0);
  let [blue, setBlue] = useState (0);

  return (
    <div className='w-screen h-screen grid grid-cols-2 text-xl'>
      <section className='self-center grid grid-row gap-10 m-auto'>

          <div className='flex flex-col'>
            <p className='text-red-500 font-bold text-2xl border-t w-fit border-b border-blue-400'>RED</p>
            <button className='w-80 py-4 text-3xl font-bold border-2 border-black rounded-2xl mt-2' onClick={() => {if (red < 255) setRed(red += 1)}}>+</button>
            <button className='w-80 py-4 text-3xl font-bold border-2 border-black rounded-2xl mt-2' onClick={() => {if (red > 0) setRed(red -= 1)}}>-</button>    
          </div>

          <div className='flex flex-col'>
            <p className='text-green-500 font-bold text-2xl border-t w-fit border-b border-blue-400'>GREEN</p>
            <button className='w-80 py-4 text-3xl font-bold border-2 border-black rounded-2xl mt-2' onClick={() => {if (green < 255) setGreen(green += 1)}}>+</button>
            <button className='w-80 py-4 text-3xl font-bold border-2 border-black rounded-2xl mt-2' onClick={() => {if (green > 0) setGreen(green -= 1)}}>-</button>    
          </div>

          <div className='flex flex-col'>
            <p className='text-blue-500 font-bold text-2xl border-t w-fit border-b border-blue-400'>BLUE</p>
            <button className='w-80 py-4 text-3xl font-bold border-2 border-black rounded-2xl mt-2' onClick={() => {if (blue < 255) setBlue(blue += 1)}}>+</button>
            <button className='w-80 py-4 text-3xl font-bold border-2 border-black rounded-2xl mt-2' onClick={() => {if (blue > 0) setBlue(blue -= 1)}}>-</button>    
          </div>

      </section>
      <section className='border-2 h-fit self-center border-black text-center w-80 py-12 rounded-3xl' style={{color: `rgb(${red}, ${green},${blue})`}}>
        RGB ({red}, {green}, {blue})
      </section>
    </div>
  )
}
export default App
