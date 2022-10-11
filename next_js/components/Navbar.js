import Link from "next/link";
import Image from "next/image";
import { UserContext } from "../lib/context";
import { useContext } from "react";

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Next.js</button>
          </Link>
        </li>

        {/* user is signed in and gas username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <a>
                  <Image
                    src={
                      user?.photoURL ||
                      "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                    }
                    alt="Picture of the user"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </a>
              </Link>
            </li>
          </>
        )}
        {/* user is NOR signed OR has not created username */}
        {!username && (
          <>
            <li>
              <Link href="/sign-in">
                <button className="btn-blue">Sign In</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
