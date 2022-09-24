import axios from "axios"

export const getBooks =()=>{
    return axios.get('https://the-one-api.dev/v2/book')
}