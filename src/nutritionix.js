const request = require('request')
const foodResource = require('./food-resource')

let naturalNutrients = (options, query, res) => {
  request.post(options, (err, response, body) => {
    if (err) {
      response.json(err)
      console.log('status', response.statusCode)
      console.log('error', err)
    } else {
      body = JSON.parse(body)
      if (body['message']) {
        res.json(body)
      } else {
        let setFoods = foodResource.foodsSetter(body['foods'])
        console.table(setFoods.foods)
        res.json({foods: setFoods.presenterFoods})
      }
    }
  })
}

module.exports = {
  naturalNutrients
}
