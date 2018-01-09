const express = require('express')
const request = require('request')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.get('/proxy/:url', (req, res) => {
  var url = req.params.url
  if (!url) {
    return res.status(404).json({ message: 'Not Found' })    
  }
  var options = {
    uri: url,
    headers: {
      "Content-type": "application/json",
    },
    json: true
  }
  request.get(options, function(error, response, body){
    if (body) {
      res.json(body)  
    } else {
      res.status(500).json({ message: 'Internal Server Error' })    
    }
  })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
