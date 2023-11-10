import { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TabContent from './TabContent'
import UrlMethods from './UrlMethods'

function Form({ onResponse }) {
  const [formData, setFormData] = useState({
    url: '',
    method: 'GET',
    params: [],
    headers: [],
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
    console.log(params, 'rtr')
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
  const toObject = (array) => {
    return array.reduce((data, pair) => {
      console.log(data, 'klkl')
      let key = pair.key
      let value = pair.value
      if (key === '') return data
      return { ...data, [key]: value }
    }, {})
  }
  return (
    <div className="p-4">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()
          console.log(formData, 'formkl')
          axios({
            url: formData.url,
            method: formData.method,
            params: toObject(formData.params),
            headers: toObject(formData.headers),
          }).then((response) => {
            onResponse(response)
          })
        }}
      >
        <UrlMethods setMethod={handleMethods} onChange={handleUrls} />
        <Tabs defaultActiveKey="params" id="controlled-tab" className="">
          <Tab className="" eventKey="params" title="Query Params">
            <TabContent params onRemove={updateForms} onChange={handleParams} />
          </Tab>
          <Tab eventKey="json" title="JSON">
            <TabContent json />
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
}
export default Form
