import * as React from "react"
import Link from "next/link"

import TryButton from "@/components/base/try-button/TryButton"

import styles from "@/styles/modules/Nav.module.sass"

interface NavProps {
  light?: boolean,
  withoutButton?: boolean
}

const Nav: React.FC<NavProps> = ({ light = false, withoutButton = false }: NavProps) => {
  return (
    <nav>
      <div className={styles.nav}>
        <ul className={`${styles.list} ${light ? styles.light : ""}`}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/features">
              <a className={styles.link}>Key Features</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/pricing">
              <a className={styles.link}>Pricing</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/testiminial">
              <a className={styles.link}>Testiminial</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/faq">
              <a className={styles.link}>FAQ</a>
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
