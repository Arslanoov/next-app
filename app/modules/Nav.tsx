import * as React from "react"

import styles from "../styles/modules/Nav.module.sass"

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Key Features</li>
        <li className={styles.item}>Pricing</li>
        <li className={styles.item}>Testiminial</li>
        <li className={styles.item}>FAQ</li>
      </ul>
      <div className={styles.button}>
        Try for free
      </div>
    </nav>
  )
}

export default Nav
