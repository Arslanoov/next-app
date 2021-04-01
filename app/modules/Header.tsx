import * as React from "react"

import Nav from "./Nav"

import styles from "../styles/modules/Header.module.sass"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.part}>App</span>
        <span className={styles.part}>Lab</span>
      </div>
      <Nav />
    </header>
  )
}

export default Header
