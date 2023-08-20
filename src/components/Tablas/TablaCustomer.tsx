import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";

import { AcccionesTabla } from "../Botones";
import { useContext, useEffect, useState } from "react";
import {
  ModalEditarClient,
  ModalDeleteClient,
  ModalExpandirFecha,
} from "../Modales";
import { GetClientes } from "../../services/customer";
import { ControlModal, Customer } from "../../types";
import { Alerts } from "../Elements";
import { AlertContext } from "../../context/AlertContext";
import { columCustomer } from "./columns";

export const TablaCustomer=()=> {
  //Estado modal
  const initialControModal = { modal:'', paramater: 0, open:false };
  //clientes dataTable
  const [clientes, setClientes] = useState<Customer[]>([]);
  //loader para la tabla
  const [loaderTable, setLoaderTable] = useState(false)
  //Control modales
  const [controlModal, setControlModal] =
    useState<ControlModal>(initialControModal);
  //Context para las alertas
  const { alertState, onClose } = useContext(AlertContext);
 
  //Obtener información para la table
  useEffect(() => {
  
   const getData=async()=>{
    setLoaderTable(true)
    const {data,status}=await GetClientes()
    status == 200 && setClientes(data.customers) 
    setLoaderTable(false)
  }
  getData()
  
 
  }, []);

  //Click en las acciones de las acciones
  const handleClick = (
    e: React.MouseEvent<HTMLImageElement>,
    paramId: number | string
  ) => {
    //Identificar tipo de acción a realizar
    setControlModal({ modal: e.currentTarget.id, paramater: paramId,open:true });
    
  };

  //Click en el icono de cierre en el modal
  const handleClose = () => {
    
    setControlModal({...controlModal,open:false});
    //Se necesita vaciar el state después de cierto tiempo para que el desmonte del componente no anule la nimacion de salida del modal
    setTimeout(() => setControlModal(initialControModal), 500);
  };

  //columnas acciones
  const Acciones: GridColDef[] = [
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

  //Columnas dataGrid
  const columns: GridColDef[] = columCustomer.concat(Acciones);

  return (
    <>
    
      <DataGrid
        rows={clientes}
        columns={columns}
        
        initialState={{
          pagination: {
            paginationModel: { pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10, 15, 20]}
        density="compact"
        loading={loaderTable} 
        
      />

      {controlModal.modal === 'editar' &&  <ModalEditarClient
          parameter={controlModal.paramater}
          open={controlModal.open}
          encabezado="Editar cliente"
          handleClose={handleClose}
        />}
    
    
       {controlModal.modal == 'calendario' &&  <ModalExpandirFecha
          parameter={controlModal.paramater}
          open={  controlModal.open}
          encabezado="Expandir fecha"
          handleClose={handleClose}
        />}
      
      
      {controlModal.modal == 'eliminar' &&   <ModalDeleteClient
          parameter={controlModal.paramater}
          open={controlModal.open}
          encabezado="Confirmar eliminación"
          handleClose={handleClose}
        />}
     
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
