import {DataGrid, GridColDef,GridRowParams} from "@mui/x-data-grid";
import AcccionesTabla from "./AcccionesTabla";
import { useState } from "react";
import {ModalEditarClient,ModalDeleteClient,ModalExpandirFecha,} from "./Modales";

const rows = [
  {
    id: 1,
    nombre: "Snow fulan",
    apellido: "Jon fulano",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 2,
    nombre: "Lannister",
    apellido: "Cersei",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 3,
    nombre: "Lannister",
    apellido: "Jaime",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 4,
    nombre: "Stark",
    apellido: "Arya",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 5,
    nombre: "Targaryen",
    apellido: "Daenerys",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 6,
    nombre: "Melisandre",
    apellido: null,
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 7,
    nombre: "Clifford",
    apellido: "Ferrara",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 8,
    nombre: "Frances",
    apellido: "Rossini",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 9,
    nombre: "Roxie",
    apellido: "Harvey",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
  {
    id: 10,
    nombre: "Roxie",
    apellido: "Harvey",
    fecha_inicio: "12/12/2022",
    fecha_expiracion: "12/12/2022",
    mac: "03:23:fb:23:23",
  },
];

export default function DataTable() {
  const [openModal, setOpenModal] = useState(false);
  const [controlModal, setControlModal] = useState("");
  const [cliente, setCliente] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    //identificar image que se dio click
    setControlModal(e.currentTarget.id);
    setOpenModal(true);
  };

  //vaciar states
  const handleClose = () => {
    setOpenModal(false);
    setCliente(0);
    setControlModal("");
  };

  //columnas dataGrid
  const columns: GridColDef[] = [
    { field: "nombre", headerName: "Nombre", flex: 1, editable: false },
    { field: "apellido", headerName: "Apellido", flex: 1 },
    { field: "fecha_inicio", headerName: "Fecha de inicio", flex: 0.8 },
    { field: "fecha_expiracion", headerName: "Fecha de expiracion", flex: 1 },
    { field: "mac", headerName: "Mac", sortable: false, flex: 0.9 },
    {
      field: "accion",
      headerName: "Accion",
      sortable: false,
      flex: 0.9,
      headerAlign: "center",
      //renderizar columna con informacion personalizada
      renderCell: () => <AcccionesTabla handleClick={handleClick} />,
    },
  ];

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={(params: GridRowParams) => {
          setCliente(params.row.id);
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        density="compact"
      />

      {/* identificar que modal abrir */}
      {controlModal == "editar" && (
        <ModalEditarClient
          cliente={cliente}
          open={openModal}
          encabezado="Editar cliente"
          handleClose={handleClose}
        />
      )}
      {controlModal == "calendario" && (
        <ModalExpandirFecha
          cliente={cliente}
          open={openModal}
          encabezado="Expandir fecha"
          handleClose={handleClose}
        />
      )}
      {controlModal == "eliminar" && (
        <ModalDeleteClient
          cliente={cliente}
          open={openModal}
          encabezado="Confirmar eliminación"
          handleClose={handleClose}
        />
      )}
    </>
  );
}
