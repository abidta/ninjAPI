import axios from 'axios'
import { toJson, toObject } from './formController.js'

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
export const newRequest = async (formData) => {
  return axios({
    url: formData.url,
    method: formData.method,
    params: toObject(formData.params),
    // paramsSerializer: params=>{
    //   return qs.stringify(params,{arrayFormat:'brackets'})
    // } ,
    headers: toObject(formData.headers),
    data: toJson(formData.data),
  })
}
