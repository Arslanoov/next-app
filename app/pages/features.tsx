import * as React from "react"
import { useState } from "react"

import MainLayout from "@/layouts/main"

import MainFeatures from "@/components/common/main-features/MainFeatures";

const Features: React.FC = () => {
  const [features, setFeatures] = useState([
    {
      icon: "/assets/images/features/icons/1.png",
      background: "#ffecef",
      color: "#f55767",
      title: "Fast Performance",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      icon: "/assets/images/features/icons/2.png",
      background: "#f4f4ff",
      color: "#2563ff",
      title: "Prototyping",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      icon: "/assets/images/features/icons/3.png",
      background: "#e4ffee",
      color: "#40975f",
      title: "Fast Performance",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    }
  ])

  return (
    <MainLayout title="Home">
      <MainFeatures features={features} />
      <div className="additional-features"> </div>
    </MainLayout>
  )
}

export default Features
