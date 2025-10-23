import React from "react";
import { motion } from "framer-motion";

interface EntranceAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

const EntranceAnimation: React.FC<EntranceAnimationProps> = ({ children, delay = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 50,
        mass: 1,
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default EntranceAnimation;
