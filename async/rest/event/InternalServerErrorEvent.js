'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const ResponseSentWithInternalServerError = require('./../ResponseSentWithInternalServerError')

class InternalServerErrorEvent extends AsyncObject {
  constructor () {
    super()
  }

  syncCall () {
    return () => {
      return (error, request, response) => {
        new ResponseSentWithInternalServerError(response, error.stack).call()
      }
    }
  }
}

module.exports = InternalServerErrorEvent
