import * as React from "react"

import styles from "../styles/modules/Nav.module.sass"

interface NavProps {
  light?: boolean,
  withoutButton?: boolean
}

const Nav: React.FC<NavProps> = ({ light = false, withoutButton = false }: NavProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.list} ${light ? styles.light : ""}`}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Key Features</li>
        <li className={styles.item}>Pricing</li>
        <li className={styles.item}>Testiminial</li>
        <li className={styles.item}>FAQ</li>
      </ul>
      {withoutButton ? "" : (
        <div className={styles.button}>
          Try for free
        </div>
      )}
    </nav>
  )
}

export default Nav
