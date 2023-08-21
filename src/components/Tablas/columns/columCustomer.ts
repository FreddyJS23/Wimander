import { GridColDef } from "@mui/x-data-grid";
import { milisecondsToDay } from "../../../utils/converts";

export const columCustomer: GridColDef[] = [
  { field: "name", headerName: "Nombre", flex: 1, minWidth: 70 },
  { field: "last_name", headerName: "Apellido", flex: 0.8, minWidth: 70 },
  { field: "mac", headerName: "Mac", flex: 1, minWidth: 70 },
  {
    field: "start_date",
    headerName: "Fecha de inicio",
    type: "date",
    valueGetter: (params) => new Date(params.value),
    sortable: false,
    flex: 0.9,
    minWidth: 70,
  },
  {
    field: "expiration_date",
    headerName: "Fecha de expiracion",
    sortable: false,
    flex: 0.9,
    type: "date",
    valueGetter: (params) => new Date(params.value),
    minWidth: 70,
    cellClassName: ({ value }) => {
      let styleDateAlert = ''

      if (milisecondsToDay(value) <= 7 && milisecondsToDay(value) > 2) styleDateAlert = 'dateOrange'

      else if (milisecondsToDay(value) <= 2) styleDateAlert = 'dateRed'

      return styleDateAlert
    }
  }
];