/* eslint-disable react/prop-types */
import { useState } from 'react'

function KeyValue({ onChange, element, objValue, removeElement }) {
  const [keyInput, setKeyInput] = useState('')
  const [value, setValue] = useState('')
  const handleKey = (e) => {
    setKeyInput(e.target.value)
    onChange(
      element.map((obj) => {
        if (obj.id === objValue.id) {
          objValue.key = e.target.value
        }
        return obj
      })
    )
  }
  const handleValue = (e) => {
    setValue(e.target.value)
    element.map((obj) => {
      if (obj.id === objValue.id && objValue.key) {
        objValue.value = e.target.value
      }
      return obj
    })
  }
  return (
    <div>
      <div className="">
        <div className="input-group my-2 mx-auto row">
          <input
            onChange={handleKey}
            value={keyInput}
            type="text"
            className="form-group input-text col-5 "
            placeholder="key"
          />
          <input
            onChange={handleValue}
            value={value}
            type="text"
            className="form-group  col-5"
            placeholder="Value"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              removeElement(objValue)
            }}
            className="btn btn-delete col-1"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default KeyValue
