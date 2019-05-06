const request = require('request')
const argv = require('yargs').argv
const Food = require('./models/food')

if (argv.query) {
  const options = {
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    form: {query: argv.query, locale: 'en_US'},
    headers: {
      'x-app-id': process.env.NUTRITIONIX_APP_ID,
      'x-app-key': process.env.NUTRITIONIX_APP_KEY,
      'x-remote-user-id': '0'
    }
  }

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      let foodData = JSON.parse(response.body)['foods']
      foodData.forEach((foodDatum) => {
        let food = new Food(foodDatum)
        console.log(food)
      })
    } else {
      console.log('status', response.statusCode)
      console.log('error', error)
    }
  }

  request.post(options, callback)
} else {
  console.log('Please supply a query')
}
