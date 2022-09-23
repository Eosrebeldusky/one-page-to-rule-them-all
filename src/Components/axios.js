import axios from "axios";
import { endpoint } from "./Config"; //'https://the-one-api.dev/v2/'

const instance = axios.create({
    baseURL:endpoint
})

export default instance;