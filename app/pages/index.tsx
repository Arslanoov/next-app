import * as React from "react"

import MainLayout from "../layouts/main"

import classes from "../styles/Home.module.sass"

export default function Home() {
  return (
    <MainLayout title={'Home'}>
      <div>Home page</div>
      <div className={classes.example}>Some text</div>
    </MainLayout>
  )
}
