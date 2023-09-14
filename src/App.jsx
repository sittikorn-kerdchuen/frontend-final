import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-xs'><span className='text-xl'>Text-xs  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-sm'><span className='text-xl'>Text-sm  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-md'><span className='text-xl'>Text-md  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-xl'><span className='text-xl'>Text-xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-2xl'><span className='text-xl'>Text-2xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-3xl'><span className='text-xl'>Text-3xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-4xl'><span className='text-xl'>Text-4xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-5xl'><span className='text-xl'>Text-5xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-6xl'><span className='text-xl'>Text-6xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-7xl'><span className='text-xl'>Text-7xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-8xl'><span className='text-xl'>Text-8xl  : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='text-9xl'><span className='text-xl'>Text-9xl  : </span> Lorem ipsum dolor </p>
      <p className='text-9xl font-bold'><span className='text-xl'>Text-9xl  : </span> Lorem ipsum dolor</p>
    </>
  )
}

export default App
