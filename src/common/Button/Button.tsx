import React from "react";
import styles from './button.module.scss'

import {motion} from "framer-motion";

const Button = ({children}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      className={styles.button}>{children}</motion.button>
  )
}

export default Button
