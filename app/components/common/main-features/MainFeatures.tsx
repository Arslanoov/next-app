import * as React from "react"

import styles from "@/styles/modules/components/common/MainFeatures.module.sass"

import { FeatureInterface } from "@/interfaces/feature"

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
            {features.map(feature => (
              <div className={styles.item} key={feature.title}>
                <div className={styles.round} style={{ backgroundColor: feature.background }}>
                  <img className={styles.icon} src={feature.icon} alt=""/>
                </div>
                <div>
                  <h4 className={styles.feature} style={{ color: feature.color }}>{feature.title}</h4>
                  <p className={styles.description}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFeatures
