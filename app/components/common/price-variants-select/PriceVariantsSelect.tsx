import * as React from "react"
import { useState } from "react"

import classes from "@/styles/modules/components/common/PriceVariantsSelect.module.sass"

import { PriceVariantInterface } from "@/interfaces/price"

interface PriceSelectProps {
  variants: PriceVariantInterface[]
}

const PriceVariantsSelect: React.FC<PriceSelectProps> = ({ variants }: PriceSelectProps) => {
  const [selectedVariant, selectVariant] = useState(1)

  return (
    <div className={classes.section}>
      <div className={classes.list}>
        {variants.map(variant => <div
          key={variant.id}
          tabIndex={variant.id}
          onClick={() => selectVariant(variant.id)}
          onKeyDown={() => selectVariant(variant.id)}
          className={`${classes.variant} ${selectedVariant === variant.id ? classes.selected : ""}`}
          role="button"
        >
          {variant.name}
        </div>)}
      </div>
    </div>
  )
}

export default PriceVariantsSelect
