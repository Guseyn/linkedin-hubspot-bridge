'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is string
class StringifiedJSON extends AsyncObject {
  constructor (json) {
    super(json)
  }

  syncCall () {
    return JSON.stringify
  }
}

module.exports = StringifiedJSON
