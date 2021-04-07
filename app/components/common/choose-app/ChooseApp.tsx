import * as React from "react"

import styles from "@/styles/modules/components/common/ChooseApp.module.sass"

import { FeatureInterface } from "@/interfaces/feature"

import Feature from "@/components/base/feature/Feature"

interface ChooseAppProps {
  features: FeatureInterface[]
}

/* TODO: Add lines */

const ChooseApp: React.FC<ChooseAppProps> = ({ features }: ChooseAppProps) => {
  return (
    <div className="container">
      <div className={styles.section}>
        <h2 className={`${styles.title} ${styles.item}`}>Why you should choose our app</h2>
        <p className={`${styles.description} ${styles.item}`}>
          The rise of mobile devices transforms the way we consume information entirely
          and the world&apos;s most relevant channels such as Facebook.
        </p>
        <div className={`${styles.list} ${styles.item}`}>
          {features.map(feature =>
            <div key={feature.id} className={styles.feature}>
              <Feature feature={feature} direction="column" justify="center" align="center" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChooseApp
