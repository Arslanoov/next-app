import * as React from "react"
import { useState } from "react"
import Head from "next/head"

import styles from "@/styles/modules/layouts/Main.module.sass"

import Header from "@/modules/Header"
import Footer from "@/modules/Footer"
import DownloadApp from "@/modules/DownloadApp"
import TrustedCompanies from "@/modules/TrustedCompanies"

interface MainLayoutProps {
  children: React.ReactNode,
  title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = "App" }: MainLayoutProps) => {
  const [companies, setCompanies] = useState([
    { url: "/assets/images/companies/1.png" },
    { url: "/assets/images/companies/2.png" },
    { url: "/assets/images/companies/3.png" },
    { url: "/assets/images/companies/4.png" },
    { url: "/assets/images/companies/5.png" }
  ])

  return (
    <>
      <Head>
        <title>{title} | App</title>
      </Head>
      <main>
        <Header />
        {children}
        <TrustedCompanies companies={companies} />
        <DownloadApp />
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
