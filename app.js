const request = require('request')
const query = '1 chicken and 1 biscuit'

const options = {
  url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  form: {query: '1 chicken and 1 biscuit', locale: 'en_US'},
  headers: {
    'x-app-id': process.env.NUTRITIONIX_APP_ID,
    'x-app-key': process.env.NUTRITIONIX_APP_KEY,
    'x-remote-user-id': '0'
  }
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(response.body)
    console.log('info', info['foods'])
  } else {
    console.log('status', response.statusCode)
    console.log('error', error)
  }
}

request.post(options, callback)
