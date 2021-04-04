import * as React from "react"
import Head from "next/head"

import styles from "@/styles/modules/layouts/Main.module.sass"

import Header from "@/modules/Header"
import Footer from "@/modules/Footer"
import DownloadApp from "@/modules/DownloadApp"

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
        <Header />
        {children}
        <DownloadApp />
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
