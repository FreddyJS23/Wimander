/**Estado de la alerta */
export interface AlertState{
    /**Determina si la alerta es visible o no */
     open:boolean,
     /**Mensaje de la alerta */
     mensaje:string
     /**Tipo de alerta */
     tipo:AlertColor
   }