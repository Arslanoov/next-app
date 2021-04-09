import * as React from "react"

import MainLayout from "@/layouts/main"

import Map from "@/components/common/map/Map"

const Features: React.FC = () => {
  return (
    <MainLayout title="Testiminial">
      <div className="container">
        <Map />
      </div>
    </MainLayout>
  )
}

export default Features
