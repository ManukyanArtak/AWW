const baseUrl = 'http://localhost:3000/api/'

export const handleRequest = async (url, values) => {
  const formdata = new FormData()
  let formBody = []

  for (let i in values) {
    formdata.set(i, values[i])
    let encodedKey = encodeURIComponent(i)
    let encodedValue = encodeURIComponent(values[i])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  formBody = formBody.join('&')

  const res = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody,
  })
  return res.ok
}
