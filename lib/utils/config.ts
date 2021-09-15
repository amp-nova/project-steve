const nconf = require('nconf')
const interestInterval: number = process.env.interest_interval ? parseInt(process.env.interest_interval) : 6

// the interest interval is expressed in seconds, we need milliseconds (*1000)
nconf.argv().env().defaults({ interestInterval: interestInterval * 1000 })

export default nconf