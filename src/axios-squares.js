import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mosaic-squares.firebaseio.com/'
})

export default instance;