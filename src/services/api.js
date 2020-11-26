import axios from 'axios'

const api = axios.create({
    baseURL:'https://charlotte-aplication.herokuapp.com'
});

export default api;