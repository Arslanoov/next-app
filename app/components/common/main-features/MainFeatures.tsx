import * as React from "react"

import styles from "@/styles/modules/components/common/MainFeatures.module.sass"

import { FeatureInterface } from "@/interfaces/feature"

import Feature from "@/components/base/feature/Feature"

interface MainFeaturesProps {
  features: FeatureInterface[]
}

const MainFeatures: React.FC<MainFeaturesProps> = ({ features }: MainFeaturesProps) => {
  return (
    <div className="container">
      <div className={styles.features}>
        <img className={styles.phone} src="/assets/images/features/phone-overlay.png" alt="" />
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>Awesome apps features</h2>
            <p className={styles.description}>
              Increase productivity with a simple to-do app. app for
              managing your personal budgets.
            </p>
          </div>
          <div className={styles.list}>
            {features.map(feature =>
              <Feature key={feature.id} feature={feature} direction="row" justify="space-between" align="center" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFeatures
