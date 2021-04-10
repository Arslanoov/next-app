export interface ReviewInterface {
  id: number,
  title: string,
  stars: number,
  content: string,
  author: {
    avatar: string,
    name: string,
    about: string
  }
}
