import * as React from "react"
import Link from "next/link"

import styles from "@/styles/modules/Nav.module.sass"

import TryButton from "@/components/base/try-button/TryButton"

interface NavProps {
  light?: boolean,
  withoutButton?: boolean
}

const Nav: React.FC<NavProps> = ({ light = false, withoutButton = false }: NavProps) => {
  return (
    <nav>
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={`${styles.link} ${light ? styles.light : ""}`}>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/features">
              <a className={`${styles.link} ${light ? styles.light : ""}`}>Key Features</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/pricing">
              <a className={`${styles.link} ${light ? styles.light : ""}`}>Pricing</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/testiminial">
              <a className={`${styles.link} ${light ? styles.light : ""}`}>Testiminial</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/faq">
              <a className={`${styles.link} ${light ? styles.light : ""}`}>FAQ</a>
            </Link>
          </li>
        </ul>
        <div className={styles.hamburger}>
          <span className={`${styles.line} ${light ? styles.light : ""}`}> </span>
        </div>
        {withoutButton ? "" : <div className={styles.button}>
          <TryButton />
        </div>}
      </div>
    </nav>
  )
}

export default Nav
