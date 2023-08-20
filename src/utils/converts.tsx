/**Utilidad para conver milisegundo en dias
 * @param {Date} fecha - Fecha a la que sacar la diferencia de días con la fecha actual
 */
export const milisecondsToDay = (fecha: Date): number => {
  const actual = new Date('2023-07-01').getTime();

  const diferencia = actual - fecha.getTime();

  return Math.floor(diferencia / 1000 / 60 / 60 / 24);
};
