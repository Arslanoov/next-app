import * as React from "react"

import styles from "@/styles/modules/Header.module.sass"

import Logo from "@/components/base/logo/Logo"
import Nav from "@/modules/Nav"

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <header className={styles.header}>
          <Logo />
          <Nav />
        </header>
      </div>
    </div>
  )
}

export default Header
