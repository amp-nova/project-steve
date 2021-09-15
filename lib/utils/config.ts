const nconf = require('nconf')
const interestInterval: number = process.env.interest_interval ? parseInt(process.env.interest_interval) : 60
nconf.argv().env().defaults({
    interestInterval: interestInterval * 1000
})
export default nconf