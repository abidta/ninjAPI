import { useState } from 'react'
import KeyValue from './KeyValue'
import PropTypes from 'prop-types'

function TabContent(props) {
  const [keyValueElement, setKeyValueElement] = useState([])
  if (props.json) {
    return (
      <div className="tab-content p-3 border-top-0 border">
        <div className="overflow-auto" style={{ maxHeight: 200 }}></div>
      </div>
    )
  }
  return (
    <div className="tab-content p-3 border-top-0 border">
      {keyValueElement.map((value, index) => {
        console.log(value)
        return (
          <KeyValue
            element={keyValueElement}
            onChange={props.onChange}
            objValue={value}
            key={index}
          />
        )
      })}
      <button
        value={props.headers ? 'headers' : 'params'}
        onClick={(e) => {
          e.preventDefault()
          setKeyValueElement([
            ...keyValueElement,
            { id: Date.now(), type: e.target.value },
          ])
        }}
        className=" btn btn-outline-success"
      >
        Add
      </button>
    </div>
  )
}
TabContent.propTypes = {
  json: PropTypes.bool,
  headers: PropTypes.bool,
  onChange: PropTypes.func,
}

export default TabContent
