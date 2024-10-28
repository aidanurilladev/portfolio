"use client";
import React, { useState } from "react";
// import Link from "next/link";
import styles from "./Header.module.scss";
import { Link } from "react-scroll";

export const links = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Experience", hash: "experience" },
  { name: "Contact", hash: "contact" },
  { name: "Projects", hash: "projects" },
];
export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.scroll}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.logo}>
              <h1>AIDA</h1>
            </div>
            <div className={styles.nav}>
              <nav className={styles.navigation}>
                <ol>
                  {links.map((el, idx) => (
                    <li key={idx}>
                      <Link
                        activeClass="active"
                        to={el.hash}
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className={styles.resume}>
                <button>RESUME</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
