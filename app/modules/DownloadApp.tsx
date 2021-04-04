import * as React from "react"
import Image from "next/image"

import styles from "@/styles/modules/DownloadApp.module.sass"

const DownloadApp: React.FC = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>Download our App now !</h2>
          <p className={styles.description}>
            The rise of mobile devices transforms the way we consume information entirely
            and the world`&apos;s most relevant channels such as Facebook.
          </p>
          <div className={styles.stores}>
            <div className={styles.store}>
              <Image src="/assets/images/download/app-store.jpg" layout="fill" />
            </div>
            <div className={styles.store}>
              <Image src="/assets/images/download/google-play.jpg" layout="fill" />
            </div>
          </div>
        </div>
        <img className={styles.image} src="/assets/images/download/app.png" alt="" />
      </div>
    </div>
  )
}

export default DownloadApp
