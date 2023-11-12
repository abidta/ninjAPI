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
    <div className="input-group my-2 ">
      <input
        onChange={handleKey}
        value={keyInput}
        type="text"
        className="form-group "
        placeholder="key"
      />
      <input
        onChange={handleValue}
        value={value}
        type="text"
        className="form-group me-2 "
        placeholder="Value"
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          removeElement(objValue)
        }}
        className="btn btn-danger"
      >
        Remove
      </button>
    </div>
  )
}

export default KeyValue
