import * as React from "react"

import Nav from "./Nav"

/* TODO: Change to absolute path */

import styles from "../styles/modules/Header.module.sass"
import Logo from "../components/base/Logo"

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <Logo />
        <Nav />
      </header>
    </div>
  )
}

export default Header
