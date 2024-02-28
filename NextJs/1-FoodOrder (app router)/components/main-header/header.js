import logo from "@/assets/logo.png";
import styles from "@/components/main-header/header.module.css";
import Image from "next/image";
import Background from "@/components/main-header/background";
import NavLink from "./nav-link";
import Link from "next/link";


export default function Header() {
  return (
    <>
      <Background />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Website logo" priority />
          iFood
        </Link>
        <nav className={styles.nav}>
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
