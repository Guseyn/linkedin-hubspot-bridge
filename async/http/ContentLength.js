'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is number
class ContentLength extends AsyncObject {
  constructor (string) {
    super(string)
  }

  syncCall () {
    return (string) => {
      return Buffer.from(string, 'utf8').length
    }
  }
}

module.exports = ContentLength