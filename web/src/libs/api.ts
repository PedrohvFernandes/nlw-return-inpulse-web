import axios from 'axios'

export const api = axios.create({
  // o endereço base do nosso back-end
  baseURL: import.meta.env.VITE_API_URL,
})