import * as React from "react"

import styles from "@/styles/modules/components/base/Button.module.sass"

interface ButtonProps {
  content: string,
  padding?: string
}

const BaseButton: React.FC<ButtonProps> = ({ content, padding = "1.6rem 3.2rem" }: ButtonProps) => {
  return (
    <div className={styles.button} style={{
      padding
    }}>
      {content}
    </div>
  )
}

export default BaseButton
