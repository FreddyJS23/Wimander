import axios from "axios"
import { Response, UserForm } from "../types"

export const Autenticar = (form: UserForm) => {

    return axios.post(`${import.meta.env.VITE_API_URL}login`, form)
        .then(res => {
            const { data, status }: Response = res
            return { data, status, }
        }
        )
        .catch(err => {
            const { data, status }: Response = err.response ? err.response : { data: null, status: 408 }
            return { data, status }

        })
}