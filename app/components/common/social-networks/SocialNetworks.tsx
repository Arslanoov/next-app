import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "@/styles/modules/components/common/SocialNetworks.module.sass"

import { NetworkInterface } from "@/interfaces/social/network"

interface SocialNetworksProps {
  networks: NetworkInterface[]
}

const SocialNetworks: React.FC<SocialNetworksProps> = ({ networks }: SocialNetworksProps) => {
  return (
    <div className={styles.networks}>
      {networks.map(network => (
        <a
          className={styles.network}
          key={network.url}
          href={network.url}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", network.icon]} />
        </a>
      ))}
    </div>
  )
}

export default SocialNetworks
