import * as React from "react"

import MainLayout from "../layouts/main"

import classes from "../styles/Home.module.sass"

const Home: React.FC = () => {
  return (
    <MainLayout title="Home">
      <h1>Home page</h1>
      <div className={classes.example}>Some text</div>
    </MainLayout>
  )
}

export default Home
