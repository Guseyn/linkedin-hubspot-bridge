'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is response
class ResponseWithWrittenHead extends AsyncObject {
  constructor (response, statusCode, statusMessage, headers) {
    super(response, statusCode, statusMessage, headers)
  }

  syncCall () {
    return (response, statusCode, statusMessage, headers) => {
      response.writeHead(statusCode, statusMessage, headers)
      return response
    }
  }
}

module.exports = ResponseWithWrittenHead
