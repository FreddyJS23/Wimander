import { GridRowId } from "@mui/x-data-grid"
/**Control para varios modales en un componente */
export interface ControlModal {
  /**Identificar que modal sera abierto */
  modal: string
  /**Parametro que recibira el modal */
  paramater: GridRowId
  /**Apertura del modal */
  open:boolean
}