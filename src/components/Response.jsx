import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import PropTypes from 'prop-types'
import prettyBytes from 'pretty-bytes'
import CodeMirror, { basicSetup } from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { okaidia } from '@uiw/codemirror-theme-okaidia'

function Response({ response }) {
  return (
    <div className="mt-5 ms-3">
      <h3>Response</h3>
      <div className="d-flex my-2">
        <div className="ms-3"></div>
        Status: <span>{response.status}</span>
        <div className="ms-3">
          Time:{' '}
          <span>
            {response.customData.resTime} <span>ms</span>
          </span>
        </div>
        <div className="ms-3">
          Size:{' '}
          <span>
            {prettyBytes(
              JSON.stringify(response.data).length +
                JSON.stringify(response.headers).length
            )}
          </span>
        </div>
      </div>
      <Tabs defaultActiveKey="body" id="controlled-tab" className="">
        <Tab className="" eventKey="body" title="Body">
          <CodeMirror
            theme={okaidia}
            value={JSON.stringify(response.data)}
            height="200px"
            editable={false}
            extensions={[
              json(),
              basicSetup({
                foldGutter: false,
                dropCursor: false,
                allowMultipleSelections: false,
                indentOnInput: false,
              }),
            ]}
          />
        </Tab>
        <Tab eventKey="headers" title="Headers">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '1rem 2rem',
            }}
          >
            {Object.keys(response.headers).map((key, value) => {
              console.log(key, response.headers[key], 'res')
              return (
                <div style={{ display: 'contents' }} key={value}>
                  <div>{key}</div>
                  <div>{response.headers[key]}</div>
                </div>
              )
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
Response.propTypes = {
  response: PropTypes.object.isRequired,
}

export default Response
