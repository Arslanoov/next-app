import * as React from "react"

import MainLayout from "../layouts/main"

import classes from "../styles/Home.module.sass"

const Home: React.FC = () => {
  return (
    <MainLayout title="Home">
      <div>Home page</div>
      <div className={classes.example}>Some text</div>
    </MainLayout>
  )
}

export default Home
