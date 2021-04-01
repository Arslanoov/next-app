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
        <div className={styles.content}>
          <Badge content="#1 Editiors Choice App of 2020" />
          <h1 className={styles.title}>Best app for your modern lifestyle</h1>
          <p className={styles.description}>
            Increase productivity with a simple to-do app. app for
            managing your personal budgets.
          </p>
          <div className={styles.demo}>
            <TryButton />
            <p>Watch demo video</p>
          </div>
        </div>
        <Image src="/assets/images/welcome/phone.jpg" width="200px" height="200px" alt="" />
      </div>
      <Image src="/assets/images/welcome/city.jpg" width="100%" height="20vh" alt="" />
    </MainLayout>
  )
}

export default Home
