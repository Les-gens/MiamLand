class Ingredient {
  name: string
  image: number
  weight: number
  measure: string

  constructor(name: string, image: number, weight: number, measure: string) {
    this.name = name
    this.image = image
    this.weight = weight
    this.measure = measure
  }
};

export { Ingredient };
