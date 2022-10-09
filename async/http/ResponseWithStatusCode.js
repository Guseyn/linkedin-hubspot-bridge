'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is response
class ResponseWithStatusCode extends AsyncObject {
  constructor (response, statusCode) {
    super(response, statusCode)
  }

  syncCall () {
    return (response, statusCode) => {
      response.statusCode = statusCode
      return response
    }
  }
}

module.exports = ResponseWithStatusCode
