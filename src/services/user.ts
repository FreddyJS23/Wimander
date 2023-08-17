import axios from "axios"
import { RegisterUserForm, Response, UserUpdateForm } from "../types/index"

export const createUser = (form: RegisterUserForm) => {

    return axios.post(`${import.meta.env.VITE_API_URL}register`, form)
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
/**Obtener un usuario
 * @param user - id del user a solicitar 
 */
export const GetUser = (user: number | string | undefined) => {

    return axios.get(`${import.meta.env.VITE_API_URL}user/${user}`)
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


/**Actualizar usuario
 * @param cliente - id del usuario a modificar 
 * @param form - formulario con los campos a modificar 
 */
export const ActualizarUser = (user: number | string | undefined, form: UserUpdateForm) => {
    //eliminar campo id del formulario
    delete form.id
    return axios.put(`${import.meta.env.VITE_API_URL}user/${user}`, form)
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