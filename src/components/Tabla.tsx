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

  //Click en el icono de cierre en el modal
  const handleClose = () => {
    setOpenModal(false);
    setControlModal(initialControModal);
    //Se necesita vaciar el state después de cierto tiempo para no anular la animacion de salida
    setTimeout(() => setControlModal(initialControModal), 500);
  };

  //Columnas dataGrid
  const columns: GridColDef[] = [
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
    {
      field: "accion",
      headerName: "Accion",
      sortable: false,
      minWidth: 120,
      flex: 0.8,
      type: "actions",
      headerAlign: "center",
      //Renderizar acciones que se aplicaran a las columnas, obteniendo su id
      getActions: (params: GridRowParams) => [
        <AcccionesTabla handleClick={handleClick} paramId={params.id} />,
      ],
    },
  ];

  return (
    <>
      <DataGrid
        rows={clientes}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10, 15, 20]}
        density="compact"
      />

      {/* Identificar que modal abrir */}
      {controlModal.modal == "editar" && (
        <ModalEditarClient
          parameter={controlModal.paramater}
          open={openModal}
          encabezado="Editar cliente"
          handleClose={handleClose}
        />
      )}
      {controlModal.modal == "calendario" && (
        <ModalExpandirFecha
          parameter={controlModal.paramater}
          open={openModal}
          encabezado="Expandir fecha"
          handleClose={handleClose}
        />
      )}
      {controlModal.modal == "eliminar" && (
        <ModalDeleteClient
          parameter={controlModal.paramater}
          open={openModal}
          encabezado="Confirmar eliminación"
          handleClose={handleClose}
        />
      )}
      {/* Mensaje de alertas al realizar las acciones    */}
      <Alerts
        mensaje={alertState.mensaje}
        open={alertState.open}
        tipo={alertState.tipo}
        onClose={onClose}
      />
    </>
  );
}
