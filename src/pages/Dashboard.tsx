import { Card, CardContent } from "@mui/material";
import { TarjetasDasboard } from "../components/TarjetasDasboard";
import style from "../styles/dashboard.module.css";
import styleTable from "../styles/tablas.module.css";

import Tabla from "../components/Tabla";
import {
  AnimacionTarjetasChildren,
  AnimacionTarjetasContainer,
} from "../components/AnimacionTarjetas";
import useDocumentTitle from "../utils/useDocumentTitle";

const Dashboard = () => {
  //titulo pagina
  useDocumentTitle('Dashboard')
  return (
    <>
      <div className={style["container-dashboard"]}>
        <AnimacionTarjetasContainer>
          <div className={style["container-tarjetasDashoboard"]}>
            <AnimacionTarjetasChildren>
              <Card className={style["tarjeta"]}>
                <CardContent className={style["contenidoTarjeta"]}>
                  <TarjetasDasboard
                    titulo={"titulo"}
                    contenido={"contenido"}
                    style={style["tituloTarjeta"]}
                  />
                </CardContent>
              </Card>
            </AnimacionTarjetasChildren>

            <AnimacionTarjetasChildren>
              <Card className={style["tarjeta"]}>
                <CardContent className={style["contenidoTarjeta"]}>
                  <TarjetasDasboard
                    titulo={"titulo"}
                    contenido={"contenido"}
                    style={style["tituloTarjeta"]}
                  />
                </CardContent>
              </Card>
            </AnimacionTarjetasChildren>
            <AnimacionTarjetasChildren>
              <Card className={style["tarjeta"]}>
                <CardContent className={style["contenidoTarjeta"]}>
                  <TarjetasDasboard
                    titulo={"titulo"}
                    contenido={"contenido"}
                    style={style["tituloTarjeta"]}
                  />
                </CardContent>
              </Card>
            </AnimacionTarjetasChildren>
            {/* <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} />
        <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} /> */}
          </div>
        </AnimacionTarjetasContainer>

        <div className={styleTable["container-tablaCliente"]}>
       
          <Tabla />

       
        </div>
      </div>
    </>
  );
};

export default Dashboard;
