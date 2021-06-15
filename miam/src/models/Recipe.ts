export default class Recipe {
  name: string
  notation: number
  image: number
  duration: number
  totalNotations: number
  id:number

  constructor(name: string, id:number ,notation: number, totalNotations: number, duration: number, image: number) {
    this.name = name
    this.id = id
    this.notation = notation
    this.totalNotations = totalNotations
    this.duration = duration
    this.image = image
  }
};

// export { Recipe };
