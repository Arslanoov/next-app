import * as React from "react"
import { useState } from "react"

import MainLayout from "@/layouts/main"

import PriceVariantsSelect from "@/components/common/price-variants-select/PriceVariantsSelect"

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

  return (
    <MainLayout title="Pricing">
      <div className="container">
        <div>
          <h2>Get awesome features, without extra charges</h2>
          <p>
            The rise of mobile devices transforms the way we consume information entirely
            and the world&apos;s most relevant channels such as Facebook.
          </p>
          <PriceVariantsSelect variants={variants} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Features
