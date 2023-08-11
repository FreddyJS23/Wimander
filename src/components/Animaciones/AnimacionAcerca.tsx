import { motion } from "framer-motion";
import { AnimacionContainer } from "../../types/index";
import style from "../../styles/acerca.module.css";

//constante de variantes
const logo = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", duaration: 0.8 } },
  hidden: { opacity: 0, y: -100 },
};
const iconoContactoContainer = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,

    transition: {
      when: "afterChildren",
    },
  },
};
const iconoContacto = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -5 },
};

//Animacion logo
export const AnimacionLogo = ({ children }: AnimacionContainer) => {
  return (
    //las variantes son objetos, las claves del objeto se asignan a los valores iniciales y animados
    <motion.div variants={logo} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

//container iconos de contactos
export const AnimacionContactoContainer = ({
  children,
}: AnimacionContainer) => {
  return (
    <motion.div
      variants={iconoContactoContainer}
      initial="hidden"
      animate="visible"
      className={style["colaboradores"]}
    >
      {children}
    </motion.div>
  );
};

//iconos
export const AnimacionContactoIcon = ({ children }: AnimacionContainer) => {
  return (
    <motion.div animate variants={iconoContacto}>
      {children}
    </motion.div>
  );
};
