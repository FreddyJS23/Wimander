import { GridRowId } from "@mui/x-data-grid"


export interface ControlModal{
  /**Identificar que modal sera abierto */
  modal:string
  /**Parametro que recibira el modal */
  paramater:GridRowId
}