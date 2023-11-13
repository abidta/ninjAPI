import { useState } from 'react'
import PropTypes from 'prop-types'

function UrlMethods({ onChange, setMethod }) {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/')
  const [select, setSelect] = useState('GET')
  const handleUrl = (e) => {
    setUrl(e.target.value)
    onChange(e.target.value)
  }
  const handleMethods = (e) => {
    setSelect(e.target.value)
    setMethod(e.target.value)
  }
  return (
    <div className="input-group mb-5 row mx-auto justify-content-center">
      <div className="col-3 col-md-2 pe-0">
        <select
          value={select}
          onChange={handleMethods}
          className="form-select "
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div className="col-9 col-md-8 mb-2 mb-md-0 ps-0">
        {' '}
        <input
          id="url"
          value={url}
          onChange={handleUrl}
          name="url"
          type="url"
          placeholder="api"
          className="me-2 form-control"
          required
        />
      </div>
      <div className="col-12 col-md-2">
        {' '}
        <button className="btn btn-primary send-btn w-100" type="submit">
          Send
        </button>
      </div>
    </div>
  )
}

UrlMethods.propTypes = {
  onChange: PropTypes.func.isRequired,
  setMethod: PropTypes.func.isRequired,
}

export default UrlMethods
