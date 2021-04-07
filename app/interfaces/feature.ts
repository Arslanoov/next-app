export interface FeatureInterface {
  id: number | string,
  icon: string,
  background: string,
  color: string,
  title: string,
  description: string
}

export type direction = "row" | "column"
export type justify = "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
export type align = "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
