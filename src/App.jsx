import { useState } from 'react'
import './App.css'
import Button from './componentes/Atomos/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Kaixo
      <Button />
    </>
  )
}

export default App
