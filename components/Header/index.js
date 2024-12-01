import logoImg from "@/assets/receitascom.png";
import Image from "next/image";
import Link from "next/link";
import HeaderBackground from "../HeaderBackground";
import NavLink from "../NavLink";
import classes from "./mainHeader.module.css";

export default function Header() {
  return (
    <>
      <HeaderBackground />

      <header className={classes.header}>
        <div className={classes.main}>
          <Link
            href="/"
            className={classes.logo}
          >
            <Image
              src={logoImg}
              alt="receitas.com logo"
              priority
            />
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className={classes.searchInput}
          />
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/receitas">Receitas</NavLink>
            </li>
            <li>
              <NavLink href="/aves">Aves</NavLink>
            </li>
            <li>
              <NavLink href="/carnes">Carnes</NavLink>
            </li>
            <li>
              <NavLink href="/peixes">Peixes</NavLink>
            </li>
            {/* <li>
              <NavLink href="/comunidade">Comunidade</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
