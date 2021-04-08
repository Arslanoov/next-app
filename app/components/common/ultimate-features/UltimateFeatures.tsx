import * as React from "react"

import styles from "@/styles/modules/components/common/UltimateFeatures.module.sass"

import { FeatureInterface } from "@/interfaces/feature"

import Feature from "@/components/base/feature/Feature"
import Button from "@/components/base/button/Button";

interface UltimateFeaturesProps {
  features: FeatureInterface[]
}

const UltimateFeatures: React.FC<UltimateFeaturesProps> = ({ features }: UltimateFeaturesProps) => {
  return (
    <div className="container">
      <div className={styles.features}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>Ultimate features that we built</h2>
            <p className={styles.description}>
              The rise of mobile devices transforms the way we
              consume information entirely.
            </p>
          </div>
          <div className={styles.list}>
            {features.map(feature =>
              <Feature
                key={feature.id}
                feature={feature}
                direction="column"
                justify="space-between"
                align="flex-start"
              />
            )}
          </div>
          <div className={styles.button}>
            <Button content="See all" padding="2rem 6rem" />
          </div>
        </div>
        <div className={styles.phones}>
          <img className={styles.background} src="/assets/images/ultimate/phone-background.png" alt="" />
          <img className={styles.left} src="/assets/images/ultimate/phone-left.png" alt="" />
          <img className={styles.right} src="/assets/images/ultimate/phone-right.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default UltimateFeatures
