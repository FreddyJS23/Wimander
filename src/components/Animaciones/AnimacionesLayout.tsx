import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AnimacionBase } from "../../types/index";

export const AnimacionesLayout = ({ children }: AnimacionBase) => {
  const location = useLocation();

  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      //cada vez que haya un cambio de url se ejecutara la animacion
      key={location.pathname}
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
