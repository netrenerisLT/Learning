import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import styles from "@/components/main-header/header.module.css";
import Image from "next/image";
import Background from "@/components/main-header/background";

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
              <Link href="/meals">Browse Meals</Link>
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
