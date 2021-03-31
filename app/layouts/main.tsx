import * as React from "react"
import Head from "next/head"

interface MainLayoutProps {
  children: React.ReactNode,
  title?: string
}

export default function MainLayout({ children, title = "App" }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | App</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}
