import { tarjetaDashboardInterface } from "../../types/index";

interface Props {
  tarjetaDashboard: tarjetaDashboardInterface;
}

export const TarjetasDasboard = ({
  titulo,
  contenido,
}: Props["tarjetaDashboard"]) => {
  return (
    <>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </>
  );
};
