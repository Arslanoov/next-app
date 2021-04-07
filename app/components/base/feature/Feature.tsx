import * as React from "react"

import styles from "@/styles/modules/components/base/Feature.module.sass"

import {
  FeatureInterface,
  direction as directionType,
  justify as justifyType,
  align as alignType
} from "@/interfaces/feature"

interface FeatureProps {
  feature: FeatureInterface,
  direction: directionType,
  justify: justifyType,
  align: alignType,
  basis?: string
}

const Feature: React.FC<FeatureProps> = ({ feature, direction, justify, align, basis }: FeatureProps) => {
  return (
    <div
      className={styles.feature} style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexBasis: basis
      }} key={feature.title}>
      <div className={styles.round} style={{ backgroundColor: feature.background }}>
        <img className={styles.icon} src={feature.icon} alt=""/>
      </div>
      <div>
        <h4 className={styles.feature} style={{ color: feature.color }}>{feature.title}</h4>
        <p className={styles.description}>{feature.description}</p>
      </div>
    </div>
  )
}

export default Feature
