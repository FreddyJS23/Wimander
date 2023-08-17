import axios from "axios"
import { ConfigsForm, Response } from "../types/index"

/**Obtener las configuraciones generales dle usuario */
export const GetConfigs = () => {

    return axios.get(`${import.meta.env.VITE_API_URL}configurations`)
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
/**Actualizar o insertar las configuraciones generales del usuario */
export const UpdateConfigs = (form: ConfigsForm) => {

    return axios.post(`${import.meta.env.VITE_API_URL}configurations`, form)
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