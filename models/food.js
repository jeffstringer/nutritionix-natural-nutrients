module.exports = class Food {
  constructor(foodData) {
    this.food_name = foodData.food_name,
    this.qty = foodData.serving_qty,
    this.serving_unit = foodData.serving_unit,
    this.serving_weight_grams = foodData.serving_weight_grams,
    this.calories = foodData.nf_calories
    this.total_fat = foodData.nf_total_fat,
    this.saturated_fat = foodData.nf_saturated_fat,
    this.cholesterol = foodData.nf_cholesterol,
    this.sodium = foodData.nf_sodium,
    this.total_carbohydrate = foodData.nf_total_carbohydrate,
    this.dietary_fiber = foodData.nf_dietary_fiber,
    this.sugars = foodData.nf_sugars,
    this.protein = foodData.nf_protein,
    this.potassium = foodData.nf_potassium
  }
}
