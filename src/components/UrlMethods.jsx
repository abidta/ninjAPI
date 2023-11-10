import { useState } from 'react'
import PropTypes from 'prop-types'

function UrlMethods({ onChange, setMethod }) {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1')
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
    <div className="input-group mb-5">
      <select
        value={select}
        onChange={handleMethods}
        className="form-select flex-grow-0 w-auto"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        id="url"
        value={url}
        onChange={handleUrl}
        name="url"
        type="url"
        placeholder="api"
        className="me-2 flex-grow-1"
        required
      />
      <button className="btn btn-primary" type="submit">
        Send
      </button>
    </div>
  )
}

UrlMethods.propTypes = {
  onChange: PropTypes.func.isRequired,
  setMethod: PropTypes.func.isRequired,
}

export default UrlMethods
