import axios from 'axios';

const myPort = 8080;

export const api = axios.create({
  baseURL: `http://localhost:${myPort}`
})