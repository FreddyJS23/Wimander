import axios from "axios"
import { Response } from "../types/index"


export const Logout = (): Promise<Response> => {

    return axios.get(`${import.meta.env.VITE_API_URL}logout`)
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