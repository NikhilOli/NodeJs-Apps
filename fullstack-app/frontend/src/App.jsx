import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [backend, setBackend] = useState([]);
  useEffect(() => {
    axios.get('/api/backend')
      .then(res => {
        setBackend(res.data)
      })
  })

  return (
    <>
      <h1>Fullstack App</h1>
      <h3>Backend Roadmap</h3>
      {
        backend.map((data) => (
          <div key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
