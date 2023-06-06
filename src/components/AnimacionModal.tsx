import { AnimacionModalInterface } from "../types";
import { motion, AnimatePresence } from "framer-motion";

/* para animacion de salidas hay que envolver el div de la animacion con "AnimatePresence" 
y pasar una prop de apertura de la animacion la animacion tiene 3 estado los cuales son
 el estado initial indica los valores iniciales del contenido, animate los valores que se animaran, 
y exit los valores de la animacion de salida */

export const AnimacionModal = ({
  children,
  in: open,
}: AnimacionModalInterface) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
