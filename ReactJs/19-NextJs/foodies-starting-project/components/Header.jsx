import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="food" />
        FOODIE
      </Link>
      <nav>
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
  );
}
