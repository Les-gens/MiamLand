export class Recipe {
  name: string
  notation: number
  image: number
  duration: number
  totalNotations: number

  constructor(
    name: string,
    notation: number,
    totalNotations: number,
    duration: number,
    image: number,
  ) {
    this.name = name
    this.notation = notation
    this.totalNotations = totalNotations
    this.duration = duration
    this.image = image
  }
}
