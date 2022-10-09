'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const {
  ResponseWithHeader,
  ResponseWithStatusCode,
  ResponseWithStatusMessage,
  WrittenResponse,
  EndedResponse
} = require(`${__root}/async/http/index`)

class ResponseSentWithZippedProject extends AsyncObject {
  constructor (response, zippedProject) {
    return new EndedResponse(
      new WrittenResponse(
        new ResponseWithHeader(
          new ResponseWithStatusMessage(
            new ResponseWithStatusCode(response, 200), 'Ok.'
          ),
          'Content-Type', 'application/zip'
        ),
        zippedProject
      )
    )
  }
}

module.exports = ResponseSentWithZippedProject
