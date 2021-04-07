import * as React from "react"
import { useState } from "react"

import MainLayout from "@/layouts/main"

import MainFeatures from "@/components/common/main-features/MainFeatures"
import AdditionalFeatures from "@/components/common/additional-features/AdditionalFeatures"
import Integration from "@/components/common/integration/Integration"
import ChooseApp from "@/components/common/choose-app/ChooseApp"

const Features: React.FC = () => {
  const [mainFeatures, setMainFeatures] = useState([
    {
      id: 1,
      icon: "/assets/images/features/icons/1.png",
      background: "#ffecef",
      color: "#f55767",
      title: "Fast Performance",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 2,
      icon: "/assets/images/features/icons/2.png",
      background: "#f4f4ff",
      color: "#2563ff",
      title: "Prototyping",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 3,
      icon: "/assets/images/features/icons/3.png",
      background: "#e4ffee",
      color: "#40975f",
      title: "Vector Editing",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    }
  ])

  const [additionalFeatures, setAdditionalFeatures] = useState([
    {
      id: 4,
      icon: "/assets/images/features/icons/4.png",
      background: "#ffecef",
      color: "#f55767",
      title: "Automatic Payouts",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 5,
      icon: "/assets/images/features/icons/5.png",
      background: "#f4f4ff",
      color: "#2563ff",
      title: "Network Effect",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 6,
      icon: "/assets/images/features/icons/6.png",
      background: "#e4ffee",
      color: "#40975f",
      title: "Bigger Rewards Method",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    }
  ])

  return (
    <MainLayout title="Home">
      <MainFeatures features={mainFeatures} />
      <AdditionalFeatures features={additionalFeatures} />
      <Integration />
      <ChooseApp />
    </MainLayout>
  )
}

export default Features
