import * as React from "react"

import styles from "@/styles/modules/components/common/Integration.module.sass"
import Button from "@/components/base/button/Button"

const Integration: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.integration}>
        <img className={styles.image} src="/assets/images/integration.png" alt=""/>
        <div className={styles.content}>
          <h2 className={styles.title}>Designed & built by the latest code integration</h2>
          <p className={styles.description}>
            The rise of mobile devices transforms the way we
            consume information entirely and the &apos; most
            relevant channels such as Facebook.
          </p>
          <Button content="Learn more" />
        </div>
      </div>
    </div>
  )
}

export default Integration
