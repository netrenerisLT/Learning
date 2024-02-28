"use client"
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import styles from "@/components/main-header/header.module.css";
import Image from "next/image";
import Background from "@/components/main-header/background";
import { usePathname } from "next/navigation";

export default function Header({ params }) {
  const path = usePathname();
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
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? styles.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  path.startsWith("/community") ? styles.active : undefined
                }
              >
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
