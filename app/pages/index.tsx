import * as React from "react"
import Image from "next/image"

import MainLayout from "@/layouts/main"

import styles from "@/styles/modules/pages/Home.module.sass"

import TryButton from "@/components/base/try-button/TryButton"
import Badge from "@/components/base/badge/Badge"

const Home: React.FC = () => {
  return (
    <MainLayout title="Home">
      <div className={styles.section}>
        <div className={`${styles.content} container`}>
          <div className={styles.info}>
            <div className={styles.item}>
              <Badge content="#1 Editiors Choice App of 2020" />
            </div>
            <h1 className={`${styles.item} ${styles.title}`}>Best app for your modern lifestyle</h1>
            <p className={`${styles.item} ${styles.description}`}>
              Increase productivity with a simple to-do app. app for
              managing your personal budgets.
            </p>
            <div className={`${styles.item} ${styles.demo}`}>
              <div className={styles.button}>
                <TryButton />
              </div>
              <p>Watch demo video</p>
            </div>
          </div>
          <div className={styles.phone}>
            <Image src="/assets/images/welcome/phone.png" layout="fill" alt="" />
          </div>
        </div>
        <div className={styles.city}>
          <Image src="/assets/images/welcome/city.png" layout="fill" alt="" />
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
