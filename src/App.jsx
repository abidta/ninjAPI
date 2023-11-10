import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Response from './components/Response'

function App() {
  const [response, setResponse] = useState({})
  const responseHandler = (response) => {
    setResponse(response)
  }
  return (
    <>
      <Form onResponse={responseHandler} />
      {response.data && <Response response={response} />}
    </>
  )
}

export default App
