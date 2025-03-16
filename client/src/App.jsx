import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [svrData, setSvrData] = useState(null)

  useEffect(() => {
    const svrUri = import.meta.env.VITE_SERVER_URI;
    console.log(svrUri)

    console.log(import.meta.env.BASE_URL)
    
    const helper = async() => {
      const {data} = await axios.get(svrUri);
      console.log(data)
      setSvrData(data)
    }
      helper()
  }, [])

  return (

    <>
      <h1>hello</h1>
      <p> {JSON.stringify(svrData)} </p>
  </>
  )
}

export default App
