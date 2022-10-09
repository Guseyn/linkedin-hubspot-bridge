'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { CreatedMap } = require(`${__root}/async/map/index`)

const ResponseSentWithStatusCodeAndStatusMessageAndJsonBody = require('./ResponseSentWithStatusCodeAndStatusMessageAndJsonBody')

class ResponseSentOnBadRequest extends AsyncObject {
  constructor (response, message) {
    return new ResponseSentWithStatusCodeAndStatusMessageAndJsonBody(
      response, 400, 'Bad Request.', new CreatedMap('message', message)
    )
  }
}

module.exports = ResponseSentOnBadRequest
