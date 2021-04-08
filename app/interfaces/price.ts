export interface PriceVariantInterface {
  id: number,
  name: string
}

export interface PriceInterface {
  id: number,
  price: number,
  period: string,
  name: string,
  description: string,
  features: string[],
  action: string,
  trial?: string
}
