export interface AuthContextInterface {
    user?: User
    initialStateUser: User
    setUser: Dispatch<SetStateAction<User>>
  }
  
export interface User {
    /** id que tiene en la bd  */
    id: string,
    /** Nombre que tiene en la bd  */
    name:string,
    /** Token de autorizacion para peticiones de los endPoints  */
    token: string
  }
  