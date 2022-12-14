'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is response
class ResponseWithHeader extends AsyncObject {
  constructor (response, name, value) {
    super(response, name, value)
  }

  syncCall () {
    return (response, name, value) => {
      response.setHeader(name, value)
      return response
    }
  }
}

module.exports = ResponseWithHeader
