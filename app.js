const program = require('commander')
const query = require('./query')

program
  .option('-q, --query <required>', 'query description of foods')
  .parse(process.argv)

if (program.query) {
  query.apiCall(program.query)
} else {
  console.log('Please supply a query')
}
