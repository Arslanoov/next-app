import * as React from "react"
import { useState } from "react"

import MainLayout from "@/layouts/main"

import MainFeatures from "@/components/common/main-features/MainFeatures"
import AdditionalFeatures from "@/components/common/additional-features/AdditionalFeatures"
import Integration from "@/components/common/integration/Integration"
import ChooseApp from "@/components/common/choose-app/ChooseApp"
import UltimateFeatures from "@/components/common/ultimate-features/UltimateFeatures";

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

  const [chooseAppFeatures, setChooseAppFeatures] = useState([
    {
      id: 7,
      icon: "/assets/images/reasons/icons/1.png",
      background: "#ffecef",
      color: "#000",
      title: "Automatic Payouts",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 8,
      icon: "/assets/images/reasons/icons/2.png",
      background: "#eaf9ff",
      color: "#000",
      title: "Network Effect",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 9,
      icon: "/assets/images/reasons/icons/3.png",
      background: "#fff6d3",
      color: "#000",
      title: "Bigger Rewards Method",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 10,
      icon: "/assets/images/reasons/icons/4.png",
      background: "#e4ffee",
      color: "#000",
      title: "Bigger Rewards Method",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 11,
      icon: "/assets/images/reasons/icons/5.png",
      background: "#f4f4ff",
      color: "#000",
      title: "Bigger Rewards Method",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 12,
      icon: "/assets/images/reasons/icons/6.png",
      background: "#fdeee4",
      color: "#000",
      title: "Bigger Rewards Method",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    }
  ])

  const [ultimateFeatures, setUltimateFeatures] = useState([
    {
      id: 13,
      icon: "/assets/images/ultimate/icons/1.png",
      background: "#ffecef",
      color: "#000",
      title: "App Development",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 14,
      icon: "/assets/images/ultimate/icons/2.png",
      background: "#e4ffee",
      color: "#000",
      title: "UX Planing",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 15,
      icon: "/assets/images/ultimate/icons/3.png",
      background: "#fff6d3",
      color: "#000",
      title: "Cloud Storage",
      description: "Get your blood tests delivered at\n" +
        "home collect a sample from the\n" +
        "news your blood tests."
    },
    {
      id: 16,
      icon: "/assets/images/ultimate/icons/4.png",
      background: "#f4f4ff",
      color: "#000",
      title: "Customer support",
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
      <ChooseApp features={chooseAppFeatures} />
      <UltimateFeatures features={ultimateFeatures} />
    </MainLayout>
  )
}

export default Features
