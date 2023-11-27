import { useState } from 'react'
import { newRequest } from '../controllers/request.js'
//import qs from 'qs'
import PropTypes from 'prop-types'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TabContent from './TabContent'
import UrlMethods from './UrlMethods'

function Form({ onResponse, onLoading }) {
  const [formData, setFormData] = useState({
    url: 'https://jsonplaceholder.typicode.com/todos/',
    method: 'GET',
    params: [],
    headers: [],
    data: {},
  })
  const updateForms = (element) => {
    setFormData({
      ...formData,
      [element.type]: formData[element.type].filter((obj) => {
        if (obj.id !== element.id) {
          return obj
        }
      }),
    })
  }
  const handleParams = (params) => {
    //let paramObj = toObject(params)
    setFormData({ ...formData, params: params })
  }
  const handleHeaders = (headers) => {
    setFormData({ ...formData, headers })
  }
  const handleUrls = (url) => {
    setFormData({ ...formData, url })
  }
  const handleMethods = (method) => {
    setFormData({ ...formData, method })
  }
  const handleData = (data) => {
    setFormData({ ...formData, data })
  }

  return (
    <div className="p-4">
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault()
          console.log('form data before setup', formData)
          onLoading()
          try {
            let response = await newRequest(formData)
            console.log('Response =>',response);
            onResponse(response)
          } catch (e) {
            console.log('Error =>',e);
           onResponse(e)
          }
        }}
      >
        <UrlMethods setMethod={handleMethods} onChange={handleUrls} />
        <Tabs defaultActiveKey="params" id="controlled-tab" className="">
          <Tab className="" eventKey="params" title="Query Params">
            <TabContent params onRemove={updateForms} onChange={handleParams} />
          </Tab>
          <Tab eventKey="json" title="JSON">
            <TabContent json onChange={handleData} />
          </Tab>
          <Tab eventKey="headers" title="Headers">
            <TabContent
              headers
              onRemove={updateForms}
              onChange={handleHeaders}
            />
          </Tab>
        </Tabs>
      </form>
    </div>
  )
}
Form.propTypes = {
  onResponse: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
}
export default Form
