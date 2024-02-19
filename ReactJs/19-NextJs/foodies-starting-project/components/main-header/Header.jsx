import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./HeaderBackground";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* priority tells not to use lasy load */}
          <Image src={logoImg} alt="food plate" priority />
          FOODIE
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
