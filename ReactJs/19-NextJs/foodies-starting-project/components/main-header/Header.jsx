import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./Header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/meals/share">Meals Share</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
