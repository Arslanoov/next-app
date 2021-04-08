import * as React from "react"

import classes from "@/styles/modules/components/common/Price.module.sass"

import { PriceInterface } from "@/interfaces/price"

import Button from "@/components/base/button/Button"

interface PriceProps {
  price: PriceInterface
}

const Price: React.FC<PriceProps> = ({ price }: PriceProps) => {
  return (
    <div className={classes.price}>
      <div className={classes.face}>
        <div className={classes.title}>
          <span className={classes.value}>
            ${price.price}
          </span>
          <span className={classes.period}>
            / {price.period}
          </span>
        </div>
        <h4 className={classes.name}>{price.name}</h4>
        <p className={classes.description}>{price.description}</p>
      </div>
      <div className={classes.body}>
        <div className={classes.features}>
          {price.features.map(feature => <div key={feature} className={classes.feature}>{feature}</div>)}
        </div>
        <div className={classes.action}>
          <Button content={price.action} />
        </div>
        {price.trial ? <div className={classes.trial}>
          {price.trial}
        </div> : ""}
      </div>
    </div>
  )
}

export default Price
