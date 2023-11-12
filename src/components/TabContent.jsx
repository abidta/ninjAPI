import { useState, useCallback } from 'react'
import KeyValue from './KeyValue'
import PropTypes from 'prop-types'
import CodeMirror, { basicSetup } from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import {  githubLight } from '@uiw/codemirror-theme-github'

function TabContent(props) {
  const [keyValueElement, setKeyValueElement] = useState([])
  const [jsonVal, setJson] = useState('{\n\t\n}')
  const onJson = useCallback(
    (val) => {
      setJson(val)
      props.onChange(val)
    },
    [props]
  )
  const removeElement = (objValue) => {
    setKeyValueElement(
      keyValueElement.filter((obj) => {
        if (obj.id !== objValue.id) {
          return obj
        }
        return null
      })
    )
    props.onRemove(objValue)
  }
  if (props.json) {
    return (
      <div className="tab-content p-3 border-top-0 border ">
        <div className="overflow-auto" style={{ maxHeight: 200 }}>
          <CodeMirror
            value={jsonVal}
            theme={githubLight}
            height="160px"
            onChange={onJson}
            extensions={[
              basicSetup({
                foldGutter: false,
                dropCursor: false,
                allowMultipleSelections: false,
                indentOnInput: false,
              }),
              json(),
            ]}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="tab-content p-3 border-top-0 border h-25 tab-style">
      {keyValueElement.map((value, index) => {
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
