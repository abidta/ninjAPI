import { useState } from 'react'
import axios from 'axios'
//import qs from 'qs'
import PropTypes from 'prop-types'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TabContent from './TabContent'
import UrlMethods from './UrlMethods'

const updateResTime = (response) => {
  response.customData = response.customData || {}
  response.customData.resTime =
    new Date().getTime() - response.config.customData.reqTime
  return response
}
axios.interceptors.request.use((request) => {
  request.customData = request.customData || {}
  request.customData.reqTime = new Date().getTime()
  return request
})
axios.interceptors.response.use(updateResTime, (err) => {
  return Promise.reject(updateResTime(err.response))
})

function Form({ onResponse, onLoading }) {
  const [formData, setFormData] = useState({
    url: 'https://jsonplaceholder.typicode.com/todos/',
    method: 'GET',
    params: [],
    headers: [],
    data: {},
  })
  const updateForms = (element) => {
    console.log(element);
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
  const toObject = (array) => {
    let subArr = []
    return array.reduce((data, pair) => {
      let key = pair.key
      let value = pair.value
      if (key === '') return data
      data[key]
        ? (subArr = Array.isArray(data[key])
            ? [...data[key], value]
            : (subArr = [subArr, value]))
        : (subArr = value)
      console.log(data[key], 'klk')
      return { ...data, [key]: subArr }
    }, {})
  }
  const toJson = (data) => {
    try {
      return JSON.parse(data)
    } catch (e) {
      return {}
    }
  }
  return (
    <div className="p-4">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()
          console.log('form data before setup', formData)
          onLoading()
          axios({
            url: formData.url,
            method: formData.method,
            params: toObject(formData.params),
            // paramsSerializer: params=>{
            //   return qs.stringify(params,{arrayFormat:'brackets'})
            // } ,
            headers: toObject(formData.headers),
            data: toJson(formData.data),
          })
            .catch((e) => e)
            .then((response) => {
              console.log('Response data', response)
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
