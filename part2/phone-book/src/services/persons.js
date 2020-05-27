import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const responseData = (request) => {
  return request.then(response => response.data)
}

const getAll = () => (
  responseData(axios.get(baseUrl))
)

const create = newObject => (
  responseData(axios.post(baseUrl, newObject))
)

const deleteId = (id) => (
  responseData(axios.delete(`${baseUrl}/${id}`))
)

const update = (id, newObject) => (
  responseData(axios.put(`${baseUrl}/${id}`, newObject))
)




export default { getAll, create, update, deleteId}