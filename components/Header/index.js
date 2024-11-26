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
          <div>aa</div>
        </div>
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
