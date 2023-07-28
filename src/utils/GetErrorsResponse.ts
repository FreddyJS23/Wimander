import { ErrorsResponseData } from "../types"

export const GetErrorsResponse=(errors:ErrorsResponseData | undefined)=>{
    let error:string[]=[''] 
   for(const  input in errors){
   error=errors[input]
  }
  return error[0]
}