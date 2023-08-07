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
//Estado modal
  const initialControModal = { modal: "", paramater: 0 };
  const [clientes, setClientes] = useState<Customer[]>([]);
  //Apertura del modal
  const [openModal, setOpenModal] = useState(false);
  //Informacion para enviar al modal
  const [controlModal, setControlModal] =
    useState<ControlModal>(initialControModal);
  //Context para las alertas
    const { alertState, onClose } = useContext(AlertContext);

  //Obtener información para la table
  useEffect(() => {
    GetClientes().then((res) => setClientes(res.data.customers));
  }, []);

  //Click en las acciones de las acciones
  const handleClick = (
    e: React.MouseEvent<HTMLImageElement>,
    paramId: number | string
  ) => {
    //Identificar tipo de acción a realizar
    setControlModal({ modal: e.currentTarget.id, paramater: paramId });
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
