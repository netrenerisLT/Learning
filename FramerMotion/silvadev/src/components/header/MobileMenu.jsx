"use client";
import { useRef, useState } from "react";
import MenuLinks from "./MenuLinks";
import { motion, useScroll } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1600px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  },
};
const navLinksMotion = {
  y: [50, 0],
  opacity: [0, 1],
  transition: {
    type: "spring",
    stiffness: 250,
    damping: 40,
  },
};

export default function MobileMenu() {
  const [activeMobile, setActiveMobile] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px", "300px"],
  });

  function handleClick() {
    setActiveMobile(false);
  }
  return (
    <motion.div
      ref={ref}
      className="flex flex-col absolute z-10 "
      animate={activeMobile ? "open" : "closed"}
      style={{ opacity: scrollYProgress }}
    >
      <motion.ul
        className="flex flex-col items-center fixed justify-center top-2 left-2 gap-8 h-[calc(100%-16px)] max-w-md w-[calc(100%-16px)] z-10 bg-darkMossGreen text-white"
        variants={variants}
        initial={false}
      >
        <MenuLinks
          navLinksMotion={navLinksMotion}
          offMobileMenu={handleClick}
        />
      </motion.ul>

      <motion.button
        style={{ scale: scrollYProgress }}
        className="flex w-16 h-16 flex-col justify-center fixed items-center top-2 left-2 z-50 m-2 bg-darkMossGreen rounded-full"
        onClick={() => setActiveMobile(!activeMobile)}
        whileHover={{
          transition: { duration: 1, type: "spring" },
          scaleX: 1.1,
          scaleY: 1.1,
        }}
        whileTap={{ scaleX: 0.95, scaleY: 0.95 }}
      >
        <svg
          width="28"
          height="32"
          viewBox="0 0 22 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            // d="M4 18L20 18"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            initial={false}
          />
          <motion.path
            // d="M4 12L20 12"
            d="M 2 9.423 L 20 9.423"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={false}
          />
          <motion.path
            // d="M4 6L20 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 4 2.5 L 17 16.346" },
            }}
            initial={false}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
