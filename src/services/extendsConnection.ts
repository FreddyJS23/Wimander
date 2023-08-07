import axios from "axios"
import { ExtendsConnectionFom, Response } from "../types/index"

/**Extender la conexión a un cliente
 * @param cliente- Id del cliente a modificar
 * @param form - Campo con la cantidad de días a extender
 */
export const extendsConnection = (cliente: number | string | undefined, form: ExtendsConnectionFom) => {

    delete form.id
    return axios.put(`${import.meta.env.VITE_API_URL}customer/extends-date/${cliente}`, form)
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