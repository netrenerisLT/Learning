import Image from "next/image";
import { getUserWithUsername } from "../lib/firebase";

export default function UserProfile({ user }) {
  return (
    <div>
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
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName}</h1>
    </div>
  );
}
