import axios from "axios";

export default function ajax(url,data={},type='GET'){
    //GET request
    if (type === 'GET') return axios.get(url,{params:data})
    //POST request
    else return axios.post(url,data)
}