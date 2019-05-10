const request = require('request')
const Food = require('../../models/food')
const nutritionix = require('../../src/nutritionix')

jest.mock('request')

test('it should call the natural-nutrients nutritionix api endpoint', () => {
  const getSpy = jest.spyOn(request, 'post')
  nutritionix.naturalNutrients({}, 'foo', {})
  expect(getSpy).toBeCalled()
})
