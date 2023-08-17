import { Card, CardContent } from "@mui/material";
import { TarjetasDasboard } from "../components/Elements";
import style from "../styles/dashboard.module.css";
import styleTable from "../styles/tablas.module.css";
import { TablaCustomer } from "../components/Tablas";
import {
  AnimacionTarjetasChildren,
  AnimacionTarjetasContainer,
} from "../components/Animaciones";
import useDocumentTitle from "../utils/useDocumentTitle";
import { useEffect, useState } from "react";
import { GetGanancias } from "../services/proceeds";
import { BotonCrearCliente } from "../components/Botones";
import { ModalCrearClient } from "../components/Modales";

const Dashboard = () => {
  //Ganacias
  const [ganancia, setGanacias] = useState(0);

  //Control modal
  const [modalOpen, setModalOpen] = useState(false);

  //Apertura modal
  const openModal = () => setModalOpen(true);

  //Cierre modal
  const onClose = () => setModalOpen(false);

  //Consultar ganancias
  useEffect(() => {
    GetGanancias().then((res) => setGanacias(res.data.proceeds));
  }, []);

  //Titulo pagina
  useDocumentTitle("Dashboard");
  return (
    <>
      <div className={style["container-dashboard"]}>
        <AnimacionTarjetasContainer>
          <div className={style["container-tarjetasDashoboard"]}>
            <AnimacionTarjetasChildren>
              <Card className={style["tarjeta"]}>
                <CardContent className={style["contenidoTarjeta"]}>
                  <TarjetasDasboard
                    titulo={"Ganacias totales"}
                    contenido={`${ganancia}$`}
                    style={style["tituloTarjeta"]}
                  />
                </CardContent>
              </Card>
            </AnimacionTarjetasChildren>
          </div>
        </AnimacionTarjetasContainer>

        <div className={styleTable["container-tablaCliente"]}>
          <BotonCrearCliente onClick={openModal} />
          <TablaCustomer />
        </div>
        {/* Modal crear cliente */}

        <ModalCrearClient
          encabezado="Crear cliente"
          handleClose={onClose}
          open={modalOpen}
        />
      </div>
    </>
  );
};

export default Dashboard;
