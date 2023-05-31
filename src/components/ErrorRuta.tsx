import { useContext } from "react"
import { AuthContext } from "../App"
import { Navigate, useNavigate } from "react-router-dom";


const ErrorRuta = () => {
  
  const authContext = useContext(AuthContext)
  
 
    return (
   <>
    <div>ErrorRuta</div>
    
   
 
   
   </>
  )
}

export default ErrorRuta