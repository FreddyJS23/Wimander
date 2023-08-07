import axios from "axios"
import { CustomerForm, CustomerFormUpdate, Response } from "../types/index"

/**Obtener todos los clientes */
export const GetClientes= ():Promise<Response> => {

    return axios.get(`${import.meta.env.VITE_API_URL}customer`)
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

/**Obtener un cliente
 * @param cliente - id del cliente a solicitar 
 */
export const GetCliente= (cliente:number | string | undefined) => {

    return axios.get(`${import.meta.env.VITE_API_URL}customer/${cliente}`)
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

/**Actualizar cliente
 * @param cliente - id del cliente a modificar 
 * @param form - formulario con los campos a modificar 
 */
export const ActualizarCliente= (cliente:number | string | undefined,form:CustomerFormUpdate) => {
   //eliminar campo id del formulario
    delete form.id
     return axios.put(`${import.meta.env.VITE_API_URL}customer/${cliente}`,form)
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


/**Eliminar un cliente
 * @param cliente - id del cliente a eliminar
 */
export const EliminarCliente= (cliente:number | string | undefined) => {
   
     return axios.delete(`${import.meta.env.VITE_API_URL}customer/${cliente}`)
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

