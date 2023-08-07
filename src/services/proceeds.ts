import axios from "axios"
import { Response } from "../types/index"

/**Obtener las ganancias generales */
export const GetGanancias = () => {

    return axios.get(`${import.meta.env.VITE_API_URL}proceeds`)
        .then(res => {
            const { data, status }: Response = res
            return { data, status, }
        }
        )
        .catch(err => {
            const { data, status }: Response = err.response ? err.response : { data: { errors: 'Sin conexion al servidor' }, status: 408 }
            return { data, status }

        })
}