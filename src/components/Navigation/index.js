import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { FaHome, FaGlasses, FaProjectDiagram, FaNewspaper, FaPhone } from 'react-icons/fa';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
  </motion.ul>
);

const itemIds = [{
  id: 0,
  text: 'Whole',
  url: '/',
  icon: <FaHome />
},{
  id: 1,
  text: 'Who',
  url: '/about',
  icon: <FaGlasses />

},{
  id: 2,
  text: 'Work',
  url: '/projects',
  icon: <FaProjectDiagram />
},{
  id: 3,
  text: 'Wlog',
  url: '/blog',
  icon: <FaNewspaper />
},{
  id: 4,
  text: 'Woof',
  url: '/contact',
  icon: <FaPhone />
}];
