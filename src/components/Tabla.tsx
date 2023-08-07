import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import AcccionesTabla from "./AcccionesTabla";
import { useContext, useEffect, useState } from "react";
import {
  ModalEditarClient,
  ModalDeleteClient,
  ModalExpandirFecha,
} from "./Modales";
import { GetClientes } from "../services/customer";
import { ControlModal, Customer } from "../types";
import Alerts from "./Alerts";
import { AlertContext } from "../context/AlertContext";

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
  //se necesita vaciar el state despues de cierto tiempo ya que anula animacion de salida
    setTimeout(()=>setControlModal(""),500)  
  };

  //columnas dataGrid
  const columns: GridColDef[] = [
    { field: "nombre", headerName: "Nombre", flex: 1, editable: false, minWidth: 70 },
    { field: "apellido", headerName: "Apellido", flex: 1,minWidth: 70 },
    { field: "fecha_inicio", headerName: "Fecha de inicio", flex: 0.8,minWidth: 70 },
    { field: "fecha_expiracion", headerName: "Fecha de expiracion", flex: 1,minWidth: 70 },
    { field: "mac", headerName: "Mac", sortable: false, flex: 0.9,minWidth: 70 },
    {
      field: "accion",
      headerName: "Accion",
      sortable: false,
      minWidth: 120,
      flex: 0.8,
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
        autoHeight
        onRowClick={(params: GridRowParams) => {
          setCliente(params.row.id);
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize:8 },
          },
        }}
        pageSizeOptions={[8, 10,15,20]}
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
