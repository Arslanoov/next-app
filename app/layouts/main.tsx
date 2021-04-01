import * as React from "react"
import Head from "next/head"

import Header from "../modules/Header"

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
        <div className="container">
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}

export default MainLayout
