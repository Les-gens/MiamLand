class Ingredient {
  name: string
  image: number
  weight: number
  measure: string
  ingredientID: number

  constructor(name: string, image: number, weight: number, measure: string, ingredientID: number) {
    this.name = name
    this.image = image
    this.weight = weight
    this.measure = measure
    this.ingredientID = ingredientID

  }
};

export { Ingredient };
