import { useState } from 'react'
import KeyValue from './KeyValue'
import PropTypes from 'prop-types'

function TabContent(props) {
  const [keyValueElement, setKeyValueElement] = useState([])
  const removeElement = (objValue) => {
    console.log(objValue, 'kkkkkkkkkk')
    setKeyValueElement(
      keyValueElement.filter((obj) => {
        if (obj.id !== objValue.id) {
          return obj
        }
        return null
      })
    )
    console.log(keyValueElement, 'onremove')

    props.onRemove(objValue)
  }
  if (props.json) {
    return (
      <div className="tab-content p-3 border-top-0 border ">
        <div className="overflow-auto" style={{ maxHeight: 200 }}></div>
      </div>
    )
  }
  return (
    <div className="tab-content p-3 border-top-0 border h-25 tab-style">
      {keyValueElement.map((value, index) => {
        console.log(value)
        return (
          <KeyValue
            removeElement={removeElement}
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
  onRemove: PropTypes.func,
}

export default TabContent
