import * as React from "react"
import Head from "next/head"

import styles from "@/styles/modules/layouts/Main.module.sass"

import Header from "@/modules/Header"
import Footer from "@/modules/Footer"

interface MainLayoutProps {
  children: React.ReactNode,
  title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = "App" }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | App</title>
      </Head>
      <main>
        <div className={styles.page}>
          <Header />
          <div className="container">
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
