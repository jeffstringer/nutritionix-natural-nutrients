const program = require('yargs').argv
const query = require('./query')

if (argv.query) {
  query.apiCall(argv.query)
} else {
  console.log('Please supply a query')
}
