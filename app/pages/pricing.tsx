import * as React from "react"
import { useState } from "react"

import classes from "@/styles/modules/pages/Pricing.module.sass"

import MainLayout from "@/layouts/main"

import PriceVariantsSelect from "@/components/common/price-variants-select/PriceVariantsSelect"
import Price from "@/components/common/price/Price"

const Features: React.FC = () => {
  const [variants, setVariants] = useState([
    {
      id: 1,
      name: "Montly"
    },
    {
      id: 2,
      name: "Annually"
    }
  ])

  const [prices, setPrices] = useState([
    {
      id: 1,
      price: 0,
      period: "month",
      name: "Business Class",
      description: "For small teams or office",
      features: [
        "Drag & Drop Builder",
        "1,000's of Templates" ,
        "Blog Support Tools",
        "eCommerce Store",
      ],
      action: "Start free trail"
    },
    {
      id: 2,
      price: 90,
      period: "month",
      name: "Pro Master",
      description: "For Best opportunities",
      features: [
        "Drag & Drop Builder",
        "1,000's of Templates" ,
        "Blog Support Tools",
        "eCommerce Store",
      ],
      action: "Subscribe Now",
      trial: "Or Start 14 days trail"
    }
  ])

  return (
    <MainLayout title="Pricing">
      <div className="container">
        <div className={classes.section}>
          <h2 className={classes.title}>Get awesome features, without extra charges</h2>
          <p className={classes.description}>
            The rise of mobile devices transforms the way we consume information entirely
            and the world&apos;s most relevant channels such as Facebook.
          </p>
          <PriceVariantsSelect variants={variants} />
          <div className={classes.prices}>
            {prices.map(price => <div key={price.id} className={classes.item}>
              <Price price={price} />
            </div>)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Features
