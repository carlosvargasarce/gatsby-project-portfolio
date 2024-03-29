import * as React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { Link } from "gatsby";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.textPlaceholder}>
        <Link activeClassName={styles.activeLink} to={i.url}>
          {i.icon} {i.text}
        </Link>
      </div>
    </motion.li>
  );
};
