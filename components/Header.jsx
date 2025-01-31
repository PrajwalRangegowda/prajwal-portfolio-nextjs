"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoHeight, setLogoHeight] = useState(35);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
        setLogoHeight(20);
      } else {
        setScrolled(false);
        setLogoHeight(35);
      }praj
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolled ? styles.scrolled : styles.header}`}>
      
        <motion.div className={styles.siteLogo}
        initial={{ opacity: 0 }} // Start with opacity 0 (hidden)
        animate={{ opacity: 1 }} // Animate to opacity 1 (visible)
        transition={{ duration: 1 }} // Duration of the fade-in
        >
          <Link href={"/"}>
            <Image
              className={`${styles.logo} ${styles.logoDark}`}
              src="/prajwal-logo-dark.png"
              alt="Prajwal logomark"
              width={logoHeight}
              height={logoHeight}
            />
            <Image
              className={`${styles.logo} ${styles.logoLight}`}
              src="/prajwal-logo-light.png"
              alt="Prajwal logomark"
              width={logoHeight}
              height={logoHeight}
            />
          </Link>
          <Link
            className={`${
              scrolled ? styles.sitetitleScrolled : styles.sitetitle
            }`}
            href={"/"}
          >
            Prajwal Rangegowda
          </Link>
        </motion.div>
      
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="https://blog.prajwalrangegowda.com">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
