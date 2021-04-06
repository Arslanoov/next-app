import * as React from "react"

import styles from "@/styles/modules/components/base/TryButton.module.sass"

interface ButtonProps {
  content: string
}

const BaseButton: React.FC<ButtonProps> = ({ content }: ButtonProps) => {
  return (
    <div className={styles.button}>
      {content}
    </div>
  )
}

export default BaseButton
