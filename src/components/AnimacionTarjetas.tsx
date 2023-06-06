import { motion } from "framer-motion";
import { AnimacionContainer} from "../types";


const tarjeta = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const container = {
  visible: {
    opacity: 1,

    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,

    transition: {
      when: "afterChildren",
    },
  },
};

export const AnimacionTarjetasContainer = ({ children }: AnimacionContainer) => {
  return (
   //para lograr animaciones en orden subsecuente se necesitan crear un contenedor
   //crear sus variantes y asignar los valores iniciales y aniamdos
   <motion.div variants={container} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export const AnimacionTarjetasChildren = ({ children }: AnimacionContainer) => {
  //los elementos tienen que ser hijos del contenedor
  //los hijos no necesitan valores iniciales ya toman los del padre para animarse en orden
  return <motion.div variants={tarjeta}>{children}</motion.div>;
};
