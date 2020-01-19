import axios from 'axios'

export const sourceToken = () => {
  const token = axios.CancelToken
  const source = token.source()

  return source
}
