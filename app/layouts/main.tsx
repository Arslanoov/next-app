import * as React from "react"
import Head from "next/head"

import Header from "../modules/Header"
import Footer from "../modules/Footer"

interface MainLayoutProps {
  children: React.ReactNode,
  title?: string
}

const MainLayout: React.FC = ({ children, title = "App" }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | App</title>
      </Head>
      <main>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
