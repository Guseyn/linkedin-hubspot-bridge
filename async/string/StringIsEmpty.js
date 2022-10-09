'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class StringIsEmpty extends AsyncObject {
  constructor (string) {
    super(string)
  }

  syncCall () {
    return (string) => {
      return string.length === 0
    }
  }
}

module.exports = StringIsEmpty
