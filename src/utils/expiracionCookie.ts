/**Utilidad para fijar fecha de expiracion de la cookie de session  */
export const expiracionCookie = (): Date => {
    const actual = new Date().getTime();
    //4 horas
    const horaVencimiento=14400000
   
    return new Date(actual + horaVencimiento );
  };
  