'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is response
class ResponseWithStatusMessage extends AsyncObject {
  constructor (response, statusMessage) {
    super(response, statusMessage)
  }

  syncCall () {
    return (response, statusMessage) => {
      response.statusMessage = statusMessage
      return response
    }
  }
}

module.exports = ResponseWithStatusMessage
