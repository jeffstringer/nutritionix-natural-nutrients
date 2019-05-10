const Food = require('../models/food')

const Presenter = require('yayson')().Presenter

class FoodsPresenter extends Presenter {}
FoodsPresenter.prototype.type = 'food'

FoodsPresenter.prototype.attributes = function() {
  return Presenter.prototype.attributes.apply(this, arguments)
}

let foodsSetter = (foodData) => {
  let preparedFoods = {
    foods: [],
    presenterFoods: []
  }
  foodData.forEach((foodDatum) => {
    let food = new Food(foodDatum)
    preparedFoods.foods.push(food)
    preparedFoods.presenterFoods.push(food)
  })
  return preparedFoods
}

module.exports = {
  foodsSetter
}
