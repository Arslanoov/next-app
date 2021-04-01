import * as React from "react"

import { AppProps } from "next/app"

import "../styles/main.sass"

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
