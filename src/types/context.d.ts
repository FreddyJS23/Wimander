/**Context del usuario */
export interface AuthContextInterface {
    /**Informacion del usuario */
    user?: User
    /**Estado inicial del usuario */
    initialStateUser: User
    /**Cambiar estado del usuario */
    setUser: Dispatch<SetStateAction<User>>
  }
  
   /**Informacion del usuario */
export interface User {
    /** id que tiene en la bd  */
    id: string,
    /** Nombre que tiene en la bd  */
    name:string,
    /** Token de autorizacion para peticiones de los endPoints  */
    token: string
  }
  