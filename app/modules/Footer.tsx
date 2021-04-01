import * as React from "react"
import { useState } from "react"

import styles from "@/styles/modules/Footer.module.sass"

import Logo from "@/components/base/logo/Logo"
import Nav from "@/modules/Nav"
import SocialNetworks from "@/components/common/social-networks/SocialNetworks"

const Footer: React.FC = () => {
  const [networks, setNetworks] = useState([
    {
      icon: "facebook-f",
      url: "https://facebook.com"
    },
    {
      icon: "twitter",
      url: "https://twitter.com"
    },
    {
      icon: "slack-hash",
      url: "https://slack.com"
    },
    {
      icon: "github",
      url: "https://github.com"
    }
  ])

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.item}>
            <Logo light />
          </div>
          <div className={styles.item}>
            <Nav withoutButton light />
          </div>
          <div className={styles.item}>
            <SocialNetworks networks={networks} />
          </div>
          <div className={styles.item}>
            <p className={styles.copyright}>Copyright© Arifur Rahman Tushar 2019. All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
