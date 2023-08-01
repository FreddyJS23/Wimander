import axios from "axios"
import { RegisterUserForm, Response } from "../types"

export const createUser= (form: RegisterUserForm) => {

    return axios.post(`${import.meta.env.VITE_API_URL}register`, form)
        .then(res => {
            const { data, status }: Response = res
            return { data, status, }
        }
        )
        .catch(err => {
            const { data, status }: Response = err.response ? err.response : { data:{errors:'Sin conexion al servidor'}, status: 408 }
            return { data, status }

        })
}