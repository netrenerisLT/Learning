"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { url: "/", title: "Apie" },
  { url: "/portfolio", title: "Atlikti Darbai" },
  { url: "/contact", title: "Susisiekti" },
];

const lineMotion = {
  offHover: {
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  onHover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  },
  onTap: {
    scale: 0.95,
  },
};

const textMotion = {
  onHover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  },
  onTap: {
    scale: 0.95,
  },
};

export default function MenuLinks({ offMobileMenu, navLinksMotion }) {
  const path = usePathname();
  return (
    <>
      {LINKS.map((link) => (
        <motion.li
          whileInView={navLinksMotion}
          onClick={offMobileMenu}
          whileHover="onHover"
          whileTap="onTap"
          animate={
            path === link.url && path.startsWith(link.url)
              ? "onHover"
              : "offHover"
          }
          key={link.title}
        >
          <motion.div variants={textMotion}>
            <Link href={link.url} key={link.title} className="px-1 py-2">
              {link.title}
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            variants={lineMotion}
            className="w-full h-0.5 bg-tigerEye"
          />
        </motion.li>
      ))}
    </>
  );
}
// export default function MenuLinks({ setActiveMobile }) {
//   const path = usePathname();
//   const defaultStyle = "border-b-2 border-transparent hover:border-tigerEye";
//   const activeStyle = "border-b-2 border-tigerEye";
//   return (
//     <>
//       {LINKS.map((link) => (
//         <motion.li
//           whileHover={{ scale: 1.05 }}
//           transition={{
//             duration: 1,
//             type: "spring",
//           }}
//           className={
//             path === link.url && path.startsWith(link.url)
//               ? activeStyle
//               : defaultStyle
//           }
//           key={link.title}
//         >
//           <Link
//             onClick={() => setActiveMobile(false)}
//             href={link.url}
//             key={link.title}
//           >
//             {link.title}
//           </Link>
//           <motion.hr
//             className="w-full h-1 bg-earthYellow"
//             whileHover={{ scale: [0, 1] }}
//             transition={{
//               type: "spring",
//               duration: 1,
//             }}
//           />
//         </motion.li>
//       ))}
//     </>
//   );
// }
