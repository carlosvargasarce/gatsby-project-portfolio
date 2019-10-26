import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";

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
  url: '/'
},{
  id: 1,
  text: 'Who',
  url: '/who'
},{
  id: 2,
  text: 'Work',
  url: '/work'
},{
  id: 3,
  text: 'What',
  url: '/what'
},{
  id: 4,
  text: 'Woof',
  url: '/woof'
}];
