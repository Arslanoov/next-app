import * as React from "react"

import styles from "@/styles/modules/components/common/Hamburger.module.sass"

import { PageInterface } from "@/interfaces/page"
import Link from "next/link";
import {useState} from "react";

interface HamburgerProps {
  light?: boolean,
  linesCount?: number,
  pages: PageInterface[]
}

const Hamburger: React.FC<HamburgerProps> = ({ light = true, linesCount = 3, pages }: HamburgerProps) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggle = () => setIsOpened(!isOpened)

  const lines = []
  for (let i = 0; i < linesCount; i++) {
    lines.push(<span key={i} className={`${styles.line} ${light ? styles.light : ""}`}> </span>)
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onKeyUp={() => {}}
        onClick={toggle}
        className={`${styles.hamburger} ${light ? styles.light : ""}`}
      >
        {lines}
      </div>
      <div className={`${styles.menu} ${isOpened ? styles.opened : ""}`}>
        <ul className={styles.list}>
          {pages.map(page => <li key={page.link} className={styles.item}>
            <Link href={page.link}>
              <a className={`${styles.link} ${light ? styles.light : ""}`}>{page.name}</a>
            </Link>
          </li>)}
        </ul>
      </div>
    </>
  )
}

export default Hamburger
