import * as React from "react"

import styles from "@/styles/modules/Header.module.sass"

import Logo from "@/components/base/Logo"
import Nav from "@/modules/Nav"

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
