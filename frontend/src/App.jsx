import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropArea from './components/UploadPanel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 80}}>
      <DropArea />
    </div>
  )
}

export default App
