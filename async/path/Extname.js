'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const path = require('path')

// Represented result is string
class Extname extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return path.extname
  }
}

module.exports = Extname
