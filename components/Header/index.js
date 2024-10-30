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
            alt="A plate weith food on it"
            priority
          />
          NextLevel food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals page</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
