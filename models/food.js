module.exports = class Food {
  constructor (foodData) {
    this.name = foodData.food_name,
    this.qty = foodData.serving_qty,
    this.servingUnit = foodData.serving_unit,
    this.servingWeightGrams = foodData.serving_weight_grams,
    this.calories = foodData.nf_calories
    this.totalFat = foodData.nf_total_fat,
    this.saturatedFat = foodData.nf_saturated_fat,
    this.cholesterol = foodData.nf_cholesterol,
    this.sodium = foodData.nf_sodium,
    this.totalCarbohydrate = foodData.nf_total_carbohydrate,
    this.dietaryFiber = foodData.nf_dietary_fiber,
    this.sugars = foodData.nf_sugars,
    this.protein = foodData.nf_protein,
    this.potassium = foodData.nf_potassium
  }
}
