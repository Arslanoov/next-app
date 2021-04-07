import * as React from "react"

import { FeatureInterface } from "@/interfaces/feature"

interface ChooseAppProps {
  features: FeatureInterface[]
}

const ChooseApp: React.FC<ChooseAppProps> = ({ features }: ChooseAppProps) => {
  return (
    <div>
      <h2>Why you should choose our app</h2>
      <p>
        The rise of mobile devices transforms the way we consume information entirely
        and the world&apos;s most relevant channels such as Facebook.
      </p>
    </div>
  )
}

export default ChooseApp
