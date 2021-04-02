import * as React from "react"
import Image from "next/image"

import styles from "@/styles/modules/components/base/Badge.module.sass"

interface BadgeProps {
  icon?: string,
  content: string
}

const Badge: React.FC<BadgeProps> = ({ content }: BadgeProps) => {
  return (
    <div className={styles.badge}>
      <div className={styles.rounded}>
        <Image className={styles.icon} src="/assets/images/welcome/icons/check.png" width="45px" height="40px" />
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  )
}

export default Badge
