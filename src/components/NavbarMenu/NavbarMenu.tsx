import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItems from "./NavbarItems";

import {MdOutlineClose} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"

const NavbarMenu = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  return (
    <div className="lg:hidden">
      <button className="btn absolute right-5 top-10" onClick={() => setToggle(!isToggled)}>
            {isToggled ? <MdOutlineClose size={20}/> : <GiHamburgerMenu size={20}/>}
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar absolute top-0 right-0 min-h-screen"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems  />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMenu;
