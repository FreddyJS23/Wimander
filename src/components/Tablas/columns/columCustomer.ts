import { GridColDef} from "@mui/x-data-grid";


export const columCustomer:GridColDef[]=[
    { field: "id", headerName: "ID", flex: 1, editable: false, minWidth: 70 },
    { field: "name", headerName: "Nombre", flex: 1, minWidth: 70 },
    { field: "last_name", headerName: "Apellido", flex: 0.8, minWidth: 70 },
    { field: "mac", headerName: "Mac", flex: 1, minWidth: 70 },
    {
      field: "start_date",
      headerName: "Fecha de inicio",
      sortable: false,
      flex: 0.9,
      minWidth: 70,
    },
    {
      field: "expiration_date",
      headerName: "Fecha de expiracion",
      sortable: false,
      flex: 0.9,
      minWidth: 70,
    },
    
  ];