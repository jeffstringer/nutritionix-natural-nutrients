'use strict'

const express = require("express")
const request = require('request')
const Food = require('./models/food')
const port = 3000
const app = express();

app.listen(port, () => console.log(`\n Nutritionix Natural Nutrients app listening on port ${port} :) \n`))

/*
> let description = 'for breakfast i had 1/2 cup oatmeal 1/2 cup yogurt 1/2 cup milk 2 tablespoons nutella 1 tsp cocoa 2 tsp almond butter 2 bananas 2 cups of coffee'
> let encodedDescrtiption = encodeURIComponent(description)
$ curl -X POST 'http://localhost:3000/getdata?description=for%20breakfast%20i%20had%201%2F2%20cup%20oatmeal%201%2F2%20cup%20yogurt%2poons%20nutella%201%20tsp%20cocoa%202%20tsp%20almond%20butter%202%20bananas%202%20cups%20of%20coffee'
*/

app.post("/getdata", (req, res, next) => {
  let query = req.query.description
  if (query != undefined) {
    let options = {
      url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
      form: {query: query, locale: 'en_US'},
      headers: {
        'x-app-id': process.env.NUTRITIONIX_APP_ID,
        'x-app-key': process.env.NUTRITIONIX_APP_KEY,
        'x-remote-user-id': '0'
      }
    }

    request.post(options, (err, response, body) => {
      if (err) {
        response.json(err)
        console.log('status', response.statusCode)
        console.log('error', err)
      } else {
        let foodData = JSON.parse(body)['foods']
        let foods = []
        foodData.forEach((foodDatum) => {
          let food = new Food(foodDatum)
          foods.push(food)
        })
        console.table(foods)
        res.json(foods)
      }
    })
  } else {
    res.status(400).json({error: '400: Malformed Query'})
  }
})
