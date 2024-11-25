import logoImg from "@/assets/logo.png";
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
        <Link
          href="/"
          className={classes.logo}
        >
          <Image
            src={logoImg}
            alt="receitas.com logo"
            priority
          />
          Receitas.com
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Receitas</NavLink>
            </li>
            <li>
              <NavLink href="/community">Comunidade</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
