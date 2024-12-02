// MobileMenu.js
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import NavLink from "../NavLink";
import classes from "./styles.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={classes.menuIcon}
        onClick={toggleMenu}
      >
        <FaBars />
      </div>
      <div className={`${classes.drawer} ${isOpen ? classes.open : ""}`}>
        <div className={classes.drawerHeader}>
          <MdClear
            className={classes.closeIcon}
            onClick={toggleMenu}
          />
        </div>
        <nav className={classes.drawerNav}>
          <ul>
            <li>
              <NavLink href="/receitas">Receitas</NavLink>
            </li>
            <li>
              <NavLink href="/alimentacao-saudavel">
                Alimentação Saudável
              </NavLink>
            </li>
            <li>
              <NavLink href="/aves">Aves</NavLink>
            </li>
            <li>
              <NavLink href="/bebidas">Bebidas</NavLink>
            </li>
            <li>
              <NavLink href="/carnes">Carnes</NavLink>
            </li>
            <li>
              <NavLink href="/doces">Doces</NavLink>
            </li>
            <li>
              <NavLink href="/frutos-do-mar">Frutos do Mar</NavLink>
            </li>
            <li>
              <NavLink href="/lanches">Lanches</NavLink>
            </li>
            <li>
              <NavLink href="/massas">Massas</NavLink>
            </li>
            <li>
              <NavLink href="/peixes">Peixes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
