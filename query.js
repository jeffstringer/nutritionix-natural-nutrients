const Food = require('./models/food')
const request = require('request')

let apiCall = (query) => {
  let options = {
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    form: {query: query, locale: 'en_US'},
    headers: {
      'x-app-id': process.env.NUTRITIONIX_APP_ID,
      'x-app-key': process.env.NUTRITIONIX_APP_KEY,
      'x-remote-user-id': '0'
    }
  }

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      let foodData = JSON.parse(response.body)['foods']
      foods = []
      foodData.forEach((foodDatum) => {
        let food = new Food(foodDatum)
        foods.push(food)
      })
      console.table(foods)
    } else {
      console.log('status', response.statusCode)
      console.log('error', error)
    }
  }

  request.post(options, callback)
}

module.exports = {
  apiCall
}
