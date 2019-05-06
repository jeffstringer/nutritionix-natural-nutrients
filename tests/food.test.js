const Food = require('../models/food')

let foodData = { food_name: 'bananas',
  brand_name: null,
  serving_qty: 2,
  serving_unit: 'medium (7" to 7-7/8" long)',
  serving_weight_grams: 236,
  nf_calories: 210.04,
  nf_total_fat: 0.78,
  nf_saturated_fat: 0.26,
  nf_cholesterol: 0,
  nf_sodium: 2.36,
  nf_total_carbohydrate: 53.9,
  nf_dietary_fiber: 6.14,
  nf_sugars: 28.86,
  nf_protein: 2.57,
  nf_potassium: 844.88
}

test('it is initialized by food data', () => {
  let food = new Food(foodData)
  expect(food.qty).toEqual(2)
  expect(food.calories).toEqual(210.04)
  expect(food.protein).toEqual(2.57)
})
