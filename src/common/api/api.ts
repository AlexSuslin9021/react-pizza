import axios from "axios";


export const instance =axios.create({
    baseURL:'https://64a3b031c3b509573b56686b.mockapi.io/',
    withCredentials:true,
})