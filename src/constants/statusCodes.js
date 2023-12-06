const httpStatusColor = {
  '1xx': 'grey',
  '2xx': 'green',
  '3xx': 'blue',
  '4xx': 'red',
  '5xx': 'red',
}
export const getStatusColor = (statusCode) => {
  return httpStatusColor[statusCode.toString().at(0) + 'xx']
}
