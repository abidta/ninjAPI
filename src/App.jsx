import { useState } from 'react'
import './App.css'
import Spinner from 'react-bootstrap/Spinner'
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
  }
  return (
    <>
      <Form onLoading={handleLoader} onResponse={responseHandler} />
      {loader && (
        <div className="col-md-5 mx-auto text-center">
          {' '}
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {response.message && <Error err={'something went wrong'} />}
      {response.data && <Response response={response} />}
    </>
  )
}

export default App
