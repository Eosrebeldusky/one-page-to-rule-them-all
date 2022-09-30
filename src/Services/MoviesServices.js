import axios from "axios"

const headers = {
    'Accept': 'Application/json',
    'Authorization': 'Bearer ahFAu9x_zientX7cPIiC'}

export const  fellowshipMovie =()=>{
    return axios.get('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c',{headers:{headers}})
    }