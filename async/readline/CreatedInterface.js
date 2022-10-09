'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const readline = require('readline')

// Represented result is interface
class CreatedInterface extends AsyncObject {
  constructor (options) {
    super(options)
  }

  syncCall () {
    return (options) => {
      return readline.createInterface(options)
    }
  }

  onResult (Interface) {
    return Interface
  }
}

module.exports = CreatedInterface
