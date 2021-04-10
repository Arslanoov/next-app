import * as React from "react"
import { useState } from "react"
import Link from "next/link"

import styles from "@/styles/modules/Nav.module.sass"

import Button from "@/components/base/button/Button"
import Hamburger from "@/components/common/hamburger/Hamburger"

interface NavProps {
  light?: boolean,
  withoutButton?: boolean
}

const Nav: React.FC<NavProps> = ({ light = false, withoutButton = false }: NavProps) => {
  const [pages, setPages] = useState([
    {
      link: "/",
      name: "Home"
    },
    {
      link: "/features",
      name: "Key Features"
    },
    {
      link: "/pricing",
      name: "Pricing"
    },
    {
      link: "/testiminial",
      name: "Testiminial"
    },
    {
      link: "/faq",
      name: "FAQ"
    }
  ])

  return (
    <nav>
      <div className={styles.nav}>
        <ul className={styles.list}>
          {pages.map(page => <li key={page.link} className={styles.item}>
            <Link href={page.link}>
              <a className={`${styles.link} ${light ? styles.light : ""}`}>{page.name}</a>
            </Link>
          </li>)}
        </ul>
        <Hamburger light={light} pages={pages} />
        {withoutButton ? "" : <div className={styles.button}>
          <Button content="Try for free" />
        </div>}
      </div>
    </nav>
  )
}

export default Nav
