export const toObject = (array) => {
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
    return { ...data, [key]: subArr }
  }, {})
}
export const toJson = (data) => {
  try {
    return JSON.parse(data)
  } catch (e) {
    return {}
  }
}
