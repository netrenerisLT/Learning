import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MenuLinks from "./MenuLinks";


export default function Header() {
  return (
    <div className="h-full flex items-center justify-between">
      <div>
        <Link href="/" className="text-4xl font-unusualText font-bold">
          {/* <Image>Logo</Image> */}LOGO
        </Link>
      </div>
      <ul className="flex space-x-8 max-sm:hidden">
        <MenuLinks />
      </ul>
      <MobileMenu />
    </div>
  );
}
