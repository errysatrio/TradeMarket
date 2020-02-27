const https = require('https')

const options = {
  hostname: 'financialmodelingprep.com',
  port: 443,
  path: '/api/v3/stock/actives',
  method: 'GET'
}

const req = https.request(options, (res) => {
  res.on('data', (d) => {
    let x = process.stdout.write(d)
    console.log('=======================================',JSON.parse(d.toString('utf8')))
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()