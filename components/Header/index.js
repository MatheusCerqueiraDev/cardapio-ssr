"use client";
import logoImg from "@/assets/receitascom.png";
import { debounce } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import HeaderBackground from "../HeaderBackground";
import NavLink from "../NavLink";
import classes from "./mainHeader.module.css";

export default function Header() {
  const searchParams = useSearchParams();
  const router = usePathname();
  const search = searchParams.get("search");

  const [searchQuery, setSearchQuery] = useState(search ?? "");
  const [toggleMobileSearch, setToggleMobileSearch] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const url = `/receitas?search=${searchQuery}`;
      router.push(url);
      console.log("Searching for:", searchQuery);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleInputChange = useCallback(
    debounce(() => handleSearch(), 600),
    []
  );

  const toogleMobileSearchInput = () => {
    setToggleMobileSearch(!toggleMobileSearch);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderSearchInput = () => {
    return (
      <>
        <div className={classes.searchWrapper}>
          <input
            type="text"
            placeholder="Procure por títulos ou ingredientes..."
            className={classes.searchInput}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <FaSearch
            className={classes.searchIcon}
            onClick={handleSearch}
          />
        </div>
        <FaSearch
          className={classes.mobileSearchIcon}
          onClick={toogleMobileSearchInput}
        />
      </>
    );
  };

  const renderMobileSearchInput = () => {
    if (toggleMobileSearch)
      return (
        <div className={classes.mobileSearchWrapper}>
          <input
            type="text"
            placeholder="Procure por títulos ou ingredientes..."
            className={classes.searchInput}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              debouncedHandleInputChange();
            }}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      );
  };

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
          {renderSearchInput()}
        </div>
        {renderMobileSearchInput()}
        {/* <MobileMenu /> */}
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/receitas">Receitas</NavLink>
            </li>
            {/* <li>
              <NavLink href="/alimentacao-saudavel">
                Alimentação saúdavel
              </NavLink>
            </li> */}
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
            {/* <li>
              <NavLink href="/comunidade">Comunidade</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
