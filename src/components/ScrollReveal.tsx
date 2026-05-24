import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scaleEffect?: boolean;
  key?: any;
}

export default function ScrollReveal({ children, delay = 0, direction = "up", scaleEffect = false }: ScrollRevealProps) {
  const directions = {
    up: { y: 35 },
    down: { y: -35 },
    left: { x: 35 },
    right: { x: -35 },
    none: {}
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: scaleEffect ? 0.95 : 1,
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}
