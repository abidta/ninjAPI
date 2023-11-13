import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Response from './components/Response'
import Error from './components/Error'

function App() {
  const [response, setResponse] = useState({})
  const [loader, setLoader] = useState(false)

  const responseHandler = (response) => {
    setLoader(false)
    setResponse(response)
  }
  const handleLoader = () => {
    setLoader(true)
    setResponse({})
  }
  return (
    <>
      <Form onLoading={handleLoader} onResponse={responseHandler} />
      {loader && (
        <div className="col-md-5 mt-5 mx-auto text-center">
          {' '}
          <span className="loader"></span>
          <br />
          <span className='ms-1'>Loading...</span>
        </div>
      )}
      {response.message && <Error err={'something went wrong'} />}
      {response.data && <Response response={response} />}
    </>
  )
}

export default App
