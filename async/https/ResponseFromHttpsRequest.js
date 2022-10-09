'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const responseFromHttpsRequest = require('./custom-calls/responseFromHttpsRequest')

// Represented result is {statusCode, headers, body}
class ResponseFromHttpsRequest extends AsyncObject {
  constructor (options, requestBody) {
    super(options, requestBody)
  }

  asyncCall () {
    return (options, requestBody, callback) => {
      return responseFromHttpsRequest(options, requestBody, callback)
    }
  }
}

module.exports = ResponseFromHttpsRequest
