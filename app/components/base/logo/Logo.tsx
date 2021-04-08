import * as React from "react"
import Link from "next/link"

import styles from "@/styles/modules/components/base/Logo.module.sass"

interface LogoProps {
  light?: boolean
}

const Logo: React.FC<LogoProps> = ({ light = false }: LogoProps) => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <span className={styles.part}>App</span>
        <span className={`${styles.part} ${light ? styles.light : ""}`}>Lab</span>
      </a>
    </Link>
  )
}

export default Logo
