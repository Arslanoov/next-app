import * as React from "react"

interface ReasonProps {
  background: string,
  color: string,
  title: string,
  description: string
}

const Reason: React.FC<ReasonProps> = ({ background, color, title, description }: ReasonProps) => {
  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <img src={background} alt=""/>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Reason
