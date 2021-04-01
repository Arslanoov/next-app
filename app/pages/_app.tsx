import * as React from "react"

import { AppProps } from "next/app"

import "@/styles/main.sass"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default App
