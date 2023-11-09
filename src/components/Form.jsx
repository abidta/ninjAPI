import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TabContent from './TabContent'
import UrlMethods from './UrlMethods'

function Form() {
  const [formData, setFormData] = useState({
    url: '',
    params: [] || {},
    headers: [],
  })
  const handleParams = (params) => {
    setFormData({ ...formData, params })
  }
  const handleHeaders = (headers) => {
    setFormData({ ...formData, headers })
  }
  const handleUrls = (url) => {
    setFormData({ ...formData, url })
  }
  const handleMethods =(method)=>{
    setFormData({ ...formData, method })
  }
  return (
    <div className="p-4">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()

          console.log('formk', formData)
        }}
      >
        <UrlMethods setMethod={handleMethods} onChange={handleUrls} />
        <Tabs defaultActiveKey="params" id="controlled-tab" className="">
          <Tab className="" eventKey="params" title="Query Params">
            <TabContent params onChange={handleParams} />
          </Tab>
          <Tab eventKey="json" title="JSON">
            <TabContent json />
          </Tab>
          <Tab eventKey="headers" title="Headers">
            <TabContent headers onChange={handleHeaders} />
          </Tab>
        </Tabs>
      </form>
    </div>
  )
}

export default Form
