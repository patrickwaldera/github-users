import axios from 'axios'
const baseUrl = 'https://api.github.com/users'

const get = async (username: string) => {
  const response = await axios.get(`${baseUrl}/${username}`)
  return response.data
}

const getRepos = async (username: string) => {
  const response = await axios.get(`${baseUrl}/${username}/repos`)
  return response.data
}

export default { 
  get,
  getRepos
}