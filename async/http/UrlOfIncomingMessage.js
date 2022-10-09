'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is string
class UrlOfIncomingMessage extends AsyncObject {
  constructor (message) {
    super(message)
  }

  syncCall () {
    return (message) => {
      return message.url
    }
  }
}

module.exports = UrlOfIncomingMessage
