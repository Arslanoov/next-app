import * as React from "react"

import styles from "@/styles/modules/components/common/AdditionalFeatures.module.sass"

import { FeatureInterface } from "@/interfaces/feature"

import Feature from "@/components/base/feature/Feature"

interface AdditionalFeaturesProps {
  features: FeatureInterface[]
}

const AdditionalFeatures: React.FC<AdditionalFeaturesProps> = ({ features }: AdditionalFeaturesProps) => {
  return (
    <div className="container">
      <div className={styles.features}>
        <div className={styles.info}>
          <div className={styles.title}>
            Smart jackpots that
            you may love this
            anytime & anywhere
          </div>
          <div className={styles.line}> </div>
          <div className={styles.description}>
            The rise of mobile devices transforms the way we
            consume information entirely and the world&apos;s most
            relevant channels such as Facebook.
          </div>
        </div>
        <div className={styles.list}>
          {features.map(feature =>
            <Feature
              key={feature.id}
              feature={feature}
              direction="column"
              justify="center"
              align="flex-start"
              basis="25%"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default AdditionalFeatures
