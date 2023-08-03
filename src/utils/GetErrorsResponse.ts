import { ErrorsResponseData } from "../types/index"

/** Ver ultimo error de validación del campo de un formulario
 * @param errors Objecto con los nombres de los campos del formulario
 * @example  "Input": [ "The last name field is required."]
 */
export const GetErrorsResponse=(errors:ErrorsResponseData | undefined):string=>{
    let error:string[]=[''] 
   for(const  input in errors){
   error=errors[input]
  }
  return error[0]
}