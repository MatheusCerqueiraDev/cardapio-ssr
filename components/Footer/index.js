import Link from "next/link";
import classes from "./mainFooter.module.css";

export default function Footer() {
  function getActualYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <>
      <footer className={classes.footer}>
        <Link
          href="/"
          className={classes.logo}
        >
          Receitas.com
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>Todos direitos reservados ®{getActualYear()}</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
